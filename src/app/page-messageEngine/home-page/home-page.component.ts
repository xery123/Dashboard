import { CommonModule } from '@angular/common';
import { MessageEngineService } from '../service/messageEngine/message-engine.service';
import { Component, OnInit, inject } from '@angular/core';
import { TableMessageEngineComponent } from "../table-message-engine/table-message-engine.component";
import { SearchBoxComponent } from '../search-box/search-box.component';
import { IMessage } from '../interface/message-items';


@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [CommonModule, TableMessageEngineComponent,SearchBoxComponent]
})
export default class HomePageComponent implements OnInit{

  private readonly _messageEngineService = inject(MessageEngineService);

  message:IMessage | undefined;

  ngOnInit(): void {
   this._messageEngineService .getMessage()
      .subscribe((respuesta) => (this.message=respuesta));
    this.initFilteredQueues();
  }

  filteredQueues: string[] = [];

  initFilteredQueues() {
    if (this.message && this.message.data.consumersByQueue) {
      this.filteredQueues = Object.keys(this.message.data.consumersByQueue);
    }
  }
  onSearch(term: string) :void {
    if (!this.message || !this.message.data || !this.message.data.consumersByQueue) {
      this.filteredQueues = [];
      return;
    }
    if (!term) {
      this.initFilteredQueues();
    } else {
      const queues = Object.keys(this.message.data.consumersByQueue);
      this.filteredQueues = queues.filter(queue =>
        queue.toLowerCase().includes(term.toLowerCase())
      );
    }
  }


}
