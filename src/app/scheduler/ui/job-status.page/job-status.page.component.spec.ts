import { ComponentFixture, TestBed } from '@angular/core/testing';
import StatusJobComponent from './job-status.page.component';



describe('StatusJobComponent', () => {
  let component: StatusJobComponent;
  let fixture: ComponentFixture<StatusJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusJobComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
