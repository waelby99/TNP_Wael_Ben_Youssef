import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AiesecComponent } from './aiesec/aiesec.component';
import { AieseComponent } from './aiese/aiese.component';
import { AieComponent } from './aie/aie.component';
import { LoginComponent} from './login/login.component';
import { AjouterproduitComponent } from './ajouterproduit/ajouterproduit.component';
import { ChangerarticleComponent } from './changerarticle/changerarticle.component';
import { RechercherarticleComponent } from './rechercherarticle/rechercherarticle.component';

const routes: Routes = [
  {path:'aiesec',component:AiesecComponent},
  {path:'aie',component:AieComponent},
  {path:'login',component:LoginComponent},
  {path:'rechercherarticle',component:RechercherarticleComponent},
  {path:'changerarticle',component:ChangerarticleComponent},
  {path:'ajouterproduit',component:AjouterproduitComponent},
  {path:'aie/:id/:libel/:imag/:dat/:prix/:booleen',component:AieseComponent},
  {path:'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
