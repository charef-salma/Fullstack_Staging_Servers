import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RubyService } from 'services/ruby.service';

@Component({
  selector: 'app-servers-details',
  templateUrl: './servers-details.component.html',
  styleUrls: ['./servers-details.component.css']
})
export class ServersDetailsComponent {
  serveurs:any ;
  id:any ;
  constructor(private rubyservice: RubyService , private route: ActivatedRoute,  ){}

  ngOnInit(){

    const paramId = this.route.snapshot.paramMap;
    this.id=Number(paramId.get('serveurId'));
    console.log(this.id);

     this.ServeursList()



  }
   ServeursList(){
    this.serveurs=this.rubyservice.ViewServeur(this.id).subscribe(
      serveur=>{
        this.serveurs=serveur
        console.log(this.serveurs);

      }
    )
  }



}
