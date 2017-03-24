"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var MyDndTest = (function () {
    function MyDndTest() {
        this.transferData = { id: 1, msg: 'Hello' };
        this.dropSuccess = function (evt) {
            console.log(evt);
        };
        this.arr = ['aaa', 'bbb', 'ccc'];
    }
    MyDndTest.prototype.allowDrop = function (dragData) {
        console.log(dragData);
        return true;
    };
    MyDndTest.prototype.dragSuccess = function (evt) {
        console.log(evt);
    };
    MyDndTest.prototype.ngOnInit = function () { };
    MyDndTest = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-dnd-test',
            template: "\n        <div dnd-draggable (onDragSuccess)=\"dragSuccess($event)\" [dragEnabled]=\"true\" [dropZones]=\"['zone2']\" [dragData]=\"transferData\">dnd-draggable</div>\n        <div dnd-droppable (onDropSuccess)=\"dropSuccess($event)\" [dropZones]=\"['zone1']\">dnd-droppable1</div>\n        <div dnd-droppable (onDropSuccess)=\"dropSuccess($event)\" [dropZones]=\"['zone2']\" [allowDrop]=\"allowDrop\">dnd-droppable2</div>\n        <ul dnd-sortable-container [sortableData]=\"arr\">\n            <li *ngFor=\"let item of arr; let i = index\" dnd-sortable [sortableIndex]=\"i\">{{item}}</li>\n        </ul>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], MyDndTest);
    return MyDndTest;
}());
exports.MyDndTest = MyDndTest;
//# sourceMappingURL=my-dnd-test.component.js.map