import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BoutiqueModule } from 'src/app/model/boutique/boutique.module';
import { BoutiqueService } from 'src/app/boutique.service';

@Component({
  selector: 'app-mesproduits',
  templateUrl: './mesproduits.component.html',
  styleUrls: ['./mesproduits.component.css']
})
export class MesproduitsComponent implements OnInit {
  Boutiques:any;

  constructor(private BoutiqueService: BoutiqueService, private router: Router) { }

  ngOnInit() {
    this.getAllBoutique();
  }
  getAllBoutique(): void {
    this.BoutiqueService.getAllBoutique().subscribe(data=>{
      this.Boutiques = data;
      
    });
  };
  deleteboutique(idboutique:any){
    
    this.BoutiqueService.deleteboutique(idboutique).subscribe(() =>  window.location.reload())
    this.BoutiqueService.getAllBoutique().subscribe(data=>{
      this.Boutiques = data;
    });
  } 
  /*
  updateBoutique(idboutique:any){
    this.BoutiqueService.updateBoutique(idboutique).subscribe(() =>  window.location.reload())
   
    window.location.href="/editboutique"
  }
  */
}
