import recipeImage from "../assets/images/image-omelette.jpeg";
const RecipeCard = () => {
  return (
    <div className="recipe-card">
      <img src={recipeImage} alt="" className="recipe-img" />
      <div className="text-content">
        <section className="title-section">
          <h2 className="title text-preset-1">Simple Omelette Recipe</h2>
          <p className="subtitle text-preset-4">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </section>
        <section className="preparation-section">
          <p className="preparation-title text-preset-3">Preparation time</p>
          <ul className="preparation-frame text-preset-4">
            <li>
              <strong className="text-preset-4-bold">Total:</strong>{" "}
              Approximately 10 minutes
            </li>
            <li>
              <strong className="text-preset-4-bold">Preparation:</strong> 5
              minutes
            </li>
            <li>
              <strong className="text-preset-4-bold">Cooking:</strong> 5 minutes
            </li>
          </ul>
        </section>
        <section className="ingredients-section">
          <p className="ingredients-title text-preset-2">Ingredients</p>
          <ul className="ingredients-frame text-preset-4">
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </section>
        <hr className="line" />
        <section className="instructions-section">
          <p className="instructions-title text-preset-2">Instructions</p>
          <ol className="instructions-frame text-preset-4">
            <li>
              <strong className="text-preset-4-bold">Beat the eggs:</strong> In
              a bowl, beat the eggs with a pinch of salt and pepper until they
              are well mixed. You can add a tablespoon of water or milk for a
              fluffier texture.
            </li>
            <li>
              <strong className="text-preset-4-bold">Heat the pan:</strong>{" "}
              Place a non-stick frying pan over medium heat and add butter or
              oil.
            </li>
            <li>
              <strong className="text-preset-4-bold">Cook the omelette:</strong>{" "}
              Once the butter is melted and bubbling, pour in the eggs. Tilt the
              pan to ensure the eggs evenly coat the surface.
            </li>
            <li>
              <strong className="text-preset-4-bold">
                Add fillings (optional):
              </strong>{" "}
              When the eggs begin to set at the edges but are still slightly
              runny in the middle, sprinkle your chosen fillings over one half
              of the omelette.
            </li>
            <li>
              <strong className="text-preset-4-bold">Fold and serve:</strong> As
              the omelette continues to cook, carefully lift one edge and fold
              it over the fillings. Let it cook for another minute, then slide
              it onto a plate.
            </li>
            <li>
              <strong className="text-preset-4-bold">Enjoy:</strong> Serve hot,
              with additional salt and pepper if needed.
            </li>
          </ol>
        </section>
        <hr className="line" />
        <section className="nutrition-section">
          <p className="nutrition-title text-preset-2">Nutrition</p>
          <p className="nutrition-subtitle text-preset-4">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table className="nutrition-table">
            <tr>
              <td className="nutrition-label text-preset-4">Calories</td>
              <td className="nutrition-value text-preset-4-bold">277kcal</td>
            </tr>

            <tr>
              <td className="nutrition-label text-preset-4">Carbs</td>
              <td className="nutrition-value text-preset-4-bold">0g</td>
            </tr>

            <tr>
              <td className="nutrition-label text-preset-4">Protein</td>
              <td className="nutrition-value text-preset-4-bold">20g</td>
            </tr>

            <tr>
              <td className="nutrition-label text-preset-4">Fat</td>
              <td className="nutrition-value text-preset-4-bold">22g</td>
            </tr>
          </table>
        </section>
      </div>
    </div>
  );
};

export default RecipeCard;
