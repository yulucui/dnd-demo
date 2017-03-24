import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'sub-component',
    template: `<div><input type="button" value="open" (click)="onclick()"></div>`
})
export class SubComponent implements OnInit {
    constructor() { }
    @Output() open:EventEmitter<any> = new EventEmitter();
    onclick = function(){
        this.open.emit('test');
    }
    ngOnInit() { }
}