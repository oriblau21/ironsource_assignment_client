import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

const modules = [
  MatInputModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatSelectModule,
  MatButtonModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }
