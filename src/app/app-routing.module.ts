import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MyportfolioComponent } from './myportfolio/myportfolio.component';
import { SamplesComponent } from './samples/samples.component';

const routes: Routes = [{path:'about', component:AboutComponent},
{path:'samples',component:SamplesComponent},
{path:'contact', component:ContactComponent},
{path:'myportfolio', component:MyportfolioComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
