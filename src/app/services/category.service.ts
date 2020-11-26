import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private _categories$: Subject<string[]>;
  private readonly API = '/api/category';

  constructor(private http: HttpClient) {
    this._categories$ = new Subject<string[]>();
    this.fetchCategories();
  }

  public get apps$(): Observable<string[]> {
    return this._categories$.asObservable().pipe(filter(categories => !!categories));
  }

  public fetchCategories(): void {
    this.http.get<string[]>(this.API).subscribe(categories => {
      this._categories$.next(categories);
    });
  }

}
