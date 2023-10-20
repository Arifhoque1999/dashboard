import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SibeBar';

 show:boolean=true;
 constructor(private rout:Router){}
 userLogin:boolean=false;
 getHome(){
  this.rout.navigate(['/home'])
  this.userLogin=true;
  this.show= false;

 }
}
