import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import FeaturedCard, { Props } from "./index";

export default {
  title: "Storybook/FeaturedCard",
  component: FeaturedCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<Props> = (args) => <FeaturedCard {...args} />;

export const Selected = Template.bind({});
Selected.args = {
  // selected: true,
  // label: "SHOP",
};

// export const Unselected = Template.bind({});
// Unselected.args = {
//   selected: false,
//   // label: "SHOP",
// };