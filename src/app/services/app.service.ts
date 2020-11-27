import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _apps$: Subject<App[]>;
  private readonly API = '/api/app';

  constructor(private http: HttpClient, private loadingService: LoadingService) {
    this._apps$ = new Subject<App[]>();
    this.fetchApps();
  }

  public get apps$(): Observable<App[]> {
    return this._apps$.asObservable().pipe(filter(apps => !!apps));
  }

  public fetchApps(): void {
    this.loadingService.isLoading = true;
    this.http.get<App[]>(this.API).pipe(finalize(() => this.loadingService.isLoading = false)).subscribe(apps => {
      this._apps$.next(apps);
    });
  }

}
