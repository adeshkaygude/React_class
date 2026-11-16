const ProfileCard = ({ avatar, name, age, gender, mobile, email }) => {
  return (
    <div
      style={{
        border: "1px solid #0008",
        padding: 10,
        width: 250,
      }}
    >
      <img
        style={{ width: "100%", height: 200,  }}
        src={avatar}
      />

      <h3>{name}</h3>
      <p>Gender: {gender}</p>
      <p>age:{age}</p>
      <p>Mobile:{mobile}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default ProfileCard;
