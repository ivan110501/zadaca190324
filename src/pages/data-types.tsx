import { useState } from "react";
import Button from "../components/button";
type ProfileType = {
  name: string;
  lastName: string;
  age: number;
  gender: boolean;
  profilePicture?: string;
};

type BookType = {
  title: string;
  author: string;
  pages: number;
  hardCovers: boolean;
};

const DataTypes = () => {
  const defaultProfileValues: ProfileType = {
    age: 22,
    gender: true,
    lastName: "Antunovic",
    name: "Ivan",
    profilePicture: "https://xsgames.co/randomusers/assets/images/favicon.png",
  };

  const booksArray: BookType[] = [
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      pages: 320,
      hardCovers: true,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      pages: 281,
      hardCovers: false,
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      pages: 180,
      hardCovers: true,
    },
  ];

  const [name, setName] = useState<string>("");
  const [names, setNames] = useState<string[]>([]);
  const [homeNumber, setHomeNumber] = useState<number>(859);
  const [grades, setGrades] = useState<number[]>([5, 1, 4, 2, 5, 1]);
  const [profile, setProfile] = useState<ProfileType>(defaultProfileValues);
  const [books, setBooks] = useState<BookType[]>(booksArray);
  const [wc, setWc] = useState<boolean>(true);
  const ChangeGender = () => {
    const newGender: ProfileType = {
      age: profile.age,
      name: profile.name,
      lastName: profile.lastName,
      profilePicture: profile.profilePicture,
      gender: !profile.gender,
    };

    newGender.gender = !newGender.gender;
    setProfile(newGender);
  };
  return (
    <>
      <h1>String</h1>

      <div>{name ? name : "Ime ne postoji"}</div>
      <Button
        onClick={() => {
          setName("Pero");
        }}
      >
        Add name
      </Button>
      <hr />
      <h1>String Array</h1>

      <div>
        {names.length === 0
          ? "Nema imena u nizu"
          : names.map((name) => {
              return (
                <>
                  <div>{name}</div>
                </>
              );
            })}
        <Button
          onClick={() => {
            setNames([...names, "Mirko", "Slavko"]);
          }}
        >
          Set names
        </Button>
      </div>
      <hr />
      <h1>Home Number</h1>

      <div>{homeNumber < 0 ? "Broj je nevaljan" : homeNumber}</div>
      <Button
        onClick={() => {
          setHomeNumber(505);
        }}
      >
        Change home number{" "}
      </Button>
      <hr />
      <h1>Grades Array</h1>

      <div>
        {grades.length === 0
          ? "Nema unesenih ocjena"
          : grades.map((grade) => {
              return (
                <>
                  <div>{grade > 0 && grade < 6 ? grade : ""}</div>
                </>
              );
            })}
      </div>
      <Button
        onClick={() => {
          let newState: number[] = [];
          grades.forEach((grade) => {
            if (grade > 1) {
              newState.push(grade);
            }
          });
          setGrades(newState);
        }}
      >
        Izbrisi jedinice
      </Button>
      <hr />
      <h1>Profile</h1>
      <div>
        <div>{profile.name}</div>

        <div>{profile.lastName}</div>
        <div>{profile.age}</div>
        <Button>Change gender</Button>
        <div>{profile.gender ? "Muskarac" : "Zena"}</div>
        <div>
          <img className="pfp" src={profile.profilePicture} alt="pfp" />
        </div>
      </div>
      <hr />

      <h1>Books Array</h1>

      <div>
        {books.map((book) => {
          return (
            <>
              <div>
                {book.title}, ( {book.author})
              </div>
              <div>Broj stranica: {book.pages}</div>
              <div>Tvrde korice: {book.hardCovers ? "Da" : "Ne"}</div>
              <hr />
            </>
          );
        })}
      </div>
      <h1>Boolean</h1>

      <div>Wc: {wc ? "Ima" : "Nema"}</div>
    </>
  );
};
export default DataTypes;
