import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentListComponent } from './content-list/content-list.component';



@NgModule({
  declarations: [
    ContentListComponent
  ],
  exports: [ContentListComponent], // elle yazmazsan hata verir
  imports: [
    CommonModule
  ]
})
export class ContentModule { }
