import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './core/components/nav-bar/nav-bar.component';
import { SideBarComponent } from './core/components/side-bar/side-bar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { ConsentComponent } from './consent/consent.component';
import {ContractComponent} from './contract/contract.component';
import { FormsModule } from '@angular/forms';
import { ProcessingComponent } from './processing/processing.component';
import {CoreModule} from "./core/core.module";
import { ProcessingDetailsComponent } from './processing-details/processing-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsentComponent,
    ContractComponent,
    ProcessingComponent,
    ProcessingDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
