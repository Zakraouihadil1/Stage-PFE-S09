import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateprojetComponent } from './createprojet.component';

describe('CreateprojetComponent', () => {
  let component: CreateprojetComponent;
  let fixture: ComponentFixture<CreateprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateprojetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
