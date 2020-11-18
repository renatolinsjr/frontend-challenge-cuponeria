import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import ProductCard, { Props } from "./index";

export default {
  title: "Storybook/ProductCard",
  component: ProductCard,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <ProductCard {...args} />;

export const Discover = Template.bind({});
Discover.args = {
  detail: false,
  product: {
    id: "",
    title: "Mens Casual Slim Fit",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    price: "15.99",
  },
};

export const Detail = Template.bind({});
Detail.args = {
  detail: true,
  product: {
    id: "",
    title: "Mens Casual Slim Fit",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    price: "15.99",
  },
};
