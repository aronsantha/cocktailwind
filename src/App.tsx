import "./App.css";
import { HomePage } from "./components/HomePage";
import { CustomCocktailsPage } from "./components/CustomCocktailsPage";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";

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
  return (
    <BrowserRouter>
      <div className="flex h-screen flex-col">
        <div className="top-0 z-10 flex h-16 w-full shrink-0 items-center justify-center gap-6 bg-white px-12 shadow-sm *:rounded-lg *:px-5 *:py-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              [
                isActive ? "bg-[#262626] text-white" : "",
                "transition-all hover:bg-[#262626] hover:text-white",
              ].join(" ")
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/custom"
            className={({ isActive }) =>
              [
                isActive ? "bg-[#262626] text-white" : "",
                "transition-all hover:bg-[#262626] hover:text-white",
              ].join(" ")
            }
          >
            Custom
          </NavLink>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="custom" element={<CustomCocktailsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
