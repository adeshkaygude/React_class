import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

const Product = () => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      products: [{ name: "", price: 0 }],
    },
  });

  const {
    fields: products,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "products",
  });

  const handleUser = (data) => {
    console.log("Products:", data);
  };

  return (
    <section
      style={{
        width: 500,
        border: "2px solid #000",
        padding: 10,
        margin: "auto",
      }}
    >
      <h3>Product Form</h3>

      <form onSubmit={handleSubmit(handleUser)}>
        <h4>Products</h4>

        {products.map((product, i) => (
          <div key={product.id}>
            <input
              type="text"
              placeholder="Product Name"
              {...register(`products.${i}.name`)}
            />

            <input
              type="number"
              placeholder="Product Price"
              {...register(`products.${i}.price`, {
                valueAsNumber: true,
              })}
            />

            {products.length > 1 && (
              <button type="button" onClick={() => remove(i)}>
                X
              </button>
            )}
            <br />
            <br />
          </div>
        ))}

        {products.length < 10 && (
          <button type="button" onClick={() => append({ name: "", price: 0 })}>
            + Add Product
          </button>
        )}

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Product;
