import { Component, OnInit, inject, Input, Inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { TableHistoryComponent } from '../job-history.table/job-history.table.component';
import { TableComponent } from '../job-status.table/job-status.table.component';
import { HttpClient } from '@angular/common/http';
import { TableHistoryFinishedComponent } from '../job-history-finished.table/job-history-finished.table.component';
import { GET_HISTORY_FINISHED_USECASE } from '../../application/usecases/handlers/query/get-history-finished.query.handler';
import { getHistoryFinishedUsecase } from '../../application/usecases/get-history-finished.usecase';
import { HistoryEntitie } from '../../domain/entities/history';

@Component({
  selector: 'app-history-job-finished',
  standalone: true,
  templateUrl: './job-history-finished.component.html',
  styleUrl: './job-history-finished.component.css',
  imports: [
    CommonModule,
    TableHistoryComponent,
    TableComponent,
    TableHistoryFinishedComponent,
  ],
})
export class PageHistoryFinishedComponent implements OnInit {
  activeModal = inject(NgbActiveModal);

  @Input()
  idName: string | undefined;

  historyFinished: HistoryEntitie[] | undefined;

  objectKeys(obj: object) {
    return Object.keys(obj);
  }

  constructor(
    @Inject(GET_HISTORY_FINISHED_USECASE)
    private getHistoryFinishedUsecase: getHistoryFinishedUsecase,
    private http: HttpClient,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    if (this.idName) {
      this.getHistoryFinishedUsecase
        .handle(this.idName)
        .subscribe(
          (respuesta) => (this.historyFinished = respuesta.data.history)
        );
    }
  }
  refreshData() {
    if (this.idName) {
      this.getHistoryFinishedUsecase
        .handle(this.idName)
        .subscribe(
          (respuesta) => (this.historyFinished = respuesta.data.history)
        );
    }
  }
}
