import React from "react";
import ProfileCard from "../ProfileCard";

const ProbsDemo = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
        alignItems: "flex-start",
      }}
    >
      <ProfileCard
        avatar="https://img.magnific.com/premium-vector/professional-male-avatar-profile-picture-employee-work_1322206-66523.jpg?semt=ais_hybrid&w=740&q=80"
        name="TopperSkills"
        mobile="23456786754"
        age={20}
        email="Abc@gmail.com"
        gender="Male"
      />

      <ProfileCard
        avatar="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"
        name="Omkar"
        mobile="23456786754"
        age={20}
        email="Abc@gmail.com"
        gender="Male"
      />

      <ProfileCard
        avatar="https://t4.ftcdn.net/jpg/08/23/95/89/360_F_823958944_1c9covIC7Tl7eyJtWoTiXc0L4vP6f43q.jpg"
        name="Aadesh"
        mobile="23456786754"
        age={20}
        email="Abc@gmail.com"
        gender="Female"
      />

      <ProfileCard
        avatar="https://t4.ftcdn.net/jpg/09/61/69/75/360_F_961697523_EFd1m8P4tdcwB0TYvlQAagqKR1xHSuwk.jpg"
        name="AAAAAA"
        mobile="23456786754"
        age={20}
        email="Abc@gmail.com"
        gender="Female"
      />
    </section>
  );
};

export default ProbsDemo;
