import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Historique from '../historique/historique.model';

@Component({
  selector: 'app-touche',
  templateUrl: './touche.component.html',
  styleUrls: ['./touche.component.css']
})
export class ToucheComponent implements OnInit {
 
  @Input()
  set calculHistorique(calculHistorique:Historique){
    this.calculText = calculHistorique.calcul;
    this.operand1 = calculHistorique.operan1;
    this.operand2 = calculHistorique.operan2;
    this.operateur = calculHistorique.operateur;
    this.Egale()
  }

  @Output()
  enrHistorique : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  calculText="";
  repText = '';
  operand1: number;
  operand2: number;
  operateur = '';
  operatorSet = false;
  calculFini = false;

  Clique(key: string) {
    if (this.calculFini){
      this.calculText=this.repText;
      this.calculFini=false;
      this.operatorSet = false;
    }
    if (key === '/' || key === 'x' || key === '-' || key === '+') {
      const lastKey = this.calculText[this.calculText.length - 1];
      if (lastKey === '/' || lastKey === 'x' || lastKey === '-' || lastKey === '+')  {
        this.operatorSet = true;
      }
      if ((this.operatorSet) || (this.calculText === '')) {
        return;
      }
      this.operand1 = parseFloat(this.calculText);
      this.operateur = key;
      this.operatorSet = true;
    }
    if (this.repText.length === 10) {
      return;
    }
    this.calculText += key;
  }

  Effacer() {
    this.repText = '';
    this.calculText = '';
    this.operatorSet = false;
  }

  Egale() {
    this.operand2 = parseFloat(this.calculText.split(this.operateur)[1]);
    if (this.operateur === '/') {
      this.repText = (this.operand1 / this.operand2).toString();
      if (this.repText.length > 9) {
        this.repText = this.repText.substr(0, 9);
      }
    } else if (this.operateur === 'x') {
      this.repText = (this.operand1 * this.operand2).toString();
      if (this.repText.length > 9) {
        this.repText = 'Erreur';
        this.calculText = 'Trop grand';
      }
    } else if (this.operateur === '-') {
      this.repText = (this.operand1 - this.operand2).toString();
    } else if (this.operateur === '+') {
      this.calculText = this.repText;
      this.repText = (this.operand1 + this.operand2).toString();
      if (this.repText.length > 9) {
        this.repText = 'Erreur';
        this.calculText = 'Trop grand';
      }
    } else {
      this.calculText = 'Erreur: Opération invalide';
    }
    this.calculFini=true;
    this.enrHistorique.emit(new Historique(this.calculText,this.operand1,this.operand2,this.operateur));
  }

  
}
