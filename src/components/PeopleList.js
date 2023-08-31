const PeopleList = ({ peoples, favouriteClick, favouriteComponent }) => {
  const Favourite = favouriteComponent;
  return (
    <>
      {peoples.map((people, peopleIndex) => (
        <div key={peopleIndex} className="flex-row">
          <div className="flex-col">
            <div className="people container">
              <div className="people-heading">
                <h1>{people.name}</h1>
                <p>Height: {people.height}</p>
                <p>Mass: {people.mass}</p>
                <p>Hair Color: {people.hair_color}</p>
                <p>Skin Color: {people.skin_color}</p>
                <p>Eye Color: {people.eye_color}</p>
                <p>Birth Year: {people.birth_year}</p>
                <p>Gender: {people.gender}</p>

                <div className="people-buttons">
                  <div
                    className="people-buttons-favourite"
                    onClick={() => favouriteClick(people)}
                  >
                    <Favourite />
                  </div>
                </div>
              </div>
              <div className="people-intro">
                <p>CHARACTER CARD</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PeopleList;
