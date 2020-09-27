import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallContentComponent } from './small-content.component';



@NgModule({
  declarations: [SmallContentComponent],
  imports: [
    CommonModule
  ],
  exports: [SmallContentComponent]
})
export class SmallContentModule { }
