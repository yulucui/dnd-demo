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
var SubComponent = (function () {
    function SubComponent() {
        this.open = new core_1.EventEmitter();
        this.onclick = function () {
            this.open.emit('test');
        };
    }
    SubComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SubComponent.prototype, "open", void 0);
    SubComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sub-component',
            template: "<div><input type=\"button\" value=\"open\" (click)=\"onclick()\"></div>"
        }), 
        __metadata('design:paramtypes', [])
    ], SubComponent);
    return SubComponent;
}());
exports.SubComponent = SubComponent;
//# sourceMappingURL=sub.component.js.map