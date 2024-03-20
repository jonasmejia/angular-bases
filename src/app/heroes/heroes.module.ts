//importación propia de angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//Modulo

//Componentes
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";

@NgModule({
    declarations:[
        HeroComponent,
        ListComponent,
    ],
    exports:[
        HeroComponent,
        ListComponent,
    ],
    //Permite añadir la funcionalidad al importarlo ngfor ngif
    imports:[
        CommonModule
    ]
   
})
export class HeroresModule{}