import { Component, OnInit,Input,Output } from '@angular/core';
import { Router } from "@angular/router";
import { BoutiqueModule } from 'src/app/model/boutique/boutique.module';
import { BoutiqueService } from 'src/app/boutique.service';
import { TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
 pubs:any;
  Boutiques:any;
  boutitque: any;
  boutiqueAbonne : any ;
  name = new FormControl('');
  category = new FormControl(''); 
  searchText: any;
  


    constructor(private BoutiqueService: BoutiqueService, private router: Router) { }
  
    ngOnInit() {
      this.getAllBoutique();
      this.getAllpublicité();
    }
    getAllBoutique(): void {
      this.BoutiqueService.getAllBoutique().subscribe(data=>{
        this.Boutiques = data;
        
      })
    }; 
   




    onUpdate(test : any): any {
    
      test.Nbre_Abonnees ++;
       let data = {
        _id : test._id ,
        Nom_Boutique: test.Nom_Boutique,
        Adresse_Boutique: test.Adresse_Boutique,
        Logo_Boutique: test.Logo_Boutique,
        Domain_Boutique: test.Domain_Boutique,
        Contact_Boutique: test.Contact_Boutique,
        Nbre_Abonnees: test.Nbre_Abonnees,
        
      };
      

      this.BoutiqueService.updateBoutique(data._id, data)
      .subscribe(() => {
          console.log('Data updated successfully!')
        }, (err) => {
          console.log(err);
      });
      
    }
    //showdetail(boutiqueshown : any): any {
     // this.BoutiqueService.getbyidboutique(boutiqueshown._id,boutiqueshown).subscribe(data=>{
       // this.boutitque= data;
        //console.log(this.boutitque)
        //window.location.href="/produitboutique"
    //  });

    
  
  getAllpublicité(): void {
    this.BoutiqueService.getAllpublicité().subscribe(data=>{
      this.pubs = data;
      
    })
  }; 



}
