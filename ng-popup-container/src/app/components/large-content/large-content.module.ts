import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargeContentComponent } from './large-content.component';



@NgModule({
  declarations: [LargeContentComponent],
  imports: [
    CommonModule
  ],
  exports: [LargeContentComponent]
})
export class LargeContentModule { }
