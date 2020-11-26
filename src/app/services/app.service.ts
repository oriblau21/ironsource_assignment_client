import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _apps$: Subject<App[]>;
  private readonly API = '/api/app';

  constructor(private http: HttpClient) {
    this._apps$ = new Subject<App[]>();
    this.fetchApps();
  }

  public get apps$(): Observable<App[]> {
    return this._apps$.asObservable().pipe(filter(apps => !!apps));
  }

  public fetchApps(): void {
    this.http.get<App[]>(this.API).subscribe(apps => {
      this._apps$.next(apps);
    });
  }

}
