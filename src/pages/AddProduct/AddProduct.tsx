import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";

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
    .required("Image is required"),
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
    <div className="flex flex-col items-center justify-center mt-2">
      <h2 className="text-2xl font-bold text-orange-900">Add new product</h2>
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
          <Form className="bg-[#e8e4e4] border-none rounded-lg p-4 flex flex-col justify-start items-center text-center shadow-md gap-2 w-150 mx-auto my-5">
            <label className="text-[#552929] font-bold w-4/5">Title:</label>
            <Field
              name="title"
              className="w-full rounded border-none h-6 my-1 mx-auto text-center bg-white"
            />
            {errors.title && touched.title ? (
              <div className="text-red-600 font-bold">{errors.title}</div>
            ) : null}

            <label className="text-[#552929] font-bold w-4/5">Price:</label>
            <Field
              name="price"
              className="w-full rounded border-none h-6 my-1 mx-auto text-center bg-white"
            />
            {errors.price && touched.price ? (
              <div className="text-red-600 font-bold">{errors.price}</div>
            ) : null}

            <label className="text-[#552929] font-bold w-4/5">
              Description:
            </label>
            <Field
              name="description"
              className="w-full rounded border-none h-6 my-1 mx-auto text-center bg-white"
            />
            {errors.description && touched.description ? (
              <div className="text-red-600 font-bold">{errors.description}</div>
            ) : null}

            <label className="text-[#552929] font-bold w-4/5">Category:</label>
            <Field
              as="select"
              name="categoryId"
              className="w-full rounded border-none h-6 my-1 mx-auto text-center bg-white"
            >
              <option value="">Select category</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </Field>

            {errors.categoryId && touched.categoryId && (
              <div className="text-red-600 font-bold">{errors.categoryId}</div>
            )}

            <label className="text-[#552929] font-bold w-4/5">Image:</label>
            <Field
              name="image"
              className="w-full rounded border-none h-6 my-1 mx-auto text-center bg-white"
            />

            {errors.image && touched.image ? (
              <div className="text-red-600 font-bold">{errors.image}</div>
            ) : null}
            <button
              type="submit"
              className="w-36 h-12 rounded-lg bg-[#724545] text-white font-bold cursor-pointer shadow-md"
            >
              Add product
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
