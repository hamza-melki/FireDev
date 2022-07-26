import { Component, OnInit } from '@angular/core';
import { BoutiqueService } from '../boutique.service';
import { PubliciteModule } from '../publicite/publicite.module';

@Component({
  selector: 'app-boosterboutique',
  templateUrl: './boosterboutique.component.html',
  styleUrls: ['./boosterboutique.component.css']
})
export class BoosterboutiqueComponent implements OnInit {
  publicite!:PubliciteModule
  constructor(private boutiqueservice : BoutiqueService) { }

  ngOnInit(): void {
    this.publicite= new PubliciteModule;
  }
  addpublicite(publicite :any ){
    this.boutiqueservice.addpublicite(publicite).subscribe(()=>{
  })
  window.location.href="/client/(secondRouter:boutiques)"
  }
  
}
