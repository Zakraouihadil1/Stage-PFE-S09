import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMasonryComponent } from './project-masonry.component';

describe('ProjectMasonryComponent', () => {
  let component: ProjectMasonryComponent;
  let fixture: ComponentFixture<ProjectMasonryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectMasonryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMasonryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
