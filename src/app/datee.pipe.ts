import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datee'
})
export class DateePipe implements PipeTransform {

  transform(p:String): string {
    return '*-'+p+'-*';
  }

}
