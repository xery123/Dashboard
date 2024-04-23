import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMessageEngineComponent } from './table-message-engine.component';

describe('TableMessageEngineComponent', () => {
  let component: TableMessageEngineComponent;
  let fixture: ComponentFixture<TableMessageEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableMessageEngineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableMessageEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
