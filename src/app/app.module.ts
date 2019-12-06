import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AiesecComponent } from './aiesec/aiesec.component';
import { AieseComponent } from './aiese/aiese.component';
import { AiesComponent } from './aies/aies.component';
import { AieComponent } from './aie/aie.component';
import { LoginComponent } from './login/login.component';
import { DateePipe } from './datee.pipe';
import { AjouterproduitComponent } from './ajouterproduit/ajouterproduit.component';
import { ChangerarticleComponent } from './changerarticle/changerarticle.component';
import { RechercherarticleComponent } from './rechercherarticle/rechercherarticle.component';

@NgModule({
  declarations: [
    AppComponent,
    AiesecComponent,
    AieseComponent,
    AiesComponent,
    AieComponent,
    LoginComponent,
    DateePipe,
    AjouterproduitComponent,
    ChangerarticleComponent,
    RechercherarticleComponent
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
