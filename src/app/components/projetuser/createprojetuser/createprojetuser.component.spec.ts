import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateprojetuserComponent } from './createprojetuser.component';

describe('CreateprojetuserComponent', () => {
  let component: CreateprojetuserComponent;
  let fixture: ComponentFixture<CreateprojetuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateprojetuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateprojetuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
