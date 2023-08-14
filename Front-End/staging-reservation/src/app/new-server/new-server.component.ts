import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RubyService } from 'services/ruby.service';

@Component({
  selector: 'app-new-server',
  templateUrl: './new-server.component.html',
  styleUrls: ['./new-server.component.css']
})
export class NewServerComponent {
  addserver: any ;


  BookForm = new FormGroup({
    nom: new FormControl(''),

    status: new FormControl(''),
  });

  constructor(private rubyservice: RubyService  ){}


  onSubmit(){
    this.rubyservice.Addserveur(this.BookForm.value).subscribe(
      addserver=>{
        this.addserver=addserver
        console.log(this.addserver)
        console.log(this.BookForm.value);

        console .log("serveur ajouté")



      }
    );















}
}
