import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsesComponent } from './components/uses/uses.component';

@NgModule({
  declarations: [UsesComponent],
  imports: [CommonModule],
  exports: [UsesComponent],
})
export class UsesModule {}
