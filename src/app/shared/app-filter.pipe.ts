import {Pipe, PipeTransform} from '@angular/core';
import {Character} from './app.service';

@Pipe({
  name: 'AppFilterPipe'
})

export class AppFilterPipe implements PipeTransform {
  transform(characters: Character[], search: ''): Character[] {
    if (!search.trim()) {
      return characters;
    }
    return characters.filter(character => {
      return character.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
  }

}

