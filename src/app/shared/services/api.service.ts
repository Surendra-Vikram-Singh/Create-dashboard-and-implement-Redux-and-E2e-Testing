import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private jsonPlaceholderUrl = 'https://jsonplaceholder.typicode.com/posts';
  private northwindUrl = 'https://services.odata.org/V4/Northwind/Northwind.svc/Products';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get(this.jsonPlaceholderUrl).pipe(
      catchError(this.handleError)
    );
  }

  getProducts(): Observable<any> {
    return this.http.get(this.northwindUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    // Handle the error appropriately in your application
    console.error('An error occurred:', error.error.message);
    return throwError('Something went wrong; please try again later.');
  }
}
