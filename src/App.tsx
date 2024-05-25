import "./App.css";
import { CocktailCard } from "./CocktailCard";
import { XCircleIcon } from "@heroicons/react/24/solid";

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

export const App = () => {
  const [cocktails, setCocktails] = useState<Cocktail[]>();
  const [selectedCocktailId, setSelectedCocktailId] = useState<number | null>();
  const [selectedCocktail, setSelectedCocktail] = useState<Cocktail | null>(
    null,
  );

  const handleDataFromChild = () => {
    if (!selectedCocktailId) {
      return;
    }
    fetchCocktail(selectedCocktailId).then((response) =>
      setSelectedCocktail(response),
    );
  };

  useEffect(() => {
    handleDataFromChild();
  }, [selectedCocktailId]);

  const closeModal = () => {
    setSelectedCocktail(null);
    setSelectedCocktailId(null);
  };

  const fetchCocktails = async () => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`,
    );
    const fetchedCocktails = await response.json();
    setCocktails(fetchedCocktails.drinks);
  };

  const fetchCocktail = async (cocktailId: number) => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`,
    );
    const fetchedCocktail = await response.json();
    return fetchedCocktail.drinks[0] as Cocktail;
  };

  useEffect(() => {
    fetchCocktails();
  }, []);

  return (
    <div className="mx-auto flex w-screen max-w-screen-2xl flex-col items-center  p-20">
      {selectedCocktail && (
        <section>
          <div
            onClick={closeModal}
            className="fixed inset-0 z-50 cursor-pointer bg-black/50 backdrop-blur-sm"
          ></div>

          <div className="pointer-events-none fixed inset-0 z-[999] flex items-center justify-center">
            <div className="pointer-events-auto mx-12 flex w-[800px] max-w-full flex-col overflow-clip rounded-lg bg-white">
              <div className="flex flex-row">
                <img
                  src={selectedCocktail.strDrinkThumb}
                  alt={selectedCocktail.strDrink}
                  className="h-auto w-[300px] "
                />
                <div className=" flex w-full flex-col gap-4 pb-12 pl-12 pr-6 pt-5">
                  <button onClick={closeModal} className="mb-2 ml-auto">
                    <XCircleIcon className="h-[35px] text-black opacity-20 hover:opacity-100" />
                  </button>
                  <h1 className="font-pacifico text-2xl font-bold">
                    {selectedCocktail.strDrink}
                  </h1>
                  <div>
                    <div className="mb-2 font-medium">Glass</div>
                    <div>{selectedCocktail.strGlass}</div>
                  </div>
                  <div>
                    <div className="mb-2 font-medium">Ingredients</div>
                    <ul className="list-disc  pl-[20px]">
                      <li>{selectedCocktail.strIngredient1}</li>
                      <li>{selectedCocktail.strIngredient2}</li>
                      <li>{selectedCocktail.strIngredient3}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <h1 className="mb-24 font-pacifico text-4xl font-bold">Cocktails</h1>
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-2">
        {cocktails?.map((cocktail) => (
          <div
            key={cocktail.idDrink}
            onClick={() => setSelectedCocktailId(cocktail.idDrink)}
          >
            <CocktailCard cocktail={cocktail} />
          </div>
        ))}
      </div>
    </div>
  );
};
