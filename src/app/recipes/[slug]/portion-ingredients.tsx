"use client";

import { useState } from "react";

type PortionIngredient = {
  name: string;
  amount: number;
  unit: string;
};

type PortionIngredientsProps = {
  ingredients: PortionIngredient[];
  basePortions: number;
};

function formatAmount(amount: number): string {
  return new Intl.NumberFormat("en-GB", {
    maximumFractionDigits: 2,
  }).format(amount);
}

export default function PortionIngredients({
  ingredients,
  basePortions,
}: PortionIngredientsProps) {
  const [portions, setPortions] = useState(basePortions);
  const multiplier = portions / basePortions;

  return (
    <section className="portion-ingredients" aria-labelledby="ingredients-heading">
      <div className="portion-heading">
        <div>
          <p className="eyebrow">Scale the dough</p>
          <h2 id="ingredients-heading">Ingredients</h2>
        </div>
        <output className="portion-count" htmlFor="portion-slider" aria-live="polite">
          {portions} {portions === 1 ? "pizza" : "pizzas"}
        </output>
      </div>
      <label className="portion-slider-label" htmlFor="portion-slider">
        Number of 12-inch pizzas
      </label>
      <input
        className="portion-slider"
        id="portion-slider"
        type="range"
        min="1"
        max="8"
        step="1"
        value={portions}
        onChange={(event) => setPortions(Number(event.currentTarget.value))}
      />
      <div className="portion-range-labels" aria-hidden="true">
        <span>1</span><span>8</span>
      </div>
      <ul className="ingredient-list">
        {ingredients.map((ingredient) => (
          <li key={ingredient.name}>
            <span>{ingredient.name}</span>
            <strong>{formatAmount(ingredient.amount * multiplier)} {ingredient.unit}</strong>
          </li>
        ))}
      </ul>
    </section>
  );
}