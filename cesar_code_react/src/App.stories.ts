import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";

import App from "./App";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Cesar",
  component: App,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  //  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  //  argTypes: {
  //    backgroundColor: { control: 'color' },
  //  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  //  args: { onClick: fn() },
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
  play: async (context) => {
    const canvas = within(context.canvasElement);
    const msgInput = canvas.getByRole("textbox", { name: "Nachricht" });
    await userEvent.click(msgInput);
    await userEvent.keyboard("hallo");
    const shiftInput = canvas.getByRole("spinbutton", { name: "Shift" });
    await userEvent.click(shiftInput);
    await userEvent.keyboard("5");

    const outputEl = canvas.getByTestId("output");
    expect(outputEl).toHaveTextContent("MFQQT");
  },
};
