import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { IGlass } from 'src/shared/classes/IGlass';
import { IRecipeCategory } from 'src/shared/classes/IRecipeCategory';
import { IMixer } from 'src/shared/classes/IMixer';
import { IInventoryCategory } from 'src/shared/classes/IInventoryCategory';
import { IGarnish } from 'src/shared/classes/IGarnish';
import { IAlcohol } from 'src/shared/classes/IAlcohol';
import { IRecipe } from 'src/shared/classes/IRecipe';
import { ITag } from 'src/shared/classes/ITag';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    // API Url
    baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
        mode: 'no-cors'
    };

    // Error handling
    handleError(error) {
        let errorMessage = '';
        if(error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }

// Glasses
    // API: GET /Glasses
    public getAllGlasses(): Observable<IGlass[]> {
        return this.http.get<IGlass[]>(this.baseUrl + '/api/glass', this.httpOptions)
                .pipe(
                    retry(1),
                    catchError(this.handleError)
                );
    }

    // API: POST /Glass
    public createGlass(glass: IGlass) {
        return this.http.post<IGlass>(this.baseUrl + '/api/glass', JSON.stringify(glass), this.httpOptions)
                .pipe(
                    retry(1),
                    catchError(this.handleError)
                );
    }

    // API: GET /Glass/:id
    public getGlassById(glassId: number): Observable<IGlass> {
        return this.http.get<IGlass>(this.baseUrl + '/api/glass/' + glassId, this.httpOptions)
                .pipe(
                    retry(1),
                    catchError(this.handleError)
                );
    }

    // API: PUT /Glass/:id
    public updateGlass(glassId: number,  glass: IGlass) {
        return this.http.put<IGlass>(this.baseUrl + '/api/glass/' + glassId, JSON.stringify(glass), this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }

    // DELETE /Glass/:id
    public deleteGlassById(glassId: number) {
        return this.http.delete<IGlass>(this.baseUrl + '/employees/' + glassId, this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }


// Recipe Categories
    // API: GET /RecipeCategories
    public getAllRecipeCategories(): Observable<IRecipeCategory[]> {
        return this.http.get<IRecipeCategory[]>(this.baseUrl + '/api/recipecategorys', this.httpOptions)
                .pipe(
                    retry(1),
                    catchError(this.handleError)
                );
    }

    // API: GET /RecipeCategorys/:id
    public getRecipeCategoryById(categoryId: number): Observable<IRecipeCategory> {
        return this.http.get<IRecipeCategory>(this.baseUrl + '/api/recipecategorys/' + categoryId, this.httpOptions)
                .pipe(
                    retry(1),
                    catchError(this.handleError)
                );
    }

// Iventory Categories
    // API: GET /IventoryCategories
    public getAllIventoryCategories(): Observable<IInventoryCategory[]> {
        return this.http.get<IInventoryCategory[]>(this.baseUrl + '/api/inventorycategory', this.httpOptions)
                .pipe(
                    retry(1),
                    catchError(this.handleError)
                );
    }

// Alcohol
    // API: GET /Alcohol
    public getAllAlcohol(): Observable<IAlcohol[]> {
        return this.http.get<IAlcohol[]>(this.baseUrl + '/api/alcohol', this.httpOptions)
                .pipe(
                    retry(1),
                    catchError(this.handleError)
                );
    }

    // API: GET /Alcohol
    public getAlcoholById(id: number): Observable<IAlcohol> {
        return this.http.get<IAlcohol>(this.baseUrl + '/api/alcohol/' + id, this.httpOptions)
                .pipe(
                    retry(1),
                    catchError(this.handleError)
                );
    }

// Mixers
    // API: GET /Mixers
    public getAllMixers(): Observable<IMixer[]> {
        return this.http.get<IMixer[]>(this.baseUrl + '/api/mixer', this.httpOptions)
                .pipe(
                    retry(1),
                    catchError(this.handleError)
                );
    }

    // API: GET /MixerById
    public getMixerById(mixerId: number): Observable<IMixer> {
        return this.http.get<IMixer>(this.baseUrl + '/api/mixer/' + mixerId, this.httpOptions)
                .pipe(
                    retry(1),
                    catchError(this.handleError)
                );
    }

// Garnishes
    // API: GET /Garnishes
    public getAllGarnishes(): Observable<IGarnish[]> {
        return this.http.get<IGarnish[]>(this.baseUrl + '/api/garnish', this.httpOptions)
                .pipe(
                    retry(1),
                    catchError(this.handleError)
                );
    }

    // API: GET /GarnishById
    public getGarnishById(garnishId: number): Observable<IGarnish> {
        return this.http.get<IGarnish>(this.baseUrl + '/api/garnish/' + garnishId, this.httpOptions)
                .pipe(
                    retry(1),
                    catchError(this.handleError)
                );
    }


// Recipes
    // API: GET /Recipes
    public getAllRecipes(): Observable<IRecipe[]> {
        return this.http.get<IRecipe[]>(this.baseUrl + '/api/recipe', this.httpOptions)
                .pipe(
                    retry(1),
                    catchError(this.handleError)
                );
    }

    // API: GET /Recipe By ID
    public getRecipeById(recipeId: number): Observable<IRecipe> {
        return this.http.get<IRecipe>(this.baseUrl + '/api/recipe/' + recipeId, this.httpOptions)
                .pipe(
                    retry(1),
                    catchError(this.handleError)
                );
    }

    // API: POST /Recipes
    public createRecipe(recipe: IRecipe): Observable<IRecipe[]> {
        return this.http.post<IRecipe[]>(this.baseUrl + '/api/recipe', JSON.stringify(recipe), this.httpOptions)
                .pipe(
                    retry(1),
                    catchError(this.handleError)
                );
    }

    // TagList
    // API: GET /TagList
    public getTagList(): Observable<ITag[]> {
        return this.http.get<ITag[]>(this.baseUrl + '/api/taglist', this.httpOptions)
                .pipe(
                    retry(1),
                    catchError(this.handleError)
                );
    }
}
