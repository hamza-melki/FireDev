import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { BoutiqueModule } from 'src/app/model/boutique/boutique.module';
import { BoutiqueService } from 'src/app/boutique.service';
@Component({
  selector: 'app-editboutique',
  templateUrl: './editboutique.component.html',
  styleUrls: ['./editboutique.component.css']
})
export class EditboutiqueComponent implements OnInit {

  constructor(private route:ActivatedRoute,private BoutiqueService: BoutiqueService, private router: Router) { }
  boutique:any;

    ngOnInit() {

      const idboutique = this.route.snapshot.paramMap.get('id');

    this.getbyidboutique(idboutique);
  }
  getbyidboutique(idboutique:any){
    this.BoutiqueService.getbyidboutique(idboutique).subscribe(data=>{
      this.boutique = data;
      console.log('boutique' ,this.boutique)
     
    })

}
    
    onUpdate2(test : any): any {
        
      test.Nom_Boutique.value;

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
        console.log(data)
          console.log('Data updated successfully!')
        }, (err) => {
          console.log(err);
      });
      window.location.href="/admin/(thirdRouter:mesproduits)"
    } 
  }