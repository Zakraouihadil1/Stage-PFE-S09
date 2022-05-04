import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateconsultationComponent } from './createconsultation.component';

describe('CreateconsultationComponent', () => {
  let component: CreateconsultationComponent;
  let fixture: ComponentFixture<CreateconsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateconsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateconsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
