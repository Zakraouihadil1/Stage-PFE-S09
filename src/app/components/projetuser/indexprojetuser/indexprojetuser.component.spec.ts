import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexprojetuserComponent } from './indexprojetuser.component';

describe('IndexprojetuserComponent', () => {
  let component: IndexprojetuserComponent;
  let fixture: ComponentFixture<IndexprojetuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexprojetuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexprojetuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
