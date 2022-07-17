




import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './boutique/sidebar/sidebar.component';

import { ContentComponent } from './boutique/content/content.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreationboutiqueComponent } from './creationboutique/creationboutique.component';
import { MaboutiqueComponent } from './maboutique/maboutique.component';
import { SidebarmaboutiqueComponent } from './maboutique/sidebarmaboutique/sidebarmaboutique.component';
import { ContentmaboutiqueComponent } from './maboutique/contentmaboutique/contentmaboutique.component';
import { EditboutiqueComponent } from './maboutique/editboutique/editboutique.component';
import { ConsultmaboutiqueComponent } from './maboutique/consultmaboutique/consultmaboutique.component';
import { AjoutproduitComponent } from './maboutique/ajoutproduit/ajoutproduit.component';
import { MesproduitsComponent } from './maboutique/mesproduits/mesproduits.component';
import { BoosterboutiqueComponent } from './boosterboutique/boosterboutique.component';
import { ProduitboutiqueComponent } from './boutique/produitboutique/produitboutique.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  
    ContentComponent,
    BoutiqueComponent,
    CreationboutiqueComponent,
    MaboutiqueComponent,
    SidebarmaboutiqueComponent,
    ContentmaboutiqueComponent,
    EditboutiqueComponent,
    ConsultmaboutiqueComponent,
    AjoutproduitComponent,
    MesproduitsComponent,
    BoosterboutiqueComponent,
    ProduitboutiqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
