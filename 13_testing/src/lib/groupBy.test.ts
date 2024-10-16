import { expect, test, describe } from "vitest";
import { groupBy } from "./groupBy";

const onlyAdlerList = [
  {
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
];

const expectation = [
  {
    foodSource: "Fische",
    birds: [
      {
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
    ],
  },
  {
    foodSource: "Kleine Säugetiere",
    birds: [
      {
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
    ],
  },
  {
    foodSource: "Vögel",
    birds: [
      {
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
    ],
  },
];

describe("Generates right shape of output", () => {
  test("grouping [adler] by foodSource produces correct output", () => {
    // expect(/* ergebnis der sache die wir testen wollen*/).toEqual(/* gewuenschtes Ergebnis */)
    const result = groupBy(onlyAdlerList, "foodsources");
    expect(result).toEqual(expectation);
  });
});
