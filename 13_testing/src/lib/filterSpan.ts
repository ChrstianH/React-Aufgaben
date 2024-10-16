import type { Bird } from "../data/birds";

export const filterSpan = (birds: Bird[], span: number): Bird[] => {
  const filteredBirds = birds.filter((bird) => bird.wingspan_max < span);
  return filteredBirds;
};
