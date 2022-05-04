import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRightSidebarComponent } from './post-right-sidebar.component';

describe('PostRightSidebarComponent', () => {
  let component: PostRightSidebarComponent;
  let fixture: ComponentFixture<PostRightSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostRightSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
