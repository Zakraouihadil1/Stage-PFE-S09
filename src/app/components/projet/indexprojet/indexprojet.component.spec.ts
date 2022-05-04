import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexprojetComponent } from './indexprojet.component';

describe('IndexprojetComponent', () => {
  let component: IndexprojetComponent;
  let fixture: ComponentFixture<IndexprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexprojetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
