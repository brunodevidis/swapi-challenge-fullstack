import React, { useState, useEffect } from "react";
import PeopleList from "./PeopleList";
import PeopleListHeader from "./PeopleListHeader";
import SearchPeople from "./SearchPeople";
import AddFavourite from "./AddFavourite";
import RemoveFavourite from "./RemoveFavourite";

const Home = () => {
  const [peoples, setPeoples] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  // GET Request
  const getPeoplesRequest = async (searchValue) => {
    const response = await fetch(
      `https://swapi.dev/api/people/?search=${searchValue}`
    );
    const data = await response.json();

    // for debbug purposes
    // Problem: search bar input with delay
    // console.log(searchValue);
    // console.log(data.results);

    // Display all the characters by default
    // Problem: can only display first 10 characters cards of any given search
    setPeoples(data.results);
  };

  useEffect(() => {
    getPeoplesRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const json = localStorage.getItem("favourites-sw-peoples");
    const favouritesPeople = JSON.parse(json) || [];

    setFavourites(favouritesPeople);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("favourites-sw-peoples", JSON.stringify(items));
  };

  // Problem: you can add same character multiple times
  const addFavouritePeople = (people) => {
    const newFavouritePeople = [...favourites, people];
    setFavourites(newFavouritePeople);
    saveToLocalStorage(newFavouritePeople);
  };

  const removeFavouritePeople = (people) => {
    const newFavouritePeople = favourites.filter(
      (favourite) => favourite.name !== people.name
    );

    setFavourites(newFavouritePeople);
    saveToLocalStorage(newFavouritePeople);
  };
  return (
    <div className="container">
      <div className="flex-row flex-justify-fs">
        <PeopleListHeader heading="Favorite Characters" />
      </div>
      <div className="flex-row">
        {/* Displat a list of favourite characters */}
        <PeopleList
          peoples={favourites}
          favouriteClick={removeFavouritePeople}
          favouriteComponent={RemoveFavourite}
        />
      </div>
      <div className="border"></div>
      <div className="flex-row flex-justify-sb">
        {/* Characters Header and Search Box */}
        <PeopleListHeader heading="Characters" />
        <SearchPeople
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>

      <div className="flex-row">
        {/* Display a list of Characters */}
        <PeopleList
          peoples={peoples}
          favouriteClick={addFavouritePeople}
          favouriteComponent={AddFavourite}
        />
      </div>
    </div>
  );
};

export default Home;
