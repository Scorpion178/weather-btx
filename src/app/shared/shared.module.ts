import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';

const MODULES = [
  CommonModule, 
  RouterModule, 
  FormsModule, 
  ReactiveFormsModule,
  ScrollingModule, 
  DragDropModule,
  NgZorroAntdModule
];

const COMPONENTS = [];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES, ...COMPONENTS],
  declarations: [...COMPONENTS],
})
export class SharedModule {}
