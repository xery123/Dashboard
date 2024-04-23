import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModalItemsComponent } from './page-modal-items.component';

describe('PageModalItemsComponent', () => {
  let component: PageModalItemsComponent;
  let fixture: ComponentFixture<PageModalItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageModalItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageModalItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
