import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataService {
  public constructor(private http: HttpClient) {}

  /**
   * @param error HttpErrorResponse
   * @return Observable<string>
   */
  private handleError(error: HttpErrorResponse): Observable<string> {
    /**
     * Use ternary when using only one if-else condition to avoid using early exit
     *
     * 1. A client-side or network error occurred.  Handle it accordingly.
     * else
     * 2. The backend returned an unsuccessful response code.
     *    The response body may contain clues as to what went wrong.
     */
    const errorMessage =
      error.error instanceof Error
        ? `An error occurred: ${error.error.message}`
        : `Backend returned code ${error.status}, body was: ${error.error}`;

    console.error(error);

    return throwError(new Error(errorMessage));
  }
}
