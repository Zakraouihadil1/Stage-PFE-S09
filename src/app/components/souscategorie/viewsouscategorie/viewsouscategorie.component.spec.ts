import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsouscategorieComponent } from './viewsouscategorie.component';

describe('ViewsouscategorieComponent', () => {
  let component: ViewsouscategorieComponent;
  let fixture: ComponentFixture<ViewsouscategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsouscategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsouscategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
