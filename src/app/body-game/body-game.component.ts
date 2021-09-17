import { Component, OnInit } from '@angular/core';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';

@Component({
  selector: 'app-body-game',
  templateUrl: './body-game.component.html',
  styleUrls: ['./body-game.component.css']
})
export class BodyGameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loadComponent() {
    this.container.clear(); 
    const factory: ComponentFactory = this.resolver.resolveComponentFactory(AlertComponent);
    this.componentRef: ComponentRef = this.container.createComponent(factory);
  }

}
