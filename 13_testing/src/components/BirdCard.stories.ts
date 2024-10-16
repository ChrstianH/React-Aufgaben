import type { Meta, StoryObj } from "@storybook/react";
import BirdCard from "./BirdCard";
import { expect, userEvent, within } from "@storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Birds/BirdCard",
  component: BirdCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof BirdCard>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Otter: Story = {
    // hier werden Props an die Komponente übergeben (args === props)
    args: {
    bird: {
      name: "Otter",
      description:
        "Der Otter ist ein Säugetier aus der Familie der Marder. Er ist perfekt an das Leben im Wasser angepasst mit seinem stromlinienförmigen Körper und den Schwimmhäuten zwischen den Zehen. Otter sind verspielt und intelligent. Sie leben sowohl in Süßwasser als auch in Küstengebieten. Ihre Ernährung besteht hauptsächlich aus Fisch, aber sie fressen auch Krebstiere und andere Wassertiere. Otter spielen eine wichtige Rolle im Ökosystem der Gewässer.",
      emoji: "🦦",
      wingspan_min: 0,
      wingspan_max: 0,
      weight_min: 5000,
      weight_max: 14000,
      foodsources: ["Fische", "Krebstiere", "Muscheln"],
      habitat: ["Europa", "Asien", "Nordamerika"],
      genus: "Lutra",
      species: "lutra",
    },
  },
  // h
  play: async ({ canvasElement }) => {
      // mit "within" erhalten wir zugriff auf das sog. canvas in dem Storybook die
      // Komponente rendert. Es erfüllt hier eine ähnliche Rolle wie sonst das document
      const canvas = within(canvasElement);
      // hier suchen wir ein Element auf dem Canvas - konkret nach einem Button mit dem Text (bzw. name) "Show Emoji"
      const button = canvas.getByRole('button', {name: "Show Emoji"})

      //! hier muesste eigentlich noch geprueft werden, ob der otter vor dem test fehlt
    
      // hier klicken wir den button
      await userEvent.click(button);

      // Hier suchen wir nach dem Otter Emoji, und erwarten dass jetzt sichtbar ist
      const emoji = canvas.getByText("🦦")
      await expect(emoji).toBeInTheDocument()
      
    // const loginButton = canvas.getByRole("button", { name: /Log in/i });
    // await expect(loginButton).toBeInTheDocument();
  },
};

export const Adler: Story = {
  args: {
    bird: {
      name: "Adler",
      description:
        "Adler sind große, mächtige Raubvögel, die in vielen Regionen der Welt vorkommen. Sie sind bekannt für ihre scharfen Sinne, besonders den Sehsinn, der es ihnen ermöglicht, Beute aus großer Entfernung zu erkennen. Diese Vögel haben starke Flügel und einen ausgeprägten Schnabel, der perfekt zum Fangen und Zerteilen von Beute geeignet ist. Adler sind oft Symbol für Freiheit und Stärke und spielen eine wichtige Rolle in verschiedenen Kulturen.",
      emoji: "🦅",
      wingspan_min: 180,
      wingspan_max: 250,
      weight_min: 3000,
      weight_max: 6000,
      foodsources: ["Fische", "Kleine Säugetiere", "Vögel"],
      habitat: ["Nordamerika", "Europa", "Asien"],
      genus: "Aquila",
      species: "chrysaetos",
    },
  },
};
