import { Component } from '@angular/core';
import { MilkService } from '../milk.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(public service : MilkService){
    
  }

}
