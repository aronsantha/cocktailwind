interface CocktailCardProps {
  cocktail: Cocktail;
}

interface Cocktail {
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

function CocktailCard(props: CocktailCardProps) {
  return (
    <div className="relative flex h-[200px] w-[200px] grow-0 flex-col items-start justify-end gap-2  overflow-clip rounded-lg !bg-cover shadow-md">
      <img
        src={props.cocktail.strDrinkThumb}
        alt={props.cocktail.strDrink}
        className="absolute left-0 top-0"
      />

      <div className=" flex min-h-12 w-full items-center bg-white/80 px-4 py-2 font-merriweather text-xs font-semibold text-amber-950 backdrop-blur-sm">
        {props.cocktail.strDrink}
      </div>
    </div>
  );
}

export default CocktailCard;
