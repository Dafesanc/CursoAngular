import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public image:string="https://cdn.dribbble.com/users/113499/screenshots/14147543/media/2462401306aa800a3a5910d9c921956a.png?compress=1&resize=400x300";
  public Titulo:string ="Curso de angular con Interpolacion";
  constructor(){

  }
  ngOnInit(): void {

  }

}
