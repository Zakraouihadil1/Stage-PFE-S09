import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexconsultationComponent } from './indexconsultation.component';

describe('IndexconsultationComponent', () => {
  let component: IndexconsultationComponent;
  let fixture: ComponentFixture<IndexconsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexconsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexconsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
