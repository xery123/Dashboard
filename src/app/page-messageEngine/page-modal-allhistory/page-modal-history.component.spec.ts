import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModalAllHistoryComponent } from './page-modal-history.component';

describe('PageModalHistoryComponent', () => {
  let component: PageModalAllHistoryComponent;
  let fixture: ComponentFixture<PageModalAllHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageModalAllHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageModalAllHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
