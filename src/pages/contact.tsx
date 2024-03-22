import React, { useEffect, useState } from "react";

type CountryType = {
  flags: {
    png: string;
    alt: string;
  };
};

const Contact = () => {
  const [country, setCountry] = useState<CountryType | undefined>(undefined);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    getData(inputValue);
  };

  const getData = async (countryName: string) => {
    await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((data) => {
        return data.json();
      })
      .then((res: CountryType[]) => {
        setCountry(res[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData("France");
  }, []);

  return (
    <>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter country"
        />
        <button onClick={handleButtonClick}>Get the flag</button>
      </div>
      <img src={country?.flags.png} alt="" />
      <div style={{ width: "20rem" }}>{country?.flags.alt}</div>
    </>
  );
};
export default Contact;
