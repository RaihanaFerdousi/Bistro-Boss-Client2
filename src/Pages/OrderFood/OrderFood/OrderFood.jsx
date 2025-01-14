import { useState } from "react";
import orderImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import OrderTab from "../OrderTab/OrderTab";
import useMenu from "../../../Hooks/useMenu";

const OrderFood = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bistro | Order Food</title>
      </Helmet>
      <Cover
        img={orderImg}
        title={"Order Food"}
        subTitle={"Would you like to try a dish?"}
      ></Cover>
      <Tabs
        className=" my-10"
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList className="flex gap-3 justify-center">
          <Tab className="inter border-b-2 border-transparent text-gray-500 focus:outline-none selected:!text-[#BB8506] selected:!border-[#BB8506]">
            Salad
          </Tab>
          <Tab className="inter border-b-2 border-transparent text-gray-500 focus:outline-none selected:!text-[#BB8506] selected:!border-[#BB8506]">
            Pizza
          </Tab>
          <Tab className="inter border-b-2 border-transparent text-gray-500 focus:outline-none selected:!text-[#BB8506] selected:!border-[#BB8506]">
            Soup
          </Tab>
          <Tab className="inter border-b-2 border-transparent text-gray-500 focus:outline-none selected:!text-[#BB8506] selected:!border-[#BB8506]">
            Desserts
          </Tab>
          <Tab className="inter border-b-2 border-transparent text-gray-500 focus:outline-none selected:!text-[#BB8506] selected:!border-[#BB8506]">
            Drinks
          </Tab>
        </TabList>
        <TabPanel className="mt-10">
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OrderFood;
