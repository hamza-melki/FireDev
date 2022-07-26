import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { BoosterboutiqueComponent } from './boosterboutique/boosterboutique.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { ContentComponent } from './boutique/content/content.component';
import { ProduitboutiqueComponent } from './boutique/produitboutique/produitboutique.component';
import { ClientComponent } from './client/client.component';
import { CreationboutiqueComponent } from './creationboutique/creationboutique.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AjoutproduitComponent } from './maboutique/ajoutproduit/ajoutproduit.component';
import { ConsultmaboutiqueComponent } from './maboutique/consultmaboutique/consultmaboutique.component';
import { EditboutiqueComponent } from './maboutique/editboutique/editboutique.component';
import { MaboutiqueComponent } from './maboutique/maboutique.component';
import { MesproduitsComponent } from './maboutique/mesproduits/mesproduits.component';
import { MespubliciteComponent } from './mespublicite/mespublicite.component';

const routes: Routes = [

  {path: 'admin', component: AdminComponent,

  children : [

     
    {path: 'editboutique/:id', component: EditboutiqueComponent, outlet: 'thirdRouter'},
    {path: 'consultmaboutique', component: ConsultmaboutiqueComponent, outlet: 'thirdRouter'}, 
    {path: 'ajoutproduit', component: AjoutproduitComponent, outlet: 'thirdRouter'},
    {path: 'mesproduits', component: MesproduitsComponent, outlet: 'thirdRouter'},
    {path: 'mespublicite', component: MespubliciteComponent, outlet: 'thirdRouter'},

    
  ]

}
,
 
  
  {path: 'client', component: ClientComponent,
  children: [
   
    {path: 'creation', component: CreationboutiqueComponent, outlet: 'secondRouter'},
    {path: 'boutiques', component: BoutiqueComponent, outlet: 'secondRouter'},
    {path: 'produitboutique/:id', component: ProduitboutiqueComponent, outlet: 'secondRouter'},
    {path: 'boosterboutique', component: BoosterboutiqueComponent, outlet: 'secondRouter'},
  ]
  }
  

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})

export class AppRoutingModule { }
