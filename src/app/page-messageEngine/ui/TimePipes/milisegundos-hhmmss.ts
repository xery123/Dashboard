import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'millisecondsToTime',
  standalone: true,
})
export class MillisecondsToTimePipe implements PipeTransform {
  transform(value: number): string {
    const seconds = Math.floor(value / 1000);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${this.formatTime(hours)}:${this.formatTime(minutes)}:${this.formatTime(remainingSeconds)}`;
  }

  private formatTime(time: number): string {
    return time.toString().padStart(2, '0');
  }
}
