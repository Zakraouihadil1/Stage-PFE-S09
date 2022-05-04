import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexrendezvoususerComponent } from './indexrendezvoususer.component';

describe('IndexrendezvoususerComponent', () => {
  let component: IndexrendezvoususerComponent;
  let fixture: ComponentFixture<IndexrendezvoususerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexrendezvoususerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexrendezvoususerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
