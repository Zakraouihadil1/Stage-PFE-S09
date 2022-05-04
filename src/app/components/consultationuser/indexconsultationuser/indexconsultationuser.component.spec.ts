import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexconsultationuserComponent } from './indexconsultationuser.component';

describe('IndexconsultationuserComponent', () => {
  let component: IndexconsultationuserComponent;
  let fixture: ComponentFixture<IndexconsultationuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexconsultationuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexconsultationuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
