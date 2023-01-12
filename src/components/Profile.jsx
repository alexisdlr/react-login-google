import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

function Profile() {
  const { user, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (

      <div className="profile">
        <h1>
         {user.name}
        </h1>
        <img src={user.picture} alt={user.name} />
        <p>{user.email}</p>
        <p>{user.gender}</p>
      </div>
       
  );
}

export default Profile;
