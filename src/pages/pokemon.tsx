type PokemonType = {
  name: string;
  url: string;
  order: number;
  sprites: {
    front_default: string;
    front_shiny: string;
  };
  abilities: PokemonAbilityType[];
  types: PokemonTypeType[];
  stats: StatsTypeType[];
};

type PokemonAbilityType = {
  ability: {
    name: string;
  };
};
type PokemonTypeType = {
  type: {
    name: string;
  };
};

type StatsTypeType = {
  base_stat: string;
  stat: {
    name: string;
  };
};

import { useEffect, useState } from "react";

const Pokemon = () => {
  const [pokemonData, setPokemonData] = useState<PokemonType | null>(null);

  const getData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/venusaur/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPokemonData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div style={{ textTransform: "capitalize" }}>
        <h1>
          {pokemonData?.order} {pokemonData?.name}
        </h1>
        <div></div>
        <div>
          Abilities :{" "}
          {pokemonData?.types.map((type, index) => {
            return (
              <>
                <span key={index}>{type.type.name}</span>
              </>
            );
          })}
        </div>
        <hr />
        <div>
          {" "}
          {pokemonData?.abilities.map((ability, index) => {
            return (
              <>
                <span key={index}>{ability.ability.name}</span>
              </>
            );
          })}
        </div>
        <img
          src={pokemonData?.sprites.front_default}
          alt={pokemonData?.name + "picture"}
        />

        <div>
          {pokemonData?.stats.map((stat, index) => {
            return (
              <>
                <span key={index}>{stat.stat.name}: </span>
                <span key={index}>{stat.base_stat} </span>
                <hr />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Pokemon;
