import { BadRequestException, Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { HttpAdapter } from '../common/interfaces/http-adapter.interface';
import { FetchAdapter } from 'src/common/adapter/fetch.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly HttpAdapter: FetchAdapter
  ) {}

  async executeSeed() {
    try {
      await this.pokemonModel.deleteMany();

      const pokemonsToInsert = [];
      // const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=650');
      // const pokes: PokeResponse = await resp.json();
      const resp = await this.HttpAdapter.fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
      const pokes: PokeResponse = await resp.json()

      pokes.results.map(({ name, url }) => {
        const segments = url.split('/');
        const no = +segments[segments.length - 2];

        pokemonsToInsert.push({ name, no });
      });

      await this.pokemonModel.insertMany(pokemonsToInsert);
      return 'Seed executed';
    } catch (error) {
      console.info(error.message);
      throw new BadRequestException(`Error to load seed, ${error.message}`);
    }
  }
}
