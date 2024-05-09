import { Component, OnInit, inject, Input } from '@angular/core';
import {
  NgbActiveModal,
  NgbModal,
  NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { TableHistoryComponent } from '../job-history.table/job-history.table.component';
import { TableComponent } from '../job-status.table/job-status.table.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getIdHistoryUsecase } from '../../application/usecases/getId-history.usecase/getId-history.usecase';
import { TableHistoryProgressComponent } from '../job-history-progress.table/job-history-progress.table.component';
import { HistoryProgress } from '../../domain/interfaces/historyJobProgress';

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

  historyProgress: HistoryProgress[] | undefined;

  objectKeys(obj: object) {
    return Object.keys(obj);
  }

  private getIdHistoryUsecase = inject(getIdHistoryUsecase);

  constructor(private http: HttpClient, private modalService: NgbModal) {}

  ngOnInit(): void {
    if (this.idName) {
      this.getIdHistoryUsecase
        .getIdProgress(this.idName)
        .subscribe(
          (respuesta) => (this.historyProgress = respuesta.data.history)
        );
    }
  }
  refreshData() {
    if (this.idName) {
      this.getIdHistoryUsecase
        .getIdProgress(this.idName)
        .subscribe(
          (respuesta) => (this.historyProgress = respuesta.data.history)
        );
    }
  }
}
