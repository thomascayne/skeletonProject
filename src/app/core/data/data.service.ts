import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError, of } from 'rxjs';

@Injectable()
export class DataService {
  
  
  public constructor(private http: HttpClient) {}


  private handleError(error: HttpErrorResponse): Observable<any> {
    let errorMessage: any;

    if (error.error instanceof Error) {
      // A client-side or network error occurred.  Handle it accordingly.
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      /* The backend returned an unsuccessful response code.
            The response body may contain clues as to what went wrong. */
      errorMessage = `Backend returned code ${error.status}, body was: ${
        error.error
      }`;
    }

    console.error(error);

    return throwError(new Error(errorMessage));
  }
}
