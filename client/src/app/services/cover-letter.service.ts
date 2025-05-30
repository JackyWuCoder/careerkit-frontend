import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoverLetterService {
  private apiUrl = "http://localhost:5240/api/v1/coverLetter/generate/template";

  constructor(private http: HttpClient) { }

  generateCoverLetter(body: any): Observable<string | null> {
    return this.http.post<{ result: string }>(this.apiUrl, body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
    }).pipe(
      map(response => response.result),
      catchError((err) => {
        console.error('Error from API:', err);
        return of(null);
      }),
    )
  }
}
