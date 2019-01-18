import { Component, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { IDado } from '../interface/dado';

@Component({
  selector: 'tm-area-trabalho',
  templateUrl: './area-trabalho.component.html',
  styleUrls: ['./area-trabalho.component.scss'],
})
export class AreaTrabalhoComponent implements OnInit {

  public cards: IDado[] = [];

  constructor() {}

  ngOnInit() {
  }

  public insereCard(update: IDado) {
    this.cards.push(update);
    console.log(this.cards);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
