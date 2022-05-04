import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisindexComponent } from './devisindex.component';

describe('DevisindexComponent', () => {
  let component: DevisindexComponent;
  let fixture: ComponentFixture<DevisindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevisindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevisindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
