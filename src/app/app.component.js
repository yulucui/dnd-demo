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
// import { SubComponent } from './sub.component';
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
        this.onOpen = function (evt) {
            console.log(evt);
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>Hello {{name}}</h1>\n    <div>\n      <input type=\"text\" [(ngModel)]=\"name\">\n      <my-dnd-test></my-dnd-test>\n      <sub-component (open)=\"onOpen($event)\"></sub-component>\n      <simple-dnd></simple-dnd>\n      <zone-dnd></zone-dnd>\n      <custom-data-dnd></custom-data-dnd>\n      <custom-function-dnd></custom-function-dnd>\n      <shoping-basket-dnd></shoping-basket-dnd>\n      <simple-sortable></simple-sortable>\n      <recycle-multi-sortable></recycle-multi-sortable>\n      <simple-sortable-copy></simple-sortable-copy>\n      <embedded-sortable></embedded-sortable>\n    </div>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map