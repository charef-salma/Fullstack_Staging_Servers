import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RubyService } from 'services/ruby.service';

@Component({
  selector: 'app-form-reserver',
  templateUrl: './form-reserver.component.html',
  styleUrls: ['./form-reserver.component.css']
})
export class FormReserverComponent {
  reserver:any;
  msg:any;
  id:any;
  // BookForm!: FormGroup;
  newserveur:any;
  update :any;
  users: string[] = ['Youssef', 'Ahmed', 'Rahma', 'Toutou', 'Seif', 'Riadth', 'Ameur'];
  specialities: string[] = ['QA', 'DevOps', 'Backend', 'FrontEnd'];
  userSpecialities: { [user: string]: string } = {
    'Youssef': 'DevOps',
    'Ahmed': 'Backend',
    'Rahma': 'Backend',
    'Toutou': 'Backend',
    'Seif': 'FrontEnd',
    'Riadth': 'FrontEnd',
    'Ameur': 'QA'
  };


  BookForm = new FormGroup({
      nom: new FormControl(''),
      serveur_name: new FormControl(''),
      specialite: new FormControl(''),
      periode: new FormControl(''),




    // serveur_id: new FormControl('paramId'),


  });

  constructor(private rubyservice: RubyService, private route: ActivatedRoute,  ){}
  ngOnInit(){

    const paramId = this.route.snapshot.paramMap;
    this.id=Number(paramId.get('serveurId'));

    console.log(this.id);
     this.rubyservice.findserveur( this.id).subscribe(
        (update)=>{
       this.update=update
       this.BookForm.patchValue({
       serveur_name: this.update.nom
     })
     ;

    }

 )
  }
  onSubmit(){
    this.rubyservice.Reserverserveur(this.BookForm.value,this.id).subscribe(
      reserver=>{
        this.reserver=reserver
        console.log(this.reserver)
        console.log(this.BookForm.value);
         this.msg="serveur reserver ";
        console .log(this.msg)



      }
    );



  }

  changeServerStatus(){
    // const newStatus = { status: 'booked' };
    this.rubyservice.findserveur( this.id).subscribe(
      (newserveur)=>{
        this.newserveur=newserveur

        console.log(this.newserveur)
        console.log("it's me")


      }
    )
     this.rubyservice.Status(this.newserveur,this.id).subscribe(
      (update)=>{
        console.log("status server updated Successufully" )
      }
     )


  }

//
filterSpecialiteByUser(): string[] {
  const selectedControl = this.BookForm.get('nom');
  const specialiteControl = this.BookForm.get('specialite');

  if (selectedControl && specialiteControl) {
    const selectedSpeciality = specialiteControl.value;
    const selectedUser = selectedControl.value;

    if (selectedUser !== null) {
      if (selectedSpeciality) {
        return [this.userSpecialities[selectedUser]];
      } else {
        return [this.userSpecialities[selectedUser], ...this.specialities];
      }
    } else {
      return this.specialities;
    }
  } else {
    return this.specialities;
  }
}




























}
