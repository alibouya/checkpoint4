import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponentComponent } from './cv-component/cv-component.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { ItemComponentComponent } from './item-component/item-component.component';
import { DetailComponentComponent } from './detail-component/detail-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CvComponentComponent,
    ListComponentComponent,
    ItemComponentComponent,
    DetailComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
