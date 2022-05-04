import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprojetComponent } from './viewprojet.component';

describe('ViewprojetComponent', () => {
  let component: ViewprojetComponent;
  let fixture: ComponentFixture<ViewprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewprojetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
