import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsondata',
  pure:true,
})
export class JsondataPipe implements PipeTransform {
  transform(val:any) {
    return JSON.stringify(val, undefined, 4)
      .replace(/ /g, '&nbsp;')
      .replace(/\n/g, '<br/>');
  }

}
