import { Component } from '@angular/core';
// import { SubComponent } from './sub.component';
@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
    <div>
      <input type="text" [(ngModel)]="name">
      <my-dnd-test></my-dnd-test>
      <sub-component (open)="onOpen($event)"></sub-component>
      <simple-dnd></simple-dnd>
      <zone-dnd></zone-dnd>
      <custom-data-dnd></custom-data-dnd>
      <custom-function-dnd></custom-function-dnd>
      <shoping-basket-dnd></shoping-basket-dnd>
      <simple-sortable></simple-sortable>
      <recycle-multi-sortable></recycle-multi-sortable>
      <simple-sortable-copy></simple-sortable-copy>
      <embedded-sortable></embedded-sortable>
    </div>
  `,
})
export class AppComponent  {
  name = 'Angular'; 
  onOpen = function(evt:any){
    console.log(evt);
  }
}
