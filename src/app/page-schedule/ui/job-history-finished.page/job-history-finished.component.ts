import { Component, OnInit, inject, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { TableHistoryComponent } from '../job-history.table/job-history.table.component';
import { TableComponent } from '../job-status.table/job-status.table.component';
import { HttpClient } from '@angular/common/http';
import { getIdHistoryUsecase } from '../../application/usecases/getId-history.usecase/getId-history.usecase';
import { TableHistoryFinishedComponent } from '../job-history-finished.table/job-history-finished.table.component';
import { HistoryFinished } from '../../domain/interfaces/historyJobFinished';

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

  historyFinished: HistoryFinished[] | undefined;

  objectKeys(obj: object) {
    return Object.keys(obj);
  }

  private getIdHistoryUsecase = inject(getIdHistoryUsecase);

  constructor(private http: HttpClient, private modalService: NgbModal) {}

  ngOnInit(): void {
    if (this.idName) {
      this.getIdHistoryUsecase
        .getIdFinished(this.idName)
        .subscribe(
          (respuesta) => (this.historyFinished = respuesta.data.history)
        );
    }
  }
}
