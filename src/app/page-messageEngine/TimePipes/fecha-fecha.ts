import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'timeDifference', standalone: true })
export class TimeDifferencePipe implements PipeTransform {
  transform(value: string, arg1: string): string {
    const date1 = this.parseDateString(value);
    const date2 = this.parseDateString(arg1);
    const diffInSeconds = Math.abs(date1.getTime() - date2.getTime()) / 1000;

    const hours = Math.floor(diffInSeconds / 3600);
    const minutes = Math.floor((diffInSeconds % 3600) / 60);
    const seconds = Math.floor(diffInSeconds % 60);

    return `${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(seconds)}`;
  }

  private parseDateString(dateString: string): Date {
    const [datePart, timePart] = dateString.split(' ');
    const [day, month, year] = datePart.split('/');
    const [hours, minutes, seconds] = timePart.split(':');
    return new Date(
      parseInt(year, 10),
      parseInt(month, 10) - 1,
      parseInt(day, 10),
      parseInt(hours, 10),
      parseInt(minutes, 10),
      parseInt(seconds, 10)
    );
  }

  private padZero(value: number): string {
    return value.toString().padStart(2, '0');
  }
}
