import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Hulk', 'She Hulk', 'Atman'];
  public nameDelete?:string;

  removeLastHero():void{
    this.nameDelete = this.heroNames.pop();
    console.log(this.nameDelete)
  }
}
