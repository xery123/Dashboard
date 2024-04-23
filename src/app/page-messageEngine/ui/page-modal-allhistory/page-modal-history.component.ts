import { Component, Input, OnInit, inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TableHistoryComponent } from '../table-allhistory/table-history.component';
import { HttpClient } from '@angular/common/http';
import { getHistoryAdapter } from '../../infrastructure/adapters/get-history.adapter/get-history.adapter';
import { DataHistoryQueue } from '../../domain/interface/history-queue';

@Component({
  selector: 'app-page-modal-history',
  standalone: true,
  templateUrl: './page-modal-history.component.html',
  styleUrl: './page-modal-history.component.css',
  imports: [TableHistoryComponent],
})
export class PageModalAllHistoryComponent implements OnInit {
  @Input()
  queue: string | undefined;

  historyAll: DataHistoryQueue[] | undefined;

  activeModal = inject(NgbActiveModal);
  constructor(
    private http: HttpClient,
    private modalService: NgbModal,
    private readonly getHistoryAdapter: getHistoryAdapter
  ) {}
  ngOnInit(): void {
    if (this.queue) {
      this.getHistoryAdapter
        .getHistory(this.queue)
        .subscribe((respuesta) => (this.historyAll = respuesta.data));
    }
  }
}
