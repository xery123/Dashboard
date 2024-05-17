import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefreshBoxComponent } from '../refresh-box/refresh-box.component';
import { SelectedApiBoxComponent } from '../selected-api-box/selected-api-box.component';
import { SearchBoxComponent } from '../search-box/search-box.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RefreshBoxComponent,
    SearchBoxComponent,
    SelectedApiBoxComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [RefreshBoxComponent, SearchBoxComponent, SelectedApiBoxComponent],
})
export class SharedModule {}
