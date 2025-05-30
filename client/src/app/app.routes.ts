import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { CoverLetterComponent } from './cover-letter/cover-letter.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cover-letter', component: CoverLetterComponent},
    { path: 'resume', component: HomeComponent },
    { path: 'interview', component: HomeComponent },
    { path: 'advice', component: HomeComponent },
    { path: 'ai', component: HomeComponent },
    { path: 'tracker', component: HomeComponent },
];
