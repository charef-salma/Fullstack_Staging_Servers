import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RubyService {

  private url:string ="http://127.0.0.1:3000/";
  constructor(private http:HttpClient) { }

  reservationParserveur(id:any){
    const url = `${this.url}serveurs/${id}/reservation_serveur`;
    return this.http.get (url);


  }
  ViewServeur(id:any){
    const url = `${this.url}serveurs/${id}/show_reservations`;
    return this.http.get(url)

  }

  findserveur(id:any){
    const url = `${this.url}serveurs/${id}`;
    return this.http.get(url );

  }


  listreservations(){
    return this.http.get (this.url +'reservation_history');

  }
  listserveurs(){
    return this.http.get (this.url +'/serveurs');

  }




  httpOptions={
    headers :new HttpHeaders ({ 'Content-Type': 'application/json'})
  }
  Reserverserveur(data: any ,id: any){
    const url = `${this.url}serveurs/${id}/reservations`;
    return this.http.post(url, data, this.httpOptions);
    // return this.http.post (this.url + '/serveurs/${id}/reservations', data , this.httpOptions);

  }



  updateserveur(data:any, id:any){
    return this.http.put(this.url +'/serveurs/'+ id, data, this.httpOptions );

  }
  libererserveur(id:any){
    return this.http.delete(this.url + '/serveurs/'+ id);


   }

   Addserveur(data:any){
    return this.http.post(this.url + 'serveurs',this.httpOptions);

   }


  Status(data :any, id:any): Observable<any>{

    const url = `${this.url}serveurs/${id}/update_status`;
    return this.http.put(url , data, this.httpOptions  ) ;
    // return this.http.get (this.url +'/reservations/status/'+71);


  }
  Status_free(data :any, id:any){

    const url = `${this.url}serveurs/${id}/update_free`;
    return this.http.put(url , data, this.httpOptions  ) ;
    // return this.http.get (this.url +'/reservations/status/'+71);


  }



}
