import type { Preview } from "@storybook/react";

// hier wird das projekt-css so importiert dass es in allen stories verfuegbar ist.
import '../src/index.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
