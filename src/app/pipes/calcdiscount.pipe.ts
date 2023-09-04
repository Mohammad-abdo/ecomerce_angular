import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcdiscount'
})
export class CalcdiscountPipe implements PipeTransform {

  transform(value: any): any {
    // Remove any non-digit characters
    const cleanedValue = value.replace(/\D/g, '');

    // Split the string into groups of 4 digits
    const groups = cleanedValue.match(/(\d{1,4})/g);

    if (groups) {
      // Join the groups with " - " separator
      return groups.join(' - ');
    } else {
      // Return the original value if it cannot be formatted
      return value;
    }
  }
}
