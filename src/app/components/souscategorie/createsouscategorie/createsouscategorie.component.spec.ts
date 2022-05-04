import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesouscategorieComponent } from './createsouscategorie.component';

describe('CreatesouscategorieComponent', () => {
  let component: CreatesouscategorieComponent;
  let fixture: ComponentFixture<CreatesouscategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatesouscategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesouscategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
