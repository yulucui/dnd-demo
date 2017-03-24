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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var sub_component_1 = require('./sub.component');
var simple_dnd_component_1 = require('./simple-dnd.component');
var zone_dnd_component_1 = require('./zone-dnd.component');
var custom_data_dnd_component_1 = require('./custom-data-dnd.component');
var custom_function_dnd_component_1 = require('./custom-function-dnd.component');
var shopping_baskat_component_1 = require('./shopping-baskat.component');
var simple_sortable_component_1 = require('./simple-sortable.component');
var recycle_multi_sortable_component_1 = require('./recycle-multi-sortable.component');
var simple_sortable_copy_component_1 = require('./simple-sortable-copy.component');
var embedded_sortable_component_1 = require('./embedded-sortable.component');
var my_dnd_test_component_1 = require('./my-dnd-test.component');
var ng2_dnd_1 = require('ng2-dnd');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, ng2_dnd_1.DndModule.forRoot()],
            declarations: [
                app_component_1.AppComponent,
                sub_component_1.SubComponent,
                simple_dnd_component_1.SimpleDndComponent,
                zone_dnd_component_1.ZoneDndComponent,
                custom_data_dnd_component_1.CustomDataDndComponent,
                custom_function_dnd_component_1.CustomFunctionDndComponent,
                shopping_baskat_component_1.ShoppingBasketDndComponent,
                simple_sortable_component_1.SimpleSortableComponent,
                recycle_multi_sortable_component_1.RecycleMultiSortableComponent,
                simple_sortable_copy_component_1.SimpleSortableCopyComponent,
                embedded_sortable_component_1.EmbeddedSortableComponent,
                my_dnd_test_component_1.MyDndTest
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map