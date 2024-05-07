import { Component, Input, inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TableInprogressComponent } from '../table-inprogress/TableInprogressComponent';
import { DataHistoryProgress } from '../../domain/interface/history-queue-longest-progress';
import { getHistoryUsecase } from '../../aplication/usecases/get-history.usecase/get-history.usecase';
import { CommonModule } from '@angular/common';

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

  historyProgress: DataHistoryProgress[] | undefined;

  activeModal = inject(NgbActiveModal);
  constructor(
    private modalService: NgbModal,
    private readonly getHistoryUsecase: getHistoryUsecase
  ) {}
  ngOnInit(): void {
    if (this.queue) {
      this.getHistoryUsecase
        .getHistoryProgress(this.queue)
        .subscribe((respuesta) => (this.historyProgress = respuesta.data));
    }
  }
}
