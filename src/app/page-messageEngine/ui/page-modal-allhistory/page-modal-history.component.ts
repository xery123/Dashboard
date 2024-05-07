import { Component, Input, OnInit, inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TableHistoryComponent } from '../table-allhistory/table-history.component';
import { DataHistoryQueue } from '../../domain/interface/history-queue';
import { getHistoryUsecase } from '../../aplication/usecases/get-history.usecase/get-history.usecase';
import { CommonModule } from '@angular/common';

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
    private modalService: NgbModal,
    private readonly getHistoryUsecase: getHistoryUsecase
  ) {}
  ngOnInit(): void {
    if (this.queue) {
      this.getHistoryUsecase
        .getHistory(this.queue)
        .subscribe((respuesta) => (this.historyAll = respuesta.data));
    }
  }
}
