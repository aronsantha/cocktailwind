import "./App.css";
import CocktailCard from "./CocktailCard";
import { useEffect, useState } from "react";

export interface Cocktail {
  idDrink: number;
  strDrink: string;
  strDrinkThumb: string;
  strDrinkAlternate?: string;
  strTags?: string[];
  strVideo?: string;
  strCategory?: string;
  strIBA?: string;
  strAlcoholic?: string;
  strGlass?: string;
  strInstructions?: string;
  strInstructionsES?: string;
  strInstructionsDE?: string;
  strInstructionsFR?: string;
  strInstructionsIT?: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strIngredient8?: string;
  strIngredient9?: string;
  strIngredient10?: string;
  strIngredient11?: string;
  strIngredient12?: string;
  strIngredient13?: string;
  strIngredient14?: string;
  strIngredient15?: string;
  strMeasure1?: string;
  strMeasure2?: string;
  strMeasure3?: string;
  strMeasure4?: string;
  strMeasure5?: string;
  strMeasure6?: string;
  strMeasure7?: string;
  strMeasure8?: string;
  strMeasure9?: string;
  strMeasure10?: string;
  strMeasure11?: string;
  strMeasure12?: string;
  strMeasure13?: string;
  strMeasure14?: string;
  strMeasure15?: string;
  strImageSource?: string;
  strImageAttribution?: string;
  strCreativeCommonsConfirmed?: string;
  dateModified?: string;
}

function App() {
  const [cocktails, setCocktails] = useState<Cocktail[]>();
  const [selectedCocktail, setSelectedCocktail] = useState<Cocktail | null>(
    null,
  );

  const handleDataFromChild = (cocktailId: number) => {
    const selectedCocktail = cocktails?.find(
      (cocktail) => cocktail.idDrink === cocktailId,
    );
    setSelectedCocktail(selectedCocktail || null);
  };

  const closeModal = () => {
    setSelectedCocktail(null);
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
    <div className="flex w-screen flex-col items-center gap-24 p-20">
      {selectedCocktail && (
        <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="flex h-[200px] w-[200px] flex-col bg-white">
            {selectedCocktail.strDrink}
            <button onClick={closeModal} className="bg-red-200">
              Close
            </button>
          </div>
        </div>
      )}

      <h1 className="font-pacifico text-4xl font-bold">Cocktails</h1>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-8">
        {cocktails?.map((cocktail) => (
          <CocktailCard
            key={cocktail.idDrink}
            cocktail={cocktail}
            sendDataToParent={handleDataFromChild} // TODO: DELETE THIS LINE AND INSTEAD onClick=handleDataFromChild(cocktail.idDrink)
          />
        ))}
      </div>
    </div>
  );
}

export default App;
