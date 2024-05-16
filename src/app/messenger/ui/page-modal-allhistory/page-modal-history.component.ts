import { Component, Inject, Input, OnInit, inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TableHistoryComponent } from '../table-allhistory/table-history.component';
import { DataHistoryQueue } from '../../domain/history-queue';
import { CommonModule } from '@angular/common';
import { GET_HISTORY_USECASE } from '../../aplication/usecases/handlers/query/get-history.query.handler';
import { getHistoryUsecase } from '../../aplication/usecases/get-history.usecase';

@Component({
  selector: 'app-page-modal-history',
  standalone: true,
  templateUrl: './page-modal-history.component.html',
  styleUrl: './page-modal-history.component.css',
  imports: [TableHistoryComponent, CommonModule],
})
export class PageModalAllHistoryComponent implements OnInit {
  @Input()
  queue: string | undefined;

  historyAll: DataHistoryQueue[] | undefined;

  activeModal = inject(NgbActiveModal);
  constructor(
    @Inject(GET_HISTORY_USECASE)
    private getHistoryUsecase: getHistoryUsecase,
    private modalService: NgbModal
  ) {}
  ngOnInit(): void {
    if (this.queue) {
      this.getHistoryUsecase
        .handle(this.queue)
        .subscribe((respuesta) => (this.historyAll = respuesta.data));
    }
  }
  refreshData() {
    if (this.queue) {
      this.getHistoryUsecase
        .handle(this.queue)
        .subscribe((respuesta) => (this.historyAll = respuesta.data));
    }
  }
}
