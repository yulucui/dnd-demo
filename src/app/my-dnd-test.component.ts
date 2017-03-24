import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-dnd-test',
    template: `
        <div dnd-draggable (onDragSuccess)="dragSuccess($event)" [dragEnabled]="true" [dropZones]="['zone2']" [dragData]="transferData">dnd-draggable</div>
        <div dnd-droppable (onDropSuccess)="dropSuccess($event)" [dropZones]="['zone1']">dnd-droppable1</div>
        <div dnd-droppable (onDropSuccess)="dropSuccess($event)" [dropZones]="['zone2']" [allowDrop]="allowDrop">dnd-droppable2</div>
        <ul dnd-sortable-container [sortableData]="arr">
            <li *ngFor="let item of arr; let i = index" dnd-sortable [sortableIndex]="i">{{item}}</li>
        </ul>
    `
})
export class MyDndTest implements OnInit {
    constructor() { }
    transferData: Object = {id: 1, msg: 'Hello'};
    allowDrop(dragData:any){
        console.log(dragData);
        return true;
    }
    dragSuccess(evt:any){
        console.log(evt);
    }
    dropSuccess = function (evt:any){
        console.log(evt);
    }
    arr: Array<string> = ['aaa','bbb','ccc'];
    ngOnInit() { }
}