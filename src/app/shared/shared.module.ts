import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { StarComponent } from './star.component';
import { ConvertToSpacePipe } from './convert-to-space.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [StarComponent, ConvertToSpacePipe],
  imports: [CommonModule, SharedRoutingModule],
  exports: [ConvertToSpacePipe, StarComponent, FormsModule, ReactiveFormsModule]
})
export class SharedModule {}
