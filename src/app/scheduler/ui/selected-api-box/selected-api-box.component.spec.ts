import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedApiBoxComponent } from './selected-api-box.component';

describe('SelectedApiBoxComponent', () => {
  let component: SelectedApiBoxComponent;
  let fixture: ComponentFixture<SelectedApiBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedApiBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectedApiBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
