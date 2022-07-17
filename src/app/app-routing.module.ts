import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BoosterboutiqueComponent } from './boosterboutique/boosterboutique.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { ContentComponent } from './boutique/content/content.component';
import { ProduitboutiqueComponent } from './boutique/produitboutique/produitboutique.component';
import { CreationboutiqueComponent } from './creationboutique/creationboutique.component';
import { AjoutproduitComponent } from './maboutique/ajoutproduit/ajoutproduit.component';
import { ConsultmaboutiqueComponent } from './maboutique/consultmaboutique/consultmaboutique.component';
import { EditboutiqueComponent } from './maboutique/editboutique/editboutique.component';
import { MaboutiqueComponent } from './maboutique/maboutique.component';
import { MesproduitsComponent } from './maboutique/mesproduits/mesproduits.component';


const routes: Routes = [

  
  {path: 'creation', component: CreationboutiqueComponent},
  {path: 'boutiques', component: BoutiqueComponent,
  
    children: [
    
      {path: 'produitsboutique', component: ProduitboutiqueComponent, outlet: 'thirdRouter'}

  ]},

  {path: 'boosterboutique', component: BoosterboutiqueComponent},
  {path: 'maboutique', component: MaboutiqueComponent,
  children: [
    
    {path: 'editboutique', component: EditboutiqueComponent, outlet: 'secondRouter'},
    {path: 'consultmaboutique', component: ConsultmaboutiqueComponent, outlet: 'secondRouter'}, 
    {path: 'ajoutproduit', component: AjoutproduitComponent, outlet: 'secondRouter'},
    {path: 'mesproduits', component: MesproduitsComponent, outlet: 'secondRouter'}
  ]
  }
  

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
