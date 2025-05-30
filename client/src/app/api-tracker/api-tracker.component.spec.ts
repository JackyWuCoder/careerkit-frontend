import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiTrackerComponent } from './api-tracker.component';

describe('ApiTrackerComponent', () => {
  let component: ApiTrackerComponent;
  let fixture: ComponentFixture<ApiTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiTrackerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
