import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoutiqueModule } from 'src/app/model/boutique/boutique.module';
import { BoutiqueService } from 'src/app/boutique.service';
@Component({
  selector: 'app-produitboutique',
  templateUrl: './produitboutique.component.html',
  styleUrls: ['./produitboutique.component.css']
})
export class ProduitboutiqueComponent implements OnInit {
  boutique:any;
  
  boutiqueshown:any
 
  constructor(private route:ActivatedRoute,private BoutiqueService: BoutiqueService) { }

  ngOnInit(): void {
    //console.log('BOUTIQUE ID: '+this.route.snapshot.params['id']);
    //console.log('BOUTIQUE ID: '+this.route.snapshot.params['id']);
    const idboutique = this.route.snapshot.paramMap.get('id');

    this.getbyidboutique(idboutique);
  }
  getbyidboutique(idboutique:any){
    this.BoutiqueService.getbyidboutique(idboutique).subscribe(data=>{
      this.boutique = data;
      console.log('boutique' ,this.boutique)
     
    })

}
}
