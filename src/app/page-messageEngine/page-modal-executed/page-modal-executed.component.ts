import { Component, Input, inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TableExecutedComponent } from "../table-executed/table-executed.component";

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatumE, IHistoryE } from '../interface/historyE';
import { LateHistoryService } from '../service/late history/late-history.service';
import { TokenService } from '../service/token';

@Component({
    selector: 'app-page-modal-executed',
    standalone: true,
    templateUrl: './page-modal-executed.component.html',
    styleUrl: './page-modal-executed.component.css',
    imports: [TableExecutedComponent]
})
export class PageModalExecutedComponent {

  @Input()
  queue: string | undefined;

  historyE: DatumE[] | undefined;

  activeModal = inject(NgbActiveModal);
  constructor(private http: HttpClient,
    private modalService: NgbModal,
    private tokenService: TokenService,
    private readonly _lateHistoryService: LateHistoryService) {
	}
  ngOnInit(): void {

    if (this.queue) {
      const url = this._lateHistoryService.getId(this.queue);
      const token = this.tokenService.getToken();
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      this.http.get<IHistoryE>(url,{ headers })
      .subscribe(respuesta => {
             this.historyE = respuesta.data;
            });
  }
  }
}
