import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  standalone: true,
  styleUrl: './search-box.component.css',
  imports: [FormsModule]
})
export class SearchBoxComponent implements OnInit{


  private debouncer: Subject<string> = new Subject<string>();

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe( value => {
      this.onDebounce.emit( value );
    });
  }

  emitValue( value: string ):void {
    this.onValue.emit( value );
  }

  onSearch( searchTerm: string ) {
    this.debouncer.next( searchTerm );
  }
}
