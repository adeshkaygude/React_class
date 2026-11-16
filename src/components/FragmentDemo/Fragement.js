import React, { Fragment } from "react";

const Desclist = ({ id, title, price }) => {
  return (
    <Fragment>
      <dt style={{ fontWeight: "bold" }}>{title}</dt>
      <dd>{price}</dd>
    </Fragment>
  );
};

const Catalog = () => {
  const products = [
    {
      id: 1,
      title: "Product1",
      price: 100,
    },
    {
      id: 2,
      title: "Product2",
      price: 200,
    },
    {
      id: 3,
      title: "Product3",
      price: 300,
    },
    {
      id: 1,
      title: "Product1",
      price: 400,
    },
    {
      id: 1,
      title: "Product1",
      price: 500,
    },
  ];
  return (
    <>
      <h3>Product List</h3>
      <dl>
        {products?.map((prod) => (
          <DescItem key={prod} {...prod} />
        ))}
      </dl>
    </>
  );
};


const ListItems = ({items})=>{
    items?.
}









const CityList =()=>{
    const Cities = ["pune","mumbai","Nagpur","nashik","Benglure"]
}
