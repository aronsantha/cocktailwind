interface CocktailCardProps {
  cocktail: Cocktail;
  bgColor: string;
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
    <div
      className="flex h-[80px] max-w-[250px] flex-grow gap-2 overflow-clip rounded-md shadow-lg shadow-amber-900/20"
      style={{ backgroundColor: props.bgColor }}
    >
      <div className="ml-3 mr-8 flex flex-grow items-center font-merriweather text-sm text-amber-950">
        <h1>{props.cocktail.strDrink}</h1>
      </div>

      <img
        src={props.cocktail.strDrinkThumb}
        alt={props.cocktail.strDrink}
        className="aspect-auto h-full"
      />
    </div>
  );
}

export default CocktailCard;
