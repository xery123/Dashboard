import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableExecutedComponent } from './table-executed.component';

describe('TableExecutedComponent', () => {
  let component: TableExecutedComponent;
  let fixture: ComponentFixture<TableExecutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableExecutedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableExecutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
