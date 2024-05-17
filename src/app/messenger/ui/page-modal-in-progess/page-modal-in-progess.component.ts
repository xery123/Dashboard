import { Component, Inject, Input, inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TableInprogressComponent } from '../table-inprogress/TableInprogressComponent';
import { CommonModule } from '@angular/common';
import { GET_HISTORY_PROGRESS_USECASE } from '../../aplication/usecases/handlers/query/get-history-progress.query.handler';

import { getHistoryProgressUsecase } from '../../aplication/usecases/get-history-progress.usecase';
import { HistoryEntitie } from '../../domain/entities/history';

@Component({
  selector: 'app-page-modal-in-progess',
  standalone: true,
  templateUrl: './page-modal-in-progess.component.html',
  styleUrl: './page-modal-in-progess.component.css',
  imports: [TableInprogressComponent, CommonModule],
})
export class PageModalInProgessComponent {
  @Input()
  queue: string | undefined;

  historyProgress: HistoryEntitie[] | undefined;

  activeModal = inject(NgbActiveModal);
  constructor(
    private modalService: NgbModal,
    @Inject(GET_HISTORY_PROGRESS_USECASE)
    private getHistoryProgressUsecase: getHistoryProgressUsecase
  ) {}
  ngOnInit(): void {
    if (this.queue) {
      this.getHistoryProgressUsecase
        .handle(this.queue)
        .subscribe((respuesta) => (this.historyProgress = respuesta.data));
    }
  }
  refreshData() {
    if (this.queue) {
      this.getHistoryProgressUsecase
        .handle(this.queue)
        .subscribe((respuesta) => (this.historyProgress = respuesta.data));
    }
  }
}
