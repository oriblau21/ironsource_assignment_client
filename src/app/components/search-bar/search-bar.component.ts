import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AppQuery } from 'src/app/models/app-query.interface';
import { AppService } from 'src/app/services/app.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  public appQueryForm: FormGroup;
  public categories$: Observable<string[]>;

  constructor(private appService: AppService,
              private categoryService: CategoryService) {
    this.appQueryForm = new FormGroup({
      freeText: new FormControl(),
      birthYear: new FormControl(),
      preferredCategories: new FormControl(),
      minAppRating: new FormControl()
    });
    this.categories$ = this.categoryService.categories$;
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
