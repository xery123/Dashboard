
import { Component,OnInit,inject ,Input} from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { IHistory,History } from '../../domain/interfaces/history';
import { CommonModule } from '@angular/common';
import { TableHistoryComponent } from "../job-history.table/job-history.table.component";
import { TableComponent } from '../job-status.table/job-status.table.component';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { TokenService } from '../../infrastructure/token';
import { getIdHistoryUsecase } from '../../application/usecases/getId-history.usecase/getId-history.usecase';

@Component({
    selector: 'app-history-job',
    standalone: true,
    templateUrl: './job-history.page.component.html',
    styleUrl: './job-history.page.component.css',
    imports: [CommonModule, TableHistoryComponent,TableComponent]
})
export class HistoryJobComponent implements OnInit{
  activeModal = inject(NgbActiveModal);

  @Input()
  idName: string | undefined;

  @Input()
  historyT: History[] | undefined;

  objectKeys(obj: object) {
    return Object.keys(obj);
  }

  private getIdHistoryUsecase = inject(getIdHistoryUsecase);

  constructor(private http: HttpClient,
    private modalService: NgbModal,
    private tokenService: TokenService) {
	}

  ngOnInit(): void {
    if (this.idName) {
      const url = this.getIdHistoryUsecase.getId(this.idName);
      const token = this.tokenService.getToken() ;
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      this.http.get<IHistory>(url,{ headers })
      .subscribe(respuesta => {
             this.historyT = respuesta.data.history;
            });
  }
}}






