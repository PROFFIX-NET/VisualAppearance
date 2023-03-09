import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomPic'
})

export class RandomPicPipe implements PipeTransform {
  transform(value: Array<string>): string {
    return value[Math.floor(Math.random() * value.length)];
  }
}