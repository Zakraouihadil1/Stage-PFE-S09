import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisusercreateComponent } from './devisusercreate.component';

describe('DevisusercreateComponent', () => {
  let component: DevisusercreateComponent;
  let fixture: ComponentFixture<DevisusercreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevisusercreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevisusercreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
