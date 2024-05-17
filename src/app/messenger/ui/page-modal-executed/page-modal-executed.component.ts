import { Component, Inject, Input, inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TableExecutedComponent } from '../table-executed/table-executed.component';
import { CommonModule } from '@angular/common';
import { GET_HISTORY_FINISHED_USECASE } from '../../aplication/usecases/handlers/query/get-history-finished.query.handler';
import { getHistoryFinishedUsecase } from '../../aplication/usecases/get-history-finished.usecase';
import { HistoryEntitie } from '../../domain/entities/history';

@Component({
  selector: 'app-page-modal-executed',
  standalone: true,
  templateUrl: './page-modal-executed.component.html',
  styleUrl: './page-modal-executed.component.css',
  imports: [TableExecutedComponent, CommonModule],
})
export class PageModalExecutedComponent {
  @Input()
  queue: string | undefined;

  historyFinished: HistoryEntitie[] | undefined;

  activeModal = inject(NgbActiveModal);
  constructor(
    private modalService: NgbModal,
    @Inject(GET_HISTORY_FINISHED_USECASE)
    private getHistoryFinishedUsecase: getHistoryFinishedUsecase
  ) {}
  ngOnInit(): void {
    if (this.queue) {
      this.getHistoryFinishedUsecase
        .handle(this.queue)
        .subscribe((respuesta) => (this.historyFinished = respuesta.data));
    }
  }
  refreshData() {
    if (this.queue) {
      this.getHistoryFinishedUsecase
        .handle(this.queue)
        .subscribe((respuesta) => (this.historyFinished = respuesta.data));
    }
  }
}
