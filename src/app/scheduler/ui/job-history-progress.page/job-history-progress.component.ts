import { Component, OnInit, inject, Input, Inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { TableHistoryComponent } from '../job-history.table/job-history.table.component';
import { TableComponent } from '../job-status.table/job-status.table.component';
import { HttpClient } from '@angular/common/http';
import { TableHistoryProgressComponent } from '../job-history-progress.table/job-history-progress.table.component';
import { GET_HISTORY_PROGRESS_USECASE } from '../../application/usecases/handlers/query/get-history-progress.query.handler';
import { getHistoryProgressUsecase } from '../../application/usecases/get-history-progress.usecase';
import { HistoryEntitie } from '../../domain/entities/history';

@Component({
  selector: 'app-history-job-progress',
  standalone: true,
  templateUrl: './job-history-progress.component.html',
  styleUrl: './job-history-progress.component.css',
  imports: [
    CommonModule,
    TableHistoryComponent,
    TableComponent,
    TableHistoryProgressComponent,
  ],
})
export class PageHistoryProgresssComponent implements OnInit {
  activeModal = inject(NgbActiveModal);

  @Input()
  idName: string | undefined;

  historyProgress: HistoryEntitie[] | undefined;

  objectKeys(obj: object) {
    return Object.keys(obj);
  }

  constructor(
    @Inject(GET_HISTORY_PROGRESS_USECASE)
    private getHistoryProgressUsecase: getHistoryProgressUsecase,
    private http: HttpClient,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    if (this.idName) {
      this.getHistoryProgressUsecase
        .handle(this.idName)
        .subscribe(
          (respuesta) => (this.historyProgress = respuesta.data.history)
        );
    }
  }
  refreshData() {
    if (this.idName) {
      this.getHistoryProgressUsecase
        .handle(this.idName)
        .subscribe(
          (respuesta) => (this.historyProgress = respuesta.data.history)
        );
    }
  }
}
