import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshBoxComponent } from './refresh-box.component';

describe('RefreshBoxComponent', () => {
  let component: RefreshBoxComponent;
  let fixture: ComponentFixture<RefreshBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefreshBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RefreshBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
