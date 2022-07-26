import { Component, OnInit } from '@angular/core';
import { BoutiqueService } from '../boutique.service';
import { BoutiqueModule } from '../model/boutique/boutique.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


imports: [
    
    FormsModule
  ]



@Component({
  selector: 'app-creationboutique',
  templateUrl: './creationboutique.component.html',
  styleUrls: ['./creationboutique.component.css']
})
export class CreationboutiqueComponent implements OnInit {
    
    boutique !:BoutiqueModule;
  constructor(private boutiqueservice : BoutiqueService) { }

  ngOnInit(): void {
  
  this.boutique= new BoutiqueModule;

}

addboutique(boutique :any ){
  this.boutiqueservice.addboutique(boutique).subscribe(()=>{
})
  window.location.href="/client/(secondRouter:boutiques)"}

}