import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RubyService } from 'services/ruby.service';

@Component({
  selector: 'app-serveurs',
  templateUrl: './serveurs.component.html',
  styleUrls: ['./serveurs.component.css']
})
export class ServeursComponent {

  constructor(private rubyservice: RubyService,
    private route: ActivatedRoute,  ){}

//  serveurs: any = [
//  {id:0,nom:"Default Staging",status:"free"},
//  {id:1,nom:"v1",status:"free"},
//  {id:2,nom:"v2",status:"free"},
//  {id:3,nom:"v3",status:"free"},
//  {id:4,nom:"v4",status:"free"},
//  {id:5,nom:"v5",status:"free"},
//  {id:6,nom:"v6",status:"free"},
//  {id:7,nom:"v7",status:"free"}


  // ]
  serveurs:any;
  id:any;
  ngOnInit(){
    this.listserveurs()
  }



    listserveurs  (){
      // const paramId = this.route.snapshot.paramMap;
      //  this.id=Number(paramId.get('serveurId'));
      // console.log(this.id);
    this.serveurs=this.rubyservice.listserveurs().subscribe(
      status=>{
        this.serveurs=status
        console.log(this.serveurs);
        // this.serveurs.status="booked";

      }
    )
  }

 }
