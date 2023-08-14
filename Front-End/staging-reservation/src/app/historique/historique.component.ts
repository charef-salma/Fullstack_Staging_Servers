import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RubyService } from 'services/ruby.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent {
  serveurs:any ;
  id:any;

  createdReservations: any[]=[];
  destroyedObjects: any[]=[];

  constructor(private rubyservice: RubyService, private route: ActivatedRoute,){}

  ngOnInit(){
    // const paramId = this.route.snapshot.paramMap;
    //    this.id=Number(paramId.get('serveurId'));
    //    console.log(this.id);
    this.ServeursList()
  }


  ServeursList(){
    this.rubyservice.listreservations().subscribe(
      data => {
        this.createdReservations = (data as any ) .created_reservations;
        this.destroyedObjects = (data as any ).destroyed_objects;
      });






      // serveur=>{
      //   this.serveurs=serveur
      //   console.log(this.serveurs);

      // }
    // )
  }

}
