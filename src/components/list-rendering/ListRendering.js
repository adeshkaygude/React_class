import data from "./user-data.json";

const user = [
  {
    id: 1,
    name: "Omkar",
    mobile: "1111",
  },
  {
    id: 2,
    name: "Aadesh",
    mobile: "2222",
  },
  {
    id: 3,
    name: "Vishnu",
    mobile: "3333",
  },
  {
    id: 4,
    name: "Rahul",
    mobile: "4444",
  },
];

const cities = ["Pune", "Mumbai", "Nashik", "Nagpur"];

const ids = [101, 102, 103, 104];

// 1. Dummy Users - JSON Data Rendering
const DummyUsers = () => {
  return (
    <div>
      <h3>Dummy Users</h3>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 10,
        }}
      >
        {data?.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid #000",
              padding: 10,
            }}
          >
            <img
              src={user?.image}
              alt={user?.firstName}
              style={{
                width: 100,
                height: 100,
                objectFit: "cover",
              }}
            />

            <h4>
              {user?.firstName} {user?.lastName}
            </h4>

            <p>Phone: {user?.phone}</p>
            <p>Gender: {user?.gender}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

// 2. User List - Local Array Rendering
const UserList = () => {
  return (
    <div>
      <h3>User List</h3>

      {user?.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid gray",
            padding: 10,
            marginBottom: 10,
          }}
        >
          <p>ID: {item.id}</p>
          <p>Name: {item.name}</p>
          <p>Mobile: {item.mobile}</p>
        </div>
      ))}
    </div>
  );
};

// 3. City List
const CityList = () => {
  return (
    <div>
      <h3>City List</h3>

      <ul>
        {cities?.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
    </div>
  );
};

// 4. ID List
const IdList = () => {
  return (
    <div>
      <h3>ID List</h3>

      <ul>
        {ids?.map((id) => (
          <li key={id}>{id}</li>
        ))}
      </ul>
    </div>
  );
};

// Main Component
const ListRendering = () => {
  return (
    <div>
      <h2>React List Rendering</h2>

      <DummyUsers />
      <hr />

      <UserList />
      <hr />

      <CityList />
      <hr />

      <IdList />
    </div>
  );
};

export default ListRendering;
