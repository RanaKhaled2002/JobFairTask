import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../customer';

@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {

  transform(customer:Customer[], name:string): Customer[] {
    return customer.filter((item)=>item.name?.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
  }

}
