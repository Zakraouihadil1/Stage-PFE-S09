import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateconsultationuserComponent } from './createconsultationuser.component';

describe('CreateconsultationuserComponent', () => {
  let component: CreateconsultationuserComponent;
  let fixture: ComponentFixture<CreateconsultationuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateconsultationuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateconsultationuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
