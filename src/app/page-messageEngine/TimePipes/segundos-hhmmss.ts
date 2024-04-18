import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToTime',
  standalone: true
})
export class SecondsToTimePipe implements PipeTransform {
  transform(value: string): string {
    const seconds = parseInt(value, 10);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${this.formatTime(hours)}:${this.formatTime(minutes)}:${this.formatTime(remainingSeconds)}`;
  }

  private formatTime(time: number): string {
    return time.toString().padStart(2, '0');
  }
}
