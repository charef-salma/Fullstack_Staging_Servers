import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RubyService } from 'services/ruby.service';

@Component({
  selector: 'app-update-serveur',
  templateUrl: './update-serveur.component.html',
  styleUrls: ['./update-serveur.component.css']
})
export class UpdateServeurComponent {
  update:any;
  BookForm!: FormGroup;
  id:any;


  constructor(private rubyservice: RubyService,
    private route: ActivatedRoute,

    ){
       const paramId = this.route.snapshot.paramMap;
       this.id=Number(paramId.get('serveurId'));
      console.log(this.id);
      this.rubyservice.findserveur(this.id).subscribe(
        (update) => {
           this.update=update

           this.BookForm= new FormGroup({

          nom: new FormControl(this.update.nom),
          serveur: new FormControl(this.update.serveur),
          specialite: new FormControl(this.update.specialite),
          periode: new FormControl(this.update.periode),



        });



}

      )


    }
  ngOnit(){


  //   this.route.queryParams.subscribe(params=>{
  //     this.id= params['serveurId'];
  //    } );
  //  console.log(this.id)








 }


onSubmit(){
   console.log(this.BookForm.value);
  this.rubyservice.updateserveur(this.BookForm.value,this.id).subscribe(
    (update)=>{
      console.log("Booking Server Updated Successufully")
    }

  )

 }


}
