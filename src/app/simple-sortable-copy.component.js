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
var SimpleSortableCopyComponent = (function () {
    function SimpleSortableCopyComponent() {
        this.sourceList = [
            new Widget('1'), new Widget('2'),
            new Widget('3'), new Widget('4'),
            new Widget('5'), new Widget('6')
        ];
        this.targetList = [];
    }
    SimpleSortableCopyComponent.prototype.addTo = function ($event) {
        this.targetList.push($event.dragData);
    };
    SimpleSortableCopyComponent = __decorate([
        core_1.Component({
            selector: 'simple-sortable-copy',
            template: "\n<h4>Simple sortable With Drop into something, without delete it</h4>\n<div class=\"row\">\n    <div class=\"col-sm-3\">\n        <div class=\"panel panel-warning\"\n            dnd-sortable-container [sortableData]=\"sourceList\" [dropZones]=\"['source-dropZone']\">\n            <div class=\"panel-heading\">Source List</div>\n            <div class=\"panel-body\">\n                <ul class=\"list-group\">\n                    <li *ngFor=\"let source of sourceList; let x = index\" class=\"list-group-item\"\n                        dnd-sortable [sortableIndex]=\"x\" [dragEnabled]=\"true\"\n                        [dragData]=\"source\">{{source.name}}</li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-6\">\n        <div class=\"panel panel-info\">\n            <div class=\"panel-heading\">Target List</div>\n            <div class=\"panel-body\" dnd-droppable (onDropSuccess)=\"addTo($event)\" [dropZones]=\"['source-dropZone']\">\n                <ul class=\"list-group\">\n                    <li *ngFor=\"let target of targetList\" class=\"list-group-item\">\n                        {{target.name}}\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], SimpleSortableCopyComponent);
    return SimpleSortableCopyComponent;
}());
exports.SimpleSortableCopyComponent = SimpleSortableCopyComponent;
var Widget = (function () {
    function Widget(name) {
        this.name = name;
    }
    return Widget;
}());
//# sourceMappingURL=simple-sortable-copy.component.js.map