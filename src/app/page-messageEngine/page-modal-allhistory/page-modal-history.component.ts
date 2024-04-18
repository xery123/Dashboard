
import { Component, Input, OnInit, inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TableHistoryComponent } from "../table-allhistory/table-history.component";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HistoryService } from '../service/history/history.service';
import { Datum, IHistory } from '../interface/history';
import { TokenService } from '../service/token';

@Component({
    selector: 'app-page-modal-history',
    standalone: true,
    templateUrl: './page-modal-history.component.html',
    styleUrl: './page-modal-history.component.css',
    imports: [TableHistoryComponent]
})
export class PageModalAllHistoryComponent implements OnInit{

  @Input()
  queue: string | undefined;

  historyT: Datum[] | undefined;

  activeModal = inject(NgbActiveModal);
  constructor(private http: HttpClient,
    private modalService: NgbModal,
    private tokenService: TokenService,
    private readonly _historyService: HistoryService) {
	}
  ngOnInit(): void {

    if (this.queue) {
      const url = this._historyService.getId(this.queue);
      const token = this.tokenService.getToken();
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      this.http.get<IHistory>(url,{ headers })
      .subscribe(respuesta => {
             this.historyT = respuesta.data;
            });
  }
  }
}
