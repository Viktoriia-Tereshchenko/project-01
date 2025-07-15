import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import styles from "./AddProduct.module.css";

const AddProductSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Title is too short!")
    .max(50, "Title is too long!")
    .required("Title is required"),
  price: Yup.number()
    .positive("Price must be more than 0")
    .required("Price is required"),
  description: Yup.string()
    .min(5, "Description is too short!")
    .max(1000, "Description is too long!")
    .required("Description is required"),
  categoryId: Yup.number()
    .positive("Invalid category")
    .required("Category is required"),
  image: Yup.string()
    .min(10, "Image URL is too short!")
    .max(500, "Image URL is too long!")
    .required("Required"),
});

interface NewProduct {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
}

interface Category {
  id: number;
  name: string;
}

export const AddProduct = () => {
  const [message, setMessage] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);

  async function fetchCategories() {
    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/categories");
      const data = await res.json();
      setCategories(data);
    } catch (err) {
      console.error("Failed to load categories", err);
    }
  }
  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchAddProduct(newProduct: NewProduct) {
    const res = await fetch("https://api.escuelajs.co/api/v1/products", {
      method: "POST",
      headers: { "Content-Type": "Application/JSON" },
      body: JSON.stringify(newProduct),
    });

    if (res.ok) {
      setMessage("You successfully added a new product✔️");
    }
  }

  return (
    <div>
      <h2>Add new product</h2>
      {message ? <div>{message}</div> : null}
      <Formik
        initialValues={{
          title: "",
          price: 0,
          description: "",
          categoryId: "",
          image: "",
        }}
        validationSchema={AddProductSchema}
        onSubmit={(values) => {
          //console.log(values);

          const newProduct: NewProduct = {
            title: values.title,
            price: Number(values.price),
            description: values.description,
            categoryId: Number(values.categoryId),
            images: [values.image],
          };

          fetchAddProduct(newProduct);
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.container}>
            <label>
              Title:
              <Field name="title" className={styles.inp} />
              {errors.title && touched.title ? (
                <div className={styles.err}>{errors.title}</div>
              ) : null}
            </label>

            <label>
              Price:
              <Field name="price" className={styles.inp} />
              {errors.price && touched.price ? (
                <div className={styles.err}>{errors.price}</div>
              ) : null}
            </label>

            <label>
              Description:
              <Field name="description" className={styles.inp} />
              {errors.description && touched.description ? (
                <div className={styles.err}>{errors.description}</div>
              ) : null}
            </label>

            <label>
              Category:
              <Field as="select" name="categoryId" className={styles.inp}>
                <option value="">Select category</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </Field>
            </label>
            {errors.categoryId && touched.categoryId && (
              <div className={styles.err}>{errors.categoryId}</div>
            )}

            <label>
              Images:
              <Field name="images" className={styles.inp} />
            </label>
            {errors.images && touched.images ? (
              <div className={styles.err}>{errors.images}</div>
            ) : null}
            <button type="submit">Add product</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
