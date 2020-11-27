import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppQuery } from 'src/app/models/app-query.interface';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  public appQueryForm: FormGroup;

  constructor(private appService: AppService) {
    this.appQueryForm = new FormGroup({
      birthYear: new FormControl(),
      minAppRating: new FormControl()
    });
  }

  submitSearch(): void {
    const searchParams: AppQuery = {
      freeText: this.appQueryForm.controls.freeText.value,
      birthYear: this.appQueryForm.controls.birthYear.value,
      preferredCategories: this.appQueryForm.controls.preferredCategories.value,
      minAppRating: this.appQueryForm.controls.minAppRating.value
    };
    this.appService.fetchApps(searchParams);
  }
}
