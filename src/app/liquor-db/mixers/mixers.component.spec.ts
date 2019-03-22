import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixersComponent } from './mixers.component';

describe('MixersComponent', () => {
  let component: MixersComponent;
  let fixture: ComponentFixture<MixersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
