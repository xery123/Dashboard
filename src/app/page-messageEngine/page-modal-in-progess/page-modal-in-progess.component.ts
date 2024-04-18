import { Component, Input, inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TableInprogressComponent } from '../table-inprogress/TableInprogressComponent';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProgressHistoryService } from '../service/progress history/progress-history.service';
import { DatumP, IHistoryP } from '../interface/historyP';
import { TokenService } from '../service/token';


@Component({
    selector: 'app-page-modal-in-progess',
    standalone: true,
    templateUrl: './page-modal-in-progess.component.html',
    styleUrl: './page-modal-in-progess.component.css',
    imports: [TableInprogressComponent]
})
export class PageModalInProgessComponent {

  @Input()
  queue: string | undefined;

  historyP: DatumP[] | undefined;

  activeModal = inject(NgbActiveModal);
  constructor(private http: HttpClient,
    private modalService: NgbModal,
    private tokenService: TokenService,
    private readonly _progressHistoryService: ProgressHistoryService) {
	}
  ngOnInit(): void {

    if (this.queue) {
      const url = this._progressHistoryService.getId(this.queue);
      const token = this.tokenService.getToken();
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      this.http.get<IHistoryP>(url,{ headers })
      .subscribe(respuesta => {
             this.historyP = respuesta.data;
            });
  }
  }
}
