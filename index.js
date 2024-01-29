import {of} from 'rxjs';
import {map, filter} from 'rxjs/operators';

of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9).pipe(
    map(valor => valor * 2 + 1),
    filter(valor => valor <= 9)
  ).subscribe(result => {
    console.log(result); 
  });