import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverLetterTemplateComponent } from './cover-letter-template.component';

describe('CoverLetterComponent', () => {
  let component: CoverLetterTemplateComponent;
  let fixture: ComponentFixture<CoverLetterTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoverLetterTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoverLetterTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
