import { Component, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../item-component/model';
//import { PersonneService } from '../personne.service';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {
 
  public pers1: Personne[]=[]
  public pers2: Personne[]=[]

  constructor() { }
  
  ngOnInit(): void {
  }
  receivedetailfromitem1(selectpersonne){
    this.pers1[0]=selectpersonne[0];
  console.log(this.pers1[0]);
 
  }
  receivedetailfromitem2(selectpersonne){
    this.pers1[0]=selectpersonne[1];
  console.log(this.pers1[0]);
  // this.pers1=value;
  // console.log(this.pers1);
  }
  senddatatodetail(){

  }
 
}
