import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RubyService } from 'services/ruby.service';

@Component({
  selector: 'app-delete-serveur',
  templateUrl: './delete-serveur.component.html',
  styleUrls: ['./delete-serveur.component.css']
})


export class DeleteServeurComponent {
  liberer:any;
  id :any;
  constructor(private rubyservice: RubyService ,    private route: ActivatedRoute,){


  const paramId = this.route.snapshot.paramMap;
      this.id=Number(paramId.get('serveurId'));
     console.log(this.id);
     this.rubyservice.findserveur(this.id).subscribe(
       (update)=>{
      this.rubyservice.libererserveur(this.id).subscribe((liberer ) =>{

      console.log("Server is  deleted ");
      }
      );
    }
     );

}
}
