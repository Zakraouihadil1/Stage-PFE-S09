import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewconsultationuserComponent } from './viewconsultationuser.component';

describe('ViewconsultationuserComponent', () => {
  let component: ViewconsultationuserComponent;
  let fixture: ComponentFixture<ViewconsultationuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewconsultationuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewconsultationuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
