import { Component, OnDestroy } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-apps-table',
  templateUrl: './apps-table.component.html',
  styleUrls: ['./apps-table.component.scss']
})
export class AppsTableComponent {
  public apps$ = this.appService.apps$;
  public displayedColumns: string[] = ['icon', 'name', 'category', 'rating', 'minAge'];

  constructor(private appService: AppService) { }


}
