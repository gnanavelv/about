import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWorksComponent } from './main-works.component';

describe('MainWorksComponent', () => {
  let component: MainWorksComponent;
  let fixture: ComponentFixture<MainWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
