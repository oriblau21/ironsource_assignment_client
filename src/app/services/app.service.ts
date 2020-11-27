import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, finalize, take, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from './loading.service';
import { App } from '../models/app.interface';
import { AppQuery } from '../models/app-query.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _apps$: Subject<App[]>;
  private readonly API = '/api/app';

  constructor(private http: HttpClient, private loadingService: LoadingService) {
    this._apps$ = new Subject<App[]>();
  }

  public get apps$(): Observable<App[]> {
    return this._apps$.asObservable().pipe(filter(apps => !!apps));
  }

  public fetchApps(params: AppQuery = {}): void {
    this.loadingService.isLoading = true;
    this.http.get<App[]>(this.API, { params: {
      freeText: params.freeText || '',
      birthYear: params.birthYear?.toString() || '',
      preferredCategories: params.preferredCategories || '',
      minAppRating: params.minAppRating?.toString() || '',
    }}).pipe(tap(() => this.loadingService.isLoading = false)).subscribe(apps => {
      this._apps$.next(apps);
    });
  }

}
