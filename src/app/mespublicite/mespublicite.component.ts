import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BoutiqueModule } from 'src/app/model/boutique/boutique.module';
import { BoutiqueService } from 'src/app/boutique.service';

@Component({
  selector: 'app-mespublicite',
  templateUrl: './mespublicite.component.html',
  styleUrls: ['./mespublicite.component.css']
})
export class MespubliciteComponent implements OnInit {
  pubs :any;
  Boutiques:any;

  constructor(private BoutiqueService: BoutiqueService, private router: Router) { }

  ngOnInit() {
    this.getAllpublicité();
  }
  getAllpublicité(): void {
    this.BoutiqueService.getAllpublicité().subscribe(data=>{
      this.pubs = data;
      
    });
  };
  deletepublicit2(idboutique:any){
    
    this.BoutiqueService.deletepublicit2(idboutique).subscribe(() =>  window.location.reload())
    this.BoutiqueService.getAllpublicité().subscribe(data=>{
      this.pubs = data;
    });
}


onUpdate(test : any): any {
    if (test.statut === "valide"){
  test.statut = "nonval";
    }
   else if (test.statut === "nonval") {
      test.statut = "valide";
    } 

    else {
      test.statut = "valide";
    }
   let data = {
    _id : test._id ,
    Nom_Pub: test.Desc_Pub,
    Desc_Pub: test.Desc_Pub,
    Date_debut: test.Date_debut,
    Date_fin: test.Date_fin,
    periorite: test.periorite,
    image: test.image,
    statut: test.statut,
    zone: test.zone,

  };


  this.BoutiqueService.updatepublicit(data._id, data)
  .subscribe(() => {
   
      console.log('Data updated successfully!')
    }, (err) => {
      console.log(err);
  });
  
}


}