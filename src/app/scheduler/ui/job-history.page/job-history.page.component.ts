import { Component, OnInit, inject, Input, Inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { TableHistoryComponent } from '../job-history.table/job-history.table.component';
import { TableComponent } from '../job-status.table/job-status.table.component';
import { HttpClient } from '@angular/common/http';
import { GET_HISTORY_USECASE } from '../../application/usecases/handlers/query/get-history.query.handler';
import { getHistoryUsecase } from '../../application/usecases/get-history.usecase';
import { HistoryEntitie } from '../../domain/entities/history';

@Component({
  selector: 'app-history-job',
  standalone: true,
  templateUrl: './job-history.page.component.html',
  styleUrl: './job-history.page.component.css',
  imports: [CommonModule, TableHistoryComponent, TableComponent],
})
export class HistoryJobComponent implements OnInit {
  activeModal = inject(NgbActiveModal);

  @Input()
  idName: string | undefined;

  historyT: HistoryEntitie[] | undefined;

  objectKeys(obj: object) {
    return Object.keys(obj);
  }

  constructor(
    @Inject(GET_HISTORY_USECASE)
    private getHistoryUsecase: getHistoryUsecase,
    private http: HttpClient,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    if (this.idName) {
      this.getHistoryUsecase
        .handle(this.idName)
        .subscribe((respuesta) => (this.historyT = respuesta.data.history));
    }
  }
  refreshData() {
    if (this.idName) {
      this.getHistoryUsecase
        .handle(this.idName)
        .subscribe((respuesta) => (this.historyT = respuesta.data.history));
    }
  }
}
