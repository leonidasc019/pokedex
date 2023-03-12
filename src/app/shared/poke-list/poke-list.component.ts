import { PokeApiService } from './../../service/poke-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit{
  public getAllPokemons: any;
  public setAllPokemons: any;
  constructor(
    private PokeApiService: PokeApiService
  ){}

  ngOnInit(): void {
      this.PokeApiService.apiListAllPokemons.subscribe(
        res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
        console.log(res);
      });
  }

  public getPokemons(value: string){
    const filter = this.setAllPokemons.filter( (res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    })
    this.getAllPokemons = filter;
  }
}
