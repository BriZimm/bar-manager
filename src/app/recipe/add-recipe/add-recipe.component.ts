import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { IGlass } from 'src/shared/classes/IGlass';
import { IRecipe } from 'src/shared/classes/IRecipe';
import { NgForm } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { IRecipeCategory } from 'src/shared/classes/IRecipeCategory';
import { IIngredientItem } from 'src/shared/classes/IIngredientItem';
import { IMixer } from 'src/shared/classes/IMixer';
import { IGarnish } from 'src/shared/classes/IGarnish';
import { IAlcohol } from 'src/shared/classes/IAlcohol';
import { IIngredient } from 'src/shared/classes/IIngredient';
import { mergeMap } from 'rxjs/operators';
import { BlobService, UploadParams, UploadConfig } from 'angular-azure-blob-service'
import { Observable, of, zip } from 'rxjs';
import { ITag } from 'src/shared/classes/ITag';

const Config: UploadParams = {
    // tslint:disable-next-line: max-line-length
    sas: '?sv=2018-03-28&ss=b&srt=sco&sp=rwdlac&se=2050-04-24T10:43:06Z&st=2019-04-24T02:43:06Z&spr=https,http&sig=WBfrnkU3aVoa%2F7VaxIFv9M6KZLeus0QHtML4E3vqPEY%3D',
    storageAccount: 'bmimages',
    containerName: 'recipe-images'
};

@Component({
    selector: 'bm-add-recipe',
    templateUrl: './add-recipe.component.html',
    styleUrls: ['./add-recipe.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AddRecipeComponent implements OnInit {
    visible = false;
    glassList: IGlass[] = [];
    mixers: IMixer[] = [];
    liquors: IAlcohol[] = [];
    garnishes: IGarnish[] = [];
    recipeCategories: IRecipeCategory[] = [];
    recipe: IRecipe;
    newRecipeName: string;
    selectedGlass: IGlass;
    ingredientTypes: SelectItem[] = [];
    measurements: SelectItem[] = [];
    tagList: ITag[];
    tags: ITag[];
    results: ITag[];
    liquorCount: number;
    mixerCount: number;
    garnishCount: number;
    ingredientsAdded: boolean;
    ingredients: IIngredientItem[] = [];
    ingredientMenuType: number;
    ingredientsCount = 0;
    recipeImageSaved = false;
    currentFile: File;
    percent: number;
    config: UploadConfig;
    imagePath;
    imgURL: any;


    @ViewChild(NgForm)
    ngForm: NgForm;

    constructor(private apiService: ApiService,
                private blob: BlobService) { }

    ngOnInit() {
        this.initializeFields();
        this.initializeValues();
    }

    reset() {
        this.blankForm();
        this.ingredientsCount = 0;
    }

    initializeFields() {
        this.bindIngredientCounts();
        this.apiService.getAllGlasses()
            .subscribe((data: IGlass[]) => {
                if (data) {
                    this.glassList = data.sort((a, b) => a.glassName.localeCompare(b.glassName));
                }
            });
        this.apiService.getAllRecipeCategories()
            .subscribe((data: IRecipeCategory[]) => {
                if (data) {
                    this.recipeCategories = data.sort((a, b) => a.recipeCategoryName.localeCompare(b.recipeCategoryName));
                }
            });

        this.apiService.getAllMixers()
            .pipe(mergeMap((data: IMixer[]) => {
                if (data) {
                    this.mixers = data.sort((a, b) => a.mixerName.localeCompare(b.mixerName));
                }
                return this.apiService.getAllAlcohol();
            }))
            .pipe(mergeMap((data: IAlcohol[]) => {
                if (data) {
                    this.liquors = data.sort((a, b) => a.alcoholName.localeCompare(b.alcoholName));
                }
                return this.apiService.getAllGarnishes();
            }))
            .subscribe((data: IGarnish[]) => {
                if (data) {
                    this.garnishes = data.sort((a, b) => a.garnishName.localeCompare(b.garnishName));
                }
            });

        this.apiService.getTagList().subscribe(list => this.tagList = list);
    }

    private initializeValues() {
        if (!this.recipe) {
            this.blankForm();
        }
    }

    blankForm() {
        this.recipe = {
            id: 0,
            name: null,
            recipeImage: null,
            recipeCategory: null,
            tags: null,
            glass: {
                glassID: null,
                glassName: null,
                glassImage: null
            },
            description: null,
            instructions: null,
            ingredients: null
        };
        this.ingredients = [];
        this.currentFile = null;
    }

    onUpload(event) {
        // Generate random filename from upload
        const fileName = this.generateRandomFileName();

        // Copy Uploaded file to a new file with a new random filename
        const blob = event.files[0].slice(0, event.files[0].size, event.files[0].type);
        this.currentFile = new File([blob], fileName, {type: event.files[0].type}); // file to upload

        // send original to preview function
        this.previewImage(event.files[0]);
    }

    generateRandomFileName() {
        let fileName = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < 14; i++) {
            fileName += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return fileName + '.jpg';
    }

    previewImage(file: File) {
        if (file === null) {
            return;
        }

        const reader = new FileReader();
        this.imagePath = file;
        reader.readAsDataURL(file);
        reader.onload = (event) => {
            this.imgURL = reader.result;
        };
    }

    saveRecipe(close: boolean) {
        if (this.recipe) {
            this.addTags();
            this.buildIngredientData();
            this.apiService
                .createRecipe(this.recipe)
                .subscribe(result => {
                    this.uploadRecipeImage();
                    this.blankForm();
                    if (close) {
                        this.hide();
                    }
                });
        }
    }

    addTags() {
        this.recipe.tags = this.tags;
    }

    buildIngredientData() {
        const recipeIngredients: IIngredient[] = [];
        this.ingredients.forEach((row: IIngredientItem) => {
            const values: IIngredient  = {
                ingredientId: 0,
                recipeID: 0,
                type: row.type,
                alcoholID: row.type === 1 ? row.alcohol.alcoholID : null,
                mixerID: row.type === 2 ? row.mixer.mixerId : null,
                garnishID: row.type === 3 ? row.garnish.garnishID : null,
                amount: row.amount,
                measure: row.type === 3 ? null : row.measure
            };
            recipeIngredients.push(values);
        });
        this.recipe.ingredients = recipeIngredients;
        if (this.currentFile) {
            this.recipe.recipeImage = this.currentFile.name;
        } else {
            this.recipe.recipeImage = null;
        }
    }

    uploadRecipeImage() {
        if (this.currentFile !== null) {
          const baseUrl = this.blob.generateBlobUrl(Config, this.currentFile.name);
          this.config = {
            baseUrl,
            sasToken: Config.sas,
            blockSize: 1024 * 64,
            file: this.currentFile,
            complete: () => {
              console.log('Transfer completed !');
            },
            error: (err) => {
              console.log('File Upload Error:', err);
            },
            progress: (percent) => {
              this.percent = percent;
            }
          };
          this.blob.upload(this.config);
        }
    }

    AddRow() {
        const newRow: IIngredientItem = {
            type: 0,
            alcohol: {
                alcoholID: this.liquors[0].alcoholID,
                alcoholName: this.liquors[0].alcoholName
            },
            mixer: {
                mixerId: this.mixers[0].mixerId,
                mixerName: this.mixers[0].mixerName
            },
            garnish: {
                garnishID: this.garnishes[0].garnishID,
                garnishName: this.garnishes[0].garnishName
            },
            amount: null,
            measure: 'oz'
        };
        this.ingredients.push(newRow);
        this.ingredientsCount += 1;
    }

    deleteRow(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsCount -= 1;
    }

    bindIngredientCounts() {
        this.ingredientTypes = [
            {label: 'Choose Type', value: 0},
            {label: 'Liquor', value: 1},
            {label: 'Mixer', value: 2},
            {label: 'Garnish', value: 3}
        ];
        this.measurements = [
            {label: 'oz', value: 'oz'},
            {label: 'ml', value: 'ml'},
            {label: 'dash', value: 'dash'},
            {label: 'splash', value: 'splash'},
            {label: 'part', value: 'part'}
        ];
    }

    tagSearch(event) {
        return this.apiService.getTagList()
            .toPromise()
            .then(res => res.filter(x => x.tag.includes(event.query)))
            .then(tags => {
                if (tags.length > 0) {
                    this.results = tags;
                }
            });
    }

    show() {
        this.AddRow();
        this.visible = true;
    }

    hide() {
        this.blankForm();
        this.visible = false;
    }
}
