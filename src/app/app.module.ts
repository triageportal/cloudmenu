import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './shared/menu/menu.module';
import { HttpClientModule } from '@angular/common/http';
import { FlowComponent } from './flow/flow.component';
import { HeaderModule } from './shared/header/header.module';
import { FormsModule } from '@angular/forms';
import { FooterModule } from './shared/footer/footer.module';


@NgModule({
  declarations: [
    AppComponent,
    FlowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    HttpClientModule,
    HeaderModule,
    FormsModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
