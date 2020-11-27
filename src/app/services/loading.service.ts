import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private _loading$: Subject<boolean>;

  constructor() {
    this._loading$ = new Subject<boolean>();
  }

  public get loading$(): Observable<boolean> {
    return this._loading$.asObservable();
  }

  public set isLoading(value: boolean) {
    this._loading$.next(value);
  }

}
