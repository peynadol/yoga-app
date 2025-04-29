import { Category } from "../types";

export const getAllCategories = async (): Promise<Category[]> => {
  const response = await fetch(
    "https://yoga-api-nzy4.onrender.com/v1/categories"
  );
  const data: Category[] = await response.json();
  return data;
  // data.forEach((category) => {
  //   console.log(category.category_name);
  // });
};
