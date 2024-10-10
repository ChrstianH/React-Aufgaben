import type { Meta, StoryObj } from "@storybook/react";
import SingleBeer from "./SingleBeer";
import { expect, userEvent, within } from "@storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Beer/SingleBeer",
  component: SingleBeer,
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
} satisfies Meta<typeof SingleBeer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Buzz: Story = {
  args: {
    beer: {
      image_url:
        "https://education-team-2020.s3.eu-west-1.amazonaws.com/api_assets/ironbeers/buzz.webp",
      _id: "5fb6a86265b9c209606e10e2",
      name: "Buzz",
      tagline: "A Real Bitter Experience.",
      first_brewed: "09/2007",
      description:
        "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
      attenuation_level: 75,
      contributed_by: "Sam Mason <samjbmason>",
    },
  },
};

export const TrashyBlonde: Story = {
  args: {
    beer: {
      image_url:
        "https://education-team-2020.s3.eu-west-1.amazonaws.com/api_assets/ironbeers/blonde.webp",
      _id: "670629f7dab45c0002593a57",
      name: "Trashy Blonde",
      tagline: "You Know You Shouldn't",
      first_brewed: "04/2008",
      description:
        "A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.",
      attenuation_level: 76,
      contributed_by: "Sam Mason <samjbmason>",
    },
  },
  play: async ({ canvasElement }) => {
    // mit "within" erhalten wir zugriff auf das sog. canvas in dem Storybook die
    // Komponente rendert. Es erfüllt hier eine ähnliche Rolle wie sonst das document
    const canvas = within(canvasElement);
    // hier suchen wir ein Element auf dem Canvas - konkret nach einem Button mit dem Text (bzw. name) "Show Emoji"
    const button = canvas.getByRole("button", { name: "Details" });

    //! hier muesste eigentlich noch geprueft werden, ob der otter vor dem test fehlt

    // hier klicken wir den button
    await userEvent.click(button);

    // Hier suchen wir nach dem Otter Emoji, und erwarten dass jetzt sichtbar ist
    const desc = canvas.getByText(
      "A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist."
    );
    await expect(desc).toBeInTheDocument();

    // const loginButton = canvas.getByRole("button", { name: /Log in/i });
    // await expect(loginButton).toBeInTheDocument();
  },
};
