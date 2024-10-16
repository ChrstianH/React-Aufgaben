import { expect, test, describe } from "vitest";
import { filterSpan } from "./filterSpan";

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

describe("Filter birds by wing span", () => {
  test("Filter adler by maximal wing span of 300cm", () => {
    const result = filterSpan(onlyAdlerList, 300);
    expect(result).toEqual(expectation);
  });

  test("Filter adler by maximal wing span of 200cm", () => {
    const result = filterSpan(onlyAdlerList, 200);
    expect(result).toEqual(expectation);
  });
});
