import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Loader, { Props } from "./index";

export default {
  title: "Storybook/Loader",
  component: Loader,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {};
