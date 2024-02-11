import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { StartPageComponent } from './start-page/start-page.component';
import { Title } from '@angular/platform-browser';

const routes: Routes = [
  { path: "" , component:StartPageComponent ,  title: "StartPage"  },
  { path: "about" , component:AboutComponent , title: "About" },
  { path: "portfolio" , component:PortfolioComponent , title: "Portfolio" },
  { path: "contact" , component:ContactComponent , title: "Contant" },
  { path: "**" , component:NotfoundComponent , title: "Notfound" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { scrollPositionRestoration: "enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
