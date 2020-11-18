import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import MenuItem, { Props } from "./index";

export default {
  title: "Storybook/MenuItem",
  component: MenuItem,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<Props> = (args) => <MenuItem {...args} />;

export const Selected = Template.bind({});
Selected.args = {
  selected: true,
  label: "Default"
};

export const Unselected = Template.bind({});
Unselected.args = {
  selected: false,
  label: "Default"
};

export const Detail = Template.bind({});
Detail.args = {
  detail: true,
  label: "VOLTAR"
};
