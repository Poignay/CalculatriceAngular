import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Historique from './historique.model';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {
  
  @Input()
  historique: Historique;

  @Output()
  change : EventEmitter<any> = new EventEmitter<any>();
  @Output()
  supprime : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  choix(){
    this.change.emit(this.historique);
  }

  supprimer(){
    this.supprime.emit(this.historique);
  }

}
