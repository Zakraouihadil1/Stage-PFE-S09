import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsouscategorieComponent } from './editsouscategorie.component';

describe('EditsouscategorieComponent', () => {
  let component: EditsouscategorieComponent;
  let fixture: ComponentFixture<EditsouscategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditsouscategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsouscategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
