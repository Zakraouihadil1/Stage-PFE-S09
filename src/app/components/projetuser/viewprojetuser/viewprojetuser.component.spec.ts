import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprojetuserComponent } from './viewprojetuser.component';

describe('ViewprojetuserComponent', () => {
  let component: ViewprojetuserComponent;
  let fixture: ComponentFixture<ViewprojetuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewprojetuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewprojetuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
