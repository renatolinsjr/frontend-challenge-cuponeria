// .storybook/preview.js
import { addDecorator } from '@storybook/react';
import { MemoryRouter } from "react-router";
import { themes } from "@storybook/theming";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    theme: themes.dark,
  },
};

addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);
