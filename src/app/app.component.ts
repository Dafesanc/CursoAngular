import { Component,OnInit } from '@angular/core';


interface Tarjeta{
  titulo: String;
  subtitulo: String;

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'App-Pokedex';
  public ArregloTarjetas: Tarjeta[]=[]
  ngOnInit(): void {
    this.ArregloTarjetas = [
      {titulo:'pokemon1', subtitulo:'Generacion pokemon 1'},
      {titulo:'pokemon2', subtitulo:'Generacion pokemon 1'},
      {titulo:'pokemon3', subtitulo:'Generacion pokemon 1'},
      {titulo:'pokemon4', subtitulo:'Generacion pokemon 1'},

    ]


  }
}
