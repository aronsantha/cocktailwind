import "./App.css";
import CocktailCard from "./CocktailCard";
import { useEffect, useState } from "react";

interface Cocktail {
  idDrink: number;
  strDrink: string;
  strDrinkThumb: string;
  // strDrinkAlternate: string;
  // strTags: string[];
  // strVideo: string;
  // strCategory: string;
  // strIBA: string;
  // strAlcoholic: string;
  // strGlass: string;
  // strInstructions: string;
  // strInstructionsES: string;
  // strInstructionsDE: string;
  // strInstructionsFR: string;
  // strInstructionsIT: string;
  // strIngredient1: string;
  // strIngredient2: string;
  // strIngredient3: string;
  // strIngredient4: string;
  // strIngredient5: string;
  // strIngredient6: string;
  // strIngredient7: string;
  // strIngredient8: string;
  // strIngredient9: string;
  // strIngredient10: string;
  // strIngredient11: string;
  // strIngredient12: string;
  // strIngredient13: string;
  // strIngredient14: string;
  // strIngredient15: string;
  // strMeasure1: string;
  // strMeasure2: string;
  // strMeasure3: string;
  // strMeasure4: string;
  // strMeasure5: string;
  // strMeasure6: string;
  // strMeasure7: string;
  // strMeasure8: string;
  // strMeasure9: string;
  // strMeasure10: string;
  // strMeasure11: string;
  // strMeasure12: string;
  // strMeasure13: string;
  // strMeasure14: string;
  // strMeasure15: string;
  // strImageSource: string;
  // strImageAttribution: string;
  // strCreativeCommonsConfirmed: string;
  // dateModified: string;
}

function App() {
  const [cocktails, setCocktails] = useState<Cocktail[]>();
  const bgColors = [
    "#FEBE54",
    "#FEA658",
    "#DCE594",
    "#F0E072",
    "#C0808F",
    "#F0C229",
  ];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * bgColors.length);
    return bgColors[randomIndex];
  };

  function addTransparencyToHexColor(
    hexColor: string,
    opacityPercent: number,
  ): string {
    if (hexColor.length !== 7 || hexColor[0] !== "#") {
      throw new Error("Invalid hex color format");
    }

    return `${hexColor}${opacityPercent}`;
  }

  const fetchCocktails = async () => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`,
    );
    const fetchedCocktails = await response.json();
    console.log(fetchedCocktails.drinks);
    setCocktails(fetchedCocktails.drinks);
  };

  useEffect(() => {
    fetchCocktails();
  }, []);

  return (
    <div className="flex flex-col gap-20 px-8 py-12">
      <h1 className="font-pacifico text-3xl font-bold">Cocktails</h1>
      <div className="flex flex-wrap justify-between gap-x-6 gap-y-8">
        {cocktails?.map((cocktail) => (
          <CocktailCard
            key={cocktail.idDrink}
            cocktail={cocktail}
            bgColor={addTransparencyToHexColor(getRandomColor(), 40)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
