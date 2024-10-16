import type { Bird } from "../data/birds";

// const beispielErgebnis = [
//     {
//         foodSource: "Nuesse",
//         voegel: ["Specht", "Adler", "Pinguin"]
//     }
//     {
//         foodSource: "Nuesse",
//         voegel: ["Specht", "Adler", "Pinguin"]
//     },

// ]

type GroupByResult = {
  foodSource: string;
  birds: Bird[];
}[];

export const groupBy = (birds: Bird[], criterion: string): GroupByResult => {
  // hier die dinge nach denen gruppiert werden soll,
  // bei criterion = "foodsources" z.B. ["Fische", "Nüsse", "Menschen"]
  const groupingItems = birds.map((bird) => bird["foodsources"]).flat();
  const uniqueGroupingItems = [...new Set(groupingItems)];
  // auch auf objektwerte koennen wir mit der vom array-access bekannten "[]" syntax zugreifen
  // hier erstmal gehardcoded mit "foodsources" - perspektivisch koennen wir aber auch eine variable verwenden
  const result = uniqueGroupingItems.map((item) => ({
    foodSource: item,
    // unter dem key birds sollen alle voegel stehen die diese konkrete nahrungsquelle konsumieren
    birds: birds.filter((bird) => bird.foodsources.includes(item)),
  }));

  return result;
};
