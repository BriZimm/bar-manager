import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiqueursCordialsComponent } from './liqueurs-cordials.component';

describe('LiqueursCordialsComponent', () => {
  let component: LiqueursCordialsComponent;
  let fixture: ComponentFixture<LiqueursCordialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiqueursCordialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiqueursCordialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
