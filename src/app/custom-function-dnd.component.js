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
var CustomFunctionDndComponent = (function () {
    function CustomFunctionDndComponent() {
        this.box1Integer = 3;
        this.box2Integer = 10;
        this.box1Items = [];
        this.box2Items = [];
    }
    CustomFunctionDndComponent.prototype.allowDropFunction = function (baseInteger) {
        return function (dragData) { return dragData % baseInteger === 0; };
    };
    CustomFunctionDndComponent.prototype.addTobox1Items = function ($event) {
        this.box1Items.push($event.dragData);
    };
    CustomFunctionDndComponent.prototype.addTobox2Items = function ($event) {
        this.box2Items.push($event.dragData);
    };
    CustomFunctionDndComponent = __decorate([
        core_1.Component({
            selector: 'custom-function-dnd',
            template: "\n<h4>Use a custom function to determine where dropping is allowed</h4>\n<div class=\"row\">\n    <div class=\"col-sm-3\">\n        <div class=\"panel panel-success\">\n            <div class=\"panel-heading\">Available to drag</div>\n            <div class=\"panel-body\">\n                <div class=\"panel panel-default\" dnd-draggable [dragData]=\"6\">\n                    <div class=\"panel-body\">dragData = 6</div>\n                </div>\n                <div class=\"panel panel-default\" dnd-draggable [dragData]=\"10\">\n                    <div class=\"panel-body\">dragData = 10</div>\n                </div>\n                <div class=\"panel panel-default\" dnd-draggable [dragData]=\"30\">\n                    <div class=\"panel-body\">dragData = 30</div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-6\">\n        <pre>allowDropFunction(baseInteger: any): any {{ '{' }}\n  return (dragData: any) => dragData % baseInteger === 0;\n{{ '}' }}</pre>\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div dnd-droppable class=\"panel panel-info\" [allowDrop]=\"allowDropFunction(box1Integer)\" (onDropSuccess)=\"addTobox1Items($event)\">\n                    <div class=\"panel-heading\">\n                        Multiples of\n                        <input type=\"number\" [(ngModel)]=\"box1Integer\" style=\"width: 4em\">\n                        only\n                    </div>\n                    <div class=\"panel-body\">\n                        <div *ngFor=\"let item of box1Items\">dragData = {{item}}</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <div dnd-droppable class=\"panel panel-warning\" [allowDrop]=\"allowDropFunction(box2Integer)\" (onDropSuccess)=\"addTobox2Items($event)\">\n                    <div class=\"panel-heading\">\n                        Multiples of\n                        <input type=\"number\" [(ngModel)]=\"box2Integer\" style=\"width: 4em\">\n                        only\n                    </div>\n                    <div class=\"panel-body\">\n                        <div *ngFor=\"let item of box2Items\">dragData = {{item}}</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], CustomFunctionDndComponent);
    return CustomFunctionDndComponent;
}());
exports.CustomFunctionDndComponent = CustomFunctionDndComponent;
//# sourceMappingURL=custom-function-dnd.component.js.map