import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModalExecutedComponent } from './page-modal-executed.component';

describe('PageModalExecutedComponent', () => {
  let component: PageModalExecutedComponent;
  let fixture: ComponentFixture<PageModalExecutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageModalExecutedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageModalExecutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
