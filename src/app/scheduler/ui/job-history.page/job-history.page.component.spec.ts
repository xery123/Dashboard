import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryJobComponent } from './job-history.page.component';

describe('HistoryJobComponent', () => {
  let component: HistoryJobComponent;
  let fixture: ComponentFixture<HistoryJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryJobComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
