import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexsouscategorieComponent } from './indexsouscategorie.component';

describe('IndexsouscategorieComponent', () => {
  let component: IndexsouscategorieComponent;
  let fixture: ComponentFixture<IndexsouscategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexsouscategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexsouscategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
