import { Component,Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HistoryJobComponent } from '../job-history.page/job-history.page.component';
import { History} from '../../domain/interfaces/history';
import { TableHistoryComponent } from "../job-history.table/job-history.table.component";
import { IStatus, JobAsyncAggregateJobExecution1 } from '../../domain/interfaces/status';

 @Component({
    selector: 'app-table',
    standalone: true,
    templateUrl: './job-status.table.component.html',
    styleUrl: './job-status.table.component.css',
    imports: [CommonModule, TableHistoryComponent]
})

 export class TableComponent {

  @Input()
  jobsId: IStatus | undefined;

  idName: string | undefined;

	constructor(private modalService: NgbModal) {
	}

  obtenerId(id: string) {
    this.idName = id;
    this.abrirModal();
  };

  abrirModal() {
    const modalRef = this.modalService.open(HistoryJobComponent, { size: 'lg' });
    modalRef.componentInstance.idName= this.idName;
  }
}

