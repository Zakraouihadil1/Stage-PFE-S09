import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexproduitComponent } from './indexproduit.component';

describe('IndexproduitComponent', () => {
  let component: IndexproduitComponent;
  let fixture: ComponentFixture<IndexproduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexproduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
