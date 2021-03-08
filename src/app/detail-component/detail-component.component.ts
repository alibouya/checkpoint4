import { Component, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../item-component/model';
import { PersonneService } from '../personne.service';

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.css']
})
export class DetailComponentComponent implements OnInit {
 @Input() pers1 : Personne[];
 @Input() pers2 : Personne;

// person2 : Personne[]=[];
isShow1 = false;
isShow2 = false;

  constructor() { 
    
  }

  ngOnInit(): void {
   
  }
  toggle(){
  }
  
    
    // this.per1=new Personne(this.person2);
    
    
  
}
