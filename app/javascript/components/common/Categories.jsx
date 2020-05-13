import React, { useEffect, useState } from "react";
import CategoriesService from "../../services/categories";
import styled from "styled-components";

const CategoryImg = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  width: 400px;
  height: 350px;
  align-self: center;
  justify-self: center;
`;

const GridCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  width: 100%;
`;

export default function Categories(props) {
  const [categories, setCategories] = useState([]);

  async function fetchCategories() {
    const response = await CategoriesService.index();
    setCategories(response.data["categories"]);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  const categories_list = categories.map((category, key) => {
    return (
      <CategoryImg
        image={category.image}
        key={key}
        onClick={() => props.fetchCategorySearch(category.id)}
      />
    );
  });

  return (
    <>
      {categories_list ? (
        <GridCategories>{categories_list}</GridCategories>
      ) : (
        <h1>Carregando....</h1>
      )}
    </>
  );
}
