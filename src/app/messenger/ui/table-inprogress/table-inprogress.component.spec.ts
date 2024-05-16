import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInprogressComponent } from './TableInprogressComponent';

describe('TableInprogressComponent', () => {
  let component: TableInprogressComponent;
  let fixture: ComponentFixture<TableInprogressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableInprogressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableInprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
