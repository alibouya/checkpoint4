
import { Component, OnInit, Output ,EventEmitter, SecurityContext} from '@angular/core';
import { PersonneService } from '../personne.service';
import{Personne} from './model'
@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.css'],
})
export class ItemComponentComponent implements OnInit {
  
  public Perso1: Personne
  public Perso2: Personne
  public Perso: Personne

   pers: Personne[]= [];
  @Output() selectpersonne = new EventEmitter();
  @Output() selectpersonne1 = new EventEmitter();

  constructor(){
    

    this.Perso1 = new Personne(1,'Bouyahya','Ali', 35, 6211295,'teacher','https://www.linkedin.com/in/ali-bouyahya-49839b5a/');
    this.Perso2 = new Personne(2,'Ahmed','Ben Ahmed', 34, 6000295,'Enginer','https://www.linkedin.com/in/enginer-49839b5a/');   
    this.pers.push(this.Perso1);
    this.pers.push(this.Perso2);

    console.log(this.pers)

  }
  
  senddetailtolist(){
    
    //this.pers[0]=this.Perso1
    this.selectpersonne.emit(this.pers);


  }
  
  
  ngOnInit(): void {
  }
  setdetailscandidate1(){
   
  }
  setdetailscandidate2(){
   /* this.personne2.id=2;
    this.personne2.name='Sassi';
    this.personne2.firstname='Ameur';
    this.personne2.age=36;
    this.personne2.cin=6211255;
    this.personne2.job='teacher';
    this.personne2.path='https://www.linkedin.com/in/ameur-sassi-54774b1a1/';*/
  }

}

