import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { MainAboutComponent } from './main-body/main-about/main-about.component';
import { MainWorksComponent } from './main-body/main-works/main-works.component';
import { MainBodyAboutComponent } from './main-body/main-body-about/main-body-about.component';
import { MainFooterComponent } from './main-body/main-footer/main-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainBodyComponent,
    MainAboutComponent,
    MainWorksComponent,
    MainBodyAboutComponent,
    MainFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
