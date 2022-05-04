import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisuserindexComponent } from './devisuserindex.component';

describe('DevisuserindexComponent', () => {
  let component: DevisuserindexComponent;
  let fixture: ComponentFixture<DevisuserindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevisuserindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevisuserindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
