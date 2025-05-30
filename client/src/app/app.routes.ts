import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { CoverLetterComponent } from './cover-letter/cover-letter.component';
import { ResumeComponent } from './resume/resume.component';
import { InterviewComponent } from './interview/interview.component';
import { AdviceComponent } from './advice/advice.component';
import { AiComponent } from './ai/ai.component';
import { ApiTrackerComponent } from './api-tracker/api-tracker.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cover-letter', component: CoverLetterComponent},
    { path: 'resume', component: ResumeComponent },
    { path: 'interview', component: InterviewComponent },
    { path: 'advice', component: AdviceComponent },
    { path: 'ai', component: AiComponent },
    { path: 'tracker', component: ApiTrackerComponent },
];
