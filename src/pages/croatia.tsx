import { useEffect, useState } from "react";

type CountryType = {
  area: number;
  flags: {
    png: string;
    alt: string;
  };
  languages: { hrv: string };
  borders: [];
  translations: CountryTranslations;
};

//dictionary
type CountryTranslations = {
  [country: string]: CountryTranslationItem;
};

type CountryTranslationItem = {
  official: string;
  common: string;
};

const Croatia = () => {
  const [country, setCountry] = useState<CountryType>();

  const getData = () => {
    fetch("https://restcountries.com/v3.1/name/croatia")
      .then((data) => {
        return data.json();
      })
      .then((data: CountryType[]) => {
        console.log(data[0]);
        setCountry(data[0]);
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
      <h1>
        {" "}
        <div>CROATIA</div>
      </h1>
      <h2>Language: {country?.languages.hrv}</h2>
      <div>
        <img src={country?.flags.png} alt="" />
      </div>
      <h2> Area: </h2>
      {country?.area} km^2
      <div>
        <h2> Borders: </h2>
        {country?.borders.map((granica, index) => {
          return (
            <>
              <div key={index}>{granica}</div>
            </>
          );
        })}
      </div>
      <h2>Translations:</h2>
      {country &&
        Object.keys(country.translations).map((key: string) => {
          return (
            <>
              {" "}
              <div key={Math.random()} style={{ textTransform: "uppercase" }}>
                {key}
              </div>
              <div key={Math.random()}>
                Official: {country.translations[key].official}
              </div>
              <div key={Math.random()}>
                Common: {country.translations[key].common}
              </div>{" "}
              <hr />
            </>
          );
        })}
    </>
  );
};
export default Croatia;
