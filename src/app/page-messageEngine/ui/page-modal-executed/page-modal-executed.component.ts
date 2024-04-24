import { Component, Input, inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TableExecutedComponent } from '../table-executed/table-executed.component';

import { DataHistoryFinished } from '../../domain/interface/history-queue-longest-finished';
import { getHistoryFinishedAdapter } from '../../infrastructure/adapters/get-history-finished.adapter/get-history-finished.adapter';

@Component({
  selector: 'app-page-modal-executed',
  standalone: true,
  templateUrl: './page-modal-executed.component.html',
  styleUrl: './page-modal-executed.component.css',
  imports: [TableExecutedComponent],
})
export class PageModalExecutedComponent {
  @Input()
  queue: string | undefined;

  historyFinished: DataHistoryFinished[] | undefined;

  activeModal = inject(NgbActiveModal);
  constructor(
    private modalService: NgbModal,
    private readonly getHistoryFinishedAdapter: getHistoryFinishedAdapter
  ) {}
  ngOnInit(): void {
    if (this.queue) {
      this.getHistoryFinishedAdapter
        .getHistoryFinished(this.queue)
        .subscribe((respuesta) => (this.historyFinished = respuesta.data));
    }
  }
}
