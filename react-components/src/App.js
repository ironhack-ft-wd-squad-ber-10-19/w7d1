import React from "react";

const ProfilePicture = props => {
  return <img src={props.url} alt="profile picture"></img>;
};

const ProfileInfo = props => {
  return (
    <div>
      <h2>Infos:</h2>
      <p>{props.firstName}</p>
      <p>{props.lastName}</p>
    </div>
  );
};

const Heading = props => {
  return <h1>{props.children}</h1>;
};

const Profile = props => {
  //   props.foo = "bar"; ❌
  //   props.user = "baz"; ❌
  return (
    <div>
      <Heading>Profile</Heading>
      <ProfilePicture url={props.user.pictureUrl} />
      <ProfileInfo
        firstName={props.user.firstName}
        lastName={props.user.lastName}
      />
    </div>
  );
};

const userInfo = {
  firstName: "William",
  lastName: "Brown",
  pictureUrl:
    "https://upload.wikimedia.org/wikipedia/commons/e/e0/Sir_William_Brown.jpg"
};

const App = () => {
  return <Profile user={userInfo} />;
};

export default App;
