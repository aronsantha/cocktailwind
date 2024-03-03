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
    "rgba(254, 190, 84, 0.4)", // "#FEBE54"
    "rgba(254, 166, 88, 0.4)", // "#FEA658"
    "rgba(220, 229, 148, 0.4)", // "#DCE594"
    "rgba(240, 224, 114, 0.4)", // "#F0E072"
    "rgba(235, 165, 168, 0.4)", // "#C0808F"
    "rgba(240, 194, 41, 0.4)", // "#F0C229"
  ];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * bgColors.length);
    return bgColors[randomIndex];
  };

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
            bgColor={getRandomColor()}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
