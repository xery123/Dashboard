import { Component, Input, OnInit, inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TableItemsComponent } from "../table-items/table-items.component";
import { EnableDisableComponent } from "../enable-disable/enable-disable.component";
import { IMessage } from '../interface/message-items';



@Component({
    selector: 'app-page-modal-items',
    standalone: true,
    templateUrl: './page-modal-items.component.html',
    styleUrl: './page-modal-items.component.css',
    imports: [TableItemsComponent, EnableDisableComponent]
})
export class PageModalItemsComponent  {

  @Input()
  message: IMessage | undefined;

  @Input()
  queue: string | undefined;

  activeModal = inject(NgbActiveModal);

  constructor(private modalService: NgbModal) {
	}
}
