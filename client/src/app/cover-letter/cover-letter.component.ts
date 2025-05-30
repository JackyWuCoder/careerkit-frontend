import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cover-letter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cover-letter.component.html',
  styleUrl: './cover-letter.component.css'
})
export class CoverLetterComponent {
  userLetter = '';
  jobDescription = '';
  generatedLetter = '';

  generate() {
    this.generatedLetter = `AI response based on:
    - Your letter: ${this.userLetter}
    - Job: ${this.jobDescription}`;
  }
}
