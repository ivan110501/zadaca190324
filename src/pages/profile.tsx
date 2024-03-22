import React, { useState } from "react";
import Input from "../components/input";
import Button from "../components/button";
import "./../styles/profile.scss";

type TagType = {
  item: string;
};

const Profile = () => {
  const [tag, setTag] = useState<TagType[]>([]);
  const [tagValue, setTagValue] = useState<string>("");

  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleTagChange = (value: string) => {
    setTagValue(value);
  };

  const handleAdd = () => {
    if (tagValue.trim() !== "") {
      setTag([...tag, { item: tagValue }]);
      setTagValue("");
    }
  };

  return (
    <>
      <div className="profileLayout">
        {" "}
        <div className="profile">
          <div>
            <img
              className="profile__image"
              src="https://source.unsplash.com/random/300×300/?human"
              alt=""
            />
          </div>
          <div className="profile__name">{inputValue}</div>

          <div className="profile__tagbox">
            {tag.map((value, index) => (
              <div className="profile__tag" key={index}>
                {value.item}
              </div>
            ))}
          </div>
        </div>
        <div className="inputs">
          <div>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter name"
            />
          </div>

          <div>
            <Input
              value={tagValue}
              onChange={(value) => handleTagChange(value)}
            />
          </div>

          <div>
            <Button onClick={handleAdd}>Add new item</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
