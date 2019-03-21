import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquorDbComponent } from './liquor-db.component';

describe('LiquorDbComponent', () => {
  let component: LiquorDbComponent;
  let fixture: ComponentFixture<LiquorDbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquorDbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquorDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
