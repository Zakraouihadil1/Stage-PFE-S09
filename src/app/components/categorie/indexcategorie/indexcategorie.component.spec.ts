import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexcategorieComponent } from './indexcategorie.component';

describe('IndexcategorieComponent', () => {
  let component: IndexcategorieComponent;
  let fixture: ComponentFixture<IndexcategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexcategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexcategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
