import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModalInProgessComponent } from './page-modal-in-progess.component';

describe('PageModalInProgessComponent', () => {
  let component: PageModalInProgessComponent;
  let fixture: ComponentFixture<PageModalInProgessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageModalInProgessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageModalInProgessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
