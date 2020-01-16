import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';


export interface Character {
  name: string;
  mass: number;
  height: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: any;
  gender: string;
}

@Injectable({providedIn: 'root'})
export class AppService {
  public characters: Character[] = [];

  public name: string;
  public mass: number;
  public height: number;
  public hairColor: string;
  public skinColor: string;
  public eyeColor: string;
  public birthYear: any;
  public gender: string;

  constructor(private http: HttpClient) {
  }

  fetchCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>('https://swapi.co/api/people/')
      // @ts-ignore
      .pipe(tap(characters => this.characters = characters.results))
      .pipe(tap(characters => console.log(characters)));
  }

  // addCharacter(characters: Character) {
  //   characters.name.length > 0 ? this.characters.push(characters) : alert('Введите имя');
  // }

  onSelect(id: number) {
    const index = this.characters.findIndex(t => t.height === id);
    this.name = this.characters[index].name;
    this.mass = this.characters[index].mass;
    this.height = this.characters[index].height;
    this.hairColor = this.characters[index].hair_color;
    this.skinColor = this.characters[index].skin_color;
    this.eyeColor = this.characters[index].eye_color;
    this.birthYear = this.characters[index].birth_year;
    this.gender = this.characters[index].gender;
  }


}
