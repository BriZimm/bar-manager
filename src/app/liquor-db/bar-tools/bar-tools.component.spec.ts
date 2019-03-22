import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarToolsComponent } from './bar-tools.component';

describe('BarToolsComponent', () => {
  let component: BarToolsComponent;
  let fixture: ComponentFixture<BarToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
