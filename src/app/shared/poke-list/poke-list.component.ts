import { PokeApiService } from './../../service/poke-api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent {
  constructor(
    private PokeApiService: PokeApiService
  ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
      this.PokeApiService.apiListAllPokemons.subscribe(res => res);
  }
}
