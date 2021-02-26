import { Component, OnInit } from '@angular/core';
import { ofertas } from 'src/app/ofertas';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  oferts;
  selected;
  constructor() { }

  ngOnInit(): void {
    this.oferts=ofertas
    console.log(ofertas)
  }
  onChange(ofert){
    console.log(ofert)
    this.selected=ofert
  }

}
