import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBodyAboutComponent } from './main-body-about.component';

describe('MainBodyAboutComponent', () => {
  let component: MainBodyAboutComponent;
  let fixture: ComponentFixture<MainBodyAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBodyAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBodyAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
