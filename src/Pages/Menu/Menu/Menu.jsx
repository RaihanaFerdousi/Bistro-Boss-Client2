import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"our menu"} subTitle={"Would you like to try a dish?"}/>
      <SectionTitle
        heading="TODAY'S OFFER"
        subHeading="Don't miss"
      ></SectionTitle>
      <MenuCategory items={offered}/>
      <MenuCategory items={desserts} title={"Desserts"} coverImg={dessertImg} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/>
      <MenuCategory items={pizza} title={"PIZZA"} coverImg={pizzaImg} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/>
      <MenuCategory items={salads} title={"SALADS"} coverImg={saladImg} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/>
      <MenuCategory items={soups} title={"SOUPS"} coverImg={soupImg} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/>
    </div>
  );
};

export default Menu;
