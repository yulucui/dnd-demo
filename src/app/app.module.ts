import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { SubComponent } from './sub.component';
import {SimpleDndComponent} from './simple-dnd.component';
import {ZoneDndComponent} from './zone-dnd.component';
import {CustomDataDndComponent} from './custom-data-dnd.component';
import {CustomFunctionDndComponent} from './custom-function-dnd.component';
import {ShoppingBasketDndComponent} from './shopping-baskat.component';
import {SimpleSortableComponent} from './simple-sortable.component';
import {RecycleMultiSortableComponent} from './recycle-multi-sortable.component';
import {SimpleSortableCopyComponent} from './simple-sortable-copy.component';
import {EmbeddedSortableComponent} from './embedded-sortable.component';
import {MyDndTest} from './my-dnd-test.component';
import {DndModule} from 'ng2-dnd';

@NgModule({
  imports:      [ BrowserModule,FormsModule,DndModule.forRoot() ],
  declarations: [ 
    AppComponent,
    SubComponent,
    SimpleDndComponent,
    ZoneDndComponent,
    CustomDataDndComponent,
    CustomFunctionDndComponent,
    ShoppingBasketDndComponent,
    SimpleSortableComponent,
    RecycleMultiSortableComponent ,
    SimpleSortableCopyComponent,
    EmbeddedSortableComponent,
    MyDndTest
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
