import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectClassic1Component } from './project-classic1.component';

describe('ProjectClassic1Component', () => {
  let component: ProjectClassic1Component;
  let fixture: ComponentFixture<ProjectClassic1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectClassic1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectClassic1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
