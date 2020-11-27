import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppService } from './services/app.service';
import { CategoryService } from './services/category.service';
import { APIInterceptor } from './interceptors/API.interceptor';
import { ServerErrorComponent } from './components/server-error/server-error.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppsTableComponent } from './components/apps-table/apps-table.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from './material.module';
import { AppComponent } from './components/app/app.component';
import { LoadingService } from './services/loading.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchBarComponent,
    AppsTableComponent,
    NotFoundComponent,
    ServerErrorComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [
    CategoryService,
    AppService,
    LoadingService,
    { provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
