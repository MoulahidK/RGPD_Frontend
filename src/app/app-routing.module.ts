import { ConsentComponent } from './consent/consent.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContractComponent} from './contract/contract.component';
import {ProcessingComponent} from "./processing/processing.component";
import {ProcessingDetailsComponent} from "./processing-details/processing-details.component";

const routes: Routes = [
  { path: 'processing/:id', component: ProcessingDetailsComponent },
  { path: 'consent', component: ConsentComponent },
  { path: 'contract', component: ContractComponent },
  { path: '', redirectTo:'consent', pathMatch:'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
