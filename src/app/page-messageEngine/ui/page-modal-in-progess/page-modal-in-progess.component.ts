import { Component, Input, inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TableInprogressComponent } from '../table-inprogress/TableInprogressComponent';
import { HttpClient } from '@angular/common/http';
import { getHistoryProgressAdapter } from '../../infrastructure/adapters/get-history-progress.adapter/get-history-progress.adapter';
import { DataHistoryProgress } from '../../domain/interface/history-queue-longest-progress';
import { TokenService } from '../../infrastructure/token';

@Component({
  selector: 'app-page-modal-in-progess',
  standalone: true,
  templateUrl: './page-modal-in-progess.component.html',
  styleUrl: './page-modal-in-progess.component.css',
  imports: [TableInprogressComponent],
})
export class PageModalInProgessComponent {
  @Input()
  queue: string | undefined;

  historyProgress: DataHistoryProgress[] | undefined;

  activeModal = inject(NgbActiveModal);
  constructor(
    private http: HttpClient,
    private modalService: NgbModal,
    private readonly getHistoryProgressAdapter: getHistoryProgressAdapter
  ) {}
  ngOnInit(): void {
    if (this.queue) {
      this.getHistoryProgressAdapter
        .getHistoryProgress(this.queue)
        .subscribe((respuesta) => (this.historyProgress = respuesta.data));
    }
  }
}
