import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisuserviewComponent } from './devisuserview.component';

describe('DevisuserviewComponent', () => {
  let component: DevisuserviewComponent;
  let fixture: ComponentFixture<DevisuserviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevisuserviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevisuserviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
