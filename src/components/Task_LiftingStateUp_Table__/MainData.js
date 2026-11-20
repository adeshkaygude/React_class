import React, { useState } from "react";
import { ContextDataParse } from "./ContextDataParse";
import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";

const MainData = () => {
  const [data, setdata] = useState();
  return (
    <div>
      <ContextDataParse.Provider value={data}>
        <FirstChild />
      </ContextDataParse.Provider>
      <SecondChild data={data} setdata={setdata} />
    </div>
  );
};

export default MainData;
