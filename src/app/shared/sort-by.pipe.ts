import { Pipe, PipeTransform } from '@angular/core';

import { Peticion } from './peticion/peticion.model';

@Pipe({
  name: 'sortBy',
  pure: false
})
export class SortByPipe implements PipeTransform {

  transform(array: Array<Peticion>): any {
    if (array) {
      return array.sort((a: Peticion, b: Peticion) => {
        const [aDay, aMonth, aYear] = a.fecha.split("-");
        const [bDay, bMonth, bYear] = b.fecha.split("-");
        const aDate = new Date(parseInt(aYear), parseInt(aMonth) + 1, parseInt(aDay));
        const bDate = new Date(parseInt(bYear), parseInt(bMonth) + 1, parseInt(bDay));
        return bDate.getTime() - aDate.getTime();
      });
    } else {
      return array;
    }
  }

}
