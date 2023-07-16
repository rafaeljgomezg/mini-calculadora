import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(){

  }
  
  ngOnInit(): void {
    
  }

  title = 'mini-calculadora';


  numero1=0
  numero2=0
  resultado=0

  sumar(){
    this.resultado=this.numero1+this.numero2
    
  }
  restar(){
    this.resultado=this.numero1-this.numero2
  }

  multiplicar(){
    this.resultado=this.numero1*this.numero2
  }

}
