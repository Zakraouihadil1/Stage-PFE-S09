import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviseditComponent } from './devisedit.component';

describe('DeviseditComponent', () => {
  let component: DeviseditComponent;
  let fixture: ComponentFixture<DeviseditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviseditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
