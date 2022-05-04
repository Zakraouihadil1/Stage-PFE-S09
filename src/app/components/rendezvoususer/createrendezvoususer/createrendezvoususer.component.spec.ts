import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaterendezvoususerComponent } from './createrendezvoususer.component';

describe('CreaterendezvoususerComponent', () => {
  let component: CreaterendezvoususerComponent;
  let fixture: ComponentFixture<CreaterendezvoususerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaterendezvoususerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaterendezvoususerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
