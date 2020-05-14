import { Component } from '@angular/core';
import Historique from './historique/historique.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CALCULATOR';
  historiques= [new Historique("",0,0,"+")];
  calculHistorique : Historique;
  changeCalcul(e){
    this.calculHistorique = e;

  }

  enregistreCalcul(e){
    if (this.historiques[0].calcul=""){
      this.historiques[0]=e
    }else{
      this.historiques.push(e);
    }
  }

  supprimeCalcul(e){
    var indice = this.historiques.indexOf(e);
    console.log(indice);
    if(indice!=0){
      this.historiques.splice(indice,1);
    }
    
  }
}
