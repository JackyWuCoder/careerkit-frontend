import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoverLetterComponent } from './cover-letter/cover-letter.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoverLetterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
}
