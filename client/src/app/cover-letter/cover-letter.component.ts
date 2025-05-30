import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CoverLetterService } from '../services/cover-letter.service'

@Component({
  selector: 'app-cover-letter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cover-letter.component.html',
  styleUrl: './cover-letter.component.css'
})
export class CoverLetterComponent {
  coverLetter = '';
  jobDescription = '';
  generatedLetter = '';
  isLoading = false;

  constructor(private coverLetterService: CoverLetterService) {}

  generate() {
    this.isLoading = true;

    this.coverLetterService.generateCoverLetter({
      Template: this.coverLetter,
      JobDescription: this.jobDescription
    }).subscribe({
      next: (result) => {
        this.generatedLetter = result || 'Failed to generate letter.';
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.generatedLetter = 'An error occurred while generating the letter.';
        this.isLoading = false;
      }
    });
  }
}
