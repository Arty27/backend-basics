import { useState } from "react";
import "./App.css";
import { useQuery, useMutation, gql } from "@apollo/client";

const GET_USERS = gql`
  query GetUsers {
    getUsers {
      id
      name
      age
      isMarried
    }
  }
`;

const GET_USER_BY_ID = gql`
  query GetUserById($userId: ID!) {
    getUserById(id: $userId) {
      age
      id
      isMarried
      name
    }
  }
`;

const CREATE_USER = gql`
  mutation Mutation($name: String!, $age: Int!, $isMarried: Boolean!) {
    createUser(name: $name, age: $age, isMarried: $isMarried) {
      id
      name
    }
  }
`;

function App() {
  const [user, setUser] = useState();
  const [age, setAge] = useState();
  const {
    data: usersData,
    error: usersError,
    loading: usersLoading,
  } = useQuery(GET_USERS);

  const {
    data: userData,
    error: userError,
    loading: userLoading,
  } = useQuery(GET_USER_BY_ID, {
    variables: { userId: "2" },
  });

  const [createUser] = useMutation(CREATE_USER);

  if (usersLoading) {
    return <p>Data loading...</p>;
  }
  if (usersError) {
    return <p>{usersError.message}</p>;
  }

  const handleCreateUser = async () => {
    await createUser({
      variables: { name: user, age: Number(age), isMarried: false },
    });
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Name..."
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
        />
        <button onClick={handleCreateUser}>Submit</button>
      </div>
      <h1>Users</h1>
      <div>
        {usersData.getUsers.map((user) => (
          <div key={user.id}>
            <p>name:{user.name}</p>
            <p>age:{user.age}</p>
            <p>isMarried:{user.isMarried ? "Yes" : "No"}</p>
            <hr />
          </div>
        ))}
      </div>
      <div>
        Chosen User ={" "}
        {userLoading ? <p>Loading User...</p> : userData.getUserById.name}
      </div>
    </>
  );
}

export default App;
