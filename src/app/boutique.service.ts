import { Injectable } from '@angular/core';
import { BoutiqueModule } from './model/boutique/boutique.module';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders,HttpErrorResponse  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PubliciteModule } from './publicite/publicite.module';


@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {

  constructor(private http: HttpClient) { }
  baseurl: string = "http://localhost:3000/";
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');



  getAllBoutique(){
    return this.http.get<BoutiqueModule[]>(this.baseurl + 'boutique');
  }
  addboutique(boutique :BoutiqueModule){
   
    return this.http.post(this.baseurl + 'boutique/add', boutique);
}
updateBoutique(id : any , boutique :any) : Observable<any> {
  return this.http.patch(this.baseurl + 'boutique/update/'+ id,boutique)
}
getbyidboutique(idboutique:any){
  return this.http.get(this.baseurl + 'boutique/' + idboutique);
}
deleteboutique(idboutique:any){
  return this.http.delete(this.baseurl + 'boutique' + '/delete/' + idboutique);
}
/*
updateBook(id: any, data: any): Observable<any> {
  let API_URL = `${this.baseurl}boutique/update/${id}`;
  return this.http
    .put(API_URL, data);
    

  }
  */
  addpublicite(publicite :PubliciteModule){
   
    return this.http.post(this.baseurl + 'publicite/add', publicite);
}
getAllpublicité(){

  return this.http.get<PubliciteModule[]>(this.baseurl + 'publicite');
}


deletepublicit2(idboutique:any){
  return this.http.delete(this.baseurl + 'publicite' + '/delete/' + idboutique);
}

updatepublicit(id : any , publicite :any) : Observable<any> {
  return this.http.patch(this.baseurl + 'publicite/update/'+ id,publicite)
}
}