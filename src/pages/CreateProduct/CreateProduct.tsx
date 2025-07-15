import { Formik, Form, Field } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import type { Category } from "../../types";

interface ProductCreateDto {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
}

const AddProductSchema = Yup.object().shape({
  title: Yup.string().min(3, "Too short!").required("Required"),
  price: Yup.number().positive("Must be positive").required("Required"),
  description: Yup.string().min(3, "Too short!").required("Required"),
  category: Yup.number().positive("Must be positive").required("Required"),
  image: Yup.string().min(3, "Too short!").required("Required"),
});

const CreateProduct = () => {
  const [message, setMessage] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);

  async function fetchCategories() {
    const res = await fetch("https://api.escuelajs.co/api/v1/categories");
    const arr = await res.json();
    setCategories(arr);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchAddProduct(newProduct: ProductCreateDto) {
    const res = await fetch("https://api.escuelajs.co/api/v1/products", {
      method: "POST",
      headers: { "Content-Type": "Application/JSON" },
      body: JSON.stringify(newProduct),
    });

    if (res.status === 201) {
      setMessage("Successfully added object");
    }
  }

  return (
    <div>
      <h1>Add product</h1>
      {message ? <div>{message}</div> : null}
      <Formik
        initialValues={{
          title: "",
          price: "0",
          description: "",
          category: "1",
          image: "",
        }}
        validationSchema={AddProductSchema}
        onSubmit={(values) => {
          console.log(values);

          const { title, price, description, category, image } = values;
          const newProduct: ProductCreateDto = {
            title,
            price: Number(price),
            description,
            categoryId: Number(category),
            images: [image],
          };
          fetchAddProduct(newProduct);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label>Title:</label>
            <Field name="title" />
            {errors.title && touched.title ? <div>{errors.title}</div> : null}
            <label>Price:</label>
            <Field name="price" />
            {errors.price && touched.price ? <div>{errors.price}</div> : null}
            <label>Description:</label>
            <Field name="description" />
            {errors.description && touched.description ? (
              <div>{errors.description}</div>
            ) : null}

            <Field as="select" name="category">
              {/* <option value="1">Electronics</option> */}
              {/* <option value="2">Clothes</option> */}
              {categories.map((c) => (
                <option value={c.id}>{c.name}</option>
              ))}
            </Field>
            {errors.category && touched.category ? (
              <div>{errors.category}</div>
            ) : null}

            <label>Image:</label>
            <Field name="image" />
            {errors.image && touched.image ? <div>{errors.image}</div> : null}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default CreateProduct;
