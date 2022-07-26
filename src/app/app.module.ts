




import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from "@angular/forms";
import { RouterModule } from '@angular/router';

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
import { BoutiqueService } from './boutique.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchPipe} from './search-filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { MespubliciteComponent } from './mespublicite/mespublicite.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

  
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
    ProduitboutiqueComponent,
    LoginComponent,
    HomeComponent,
    SearchPipe,
    ClientComponent,
    AdminComponent,
    MespubliciteComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    Ng2SearchPipeModule,
    NgbModule,
    RouterModule
    
    
  ],
  providers: [
    NgbCarousel
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
