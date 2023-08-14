import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RubyService } from 'services/ruby.service';

@Component({
  selector: 'app-serveur-libre',
  templateUrl: './serveur-libre.component.html',
  styleUrls: ['./serveur-libre.component.css']
})
export class ServeurLibreComponent {
  newserveur :any;
  update :any;
  id :any;
  // route: any;
  constructor(private rubyservice: RubyService ,    private route: ActivatedRoute,){
    const paramId = this.route.snapshot.paramMap;
       this.id=Number(paramId.get('serveurId'));

       console.log(this.id);
  }

  ngOnInit(){

    this.rubyservice.findserveur( this.id).subscribe(
      (newserveur)=>{
        this.newserveur=newserveur

        console.log(this.newserveur)
        console.log("it's me")


      }
    )
     this.rubyservice.Status_free(this.newserveur,this.id).subscribe(
      (update)=>{
        this.update=update
        console.log(this.update)
        // console.log("status server updated Successufully to free " )
      }
     )


  }







   }





