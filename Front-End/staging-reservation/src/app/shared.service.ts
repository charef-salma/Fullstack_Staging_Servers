import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RubyService } from 'services/ruby.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient, rubyservice: RubyService) { }

   


}
