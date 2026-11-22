export type Recipe = {
  slug: string;
  name: string;
  description: string;
  image: string;
  category: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  totalTimeIso: string;
  servings: number;
  equipment: string[];
  ingredients: {
    name: string;
    amount: number;
    unit: string;
  }[];
  notes: string[];
  instructions: string[];
  instructionVideos: {
    instructionNumber: number;
    title: string;
    url: string;
  }[];
  instructionImages: {
    instructionNumber: number;
    src: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
  }[];
};

export const recipes: Recipe[] = [
  {
    slug: "three-day-slow-ferment-pizza",
    name: "Three-day slow-ferment thin-crust pizza",
    description:
      "Thin-crust, 12-inch pizzas with a relaxed three-day fridge ferment, a crisp base, and a light, airy edge.",
    image: "/images/recipes/pizza-finished.jpg",
    category: "Frankly, the best pizza you've ever eaten.",
    prepTimeMinutes: 45,
    cookTimeMinutes: 6,
    totalTimeIso: "P3D",
    servings: 4,
    equipment: [
      "Large mixing bowl",
      "Wooden spoon",
      "Kitchen scales",
      "Dough scraper or plastic dough cutter",
      "Clean worktop or silicone mat",
      "Airtight containers",
      "Pizza peel",
      "Pizza steel",
    ],
    ingredients: [
      { name: "All-purpose flour", amount: 440, unit: "g" },
      { name: "00 pizza flour", amount: 200, unit: "g" },
      { name: "Cold water", amount: 400, unit: "g" },
      { name: "Active dry yeast", amount: 2.5, unit: "g" },
      { name: "Salt", amount: 15, unit: "g" },
      { name: "Sugar or honey", amount: 12, unit: "g" },
      {
        name: "Extra-virgin olive oil (Greek preferred; Spanish is also good)",
        amount: 20,
        unit: "g",
      },
    ],
    notes: [
      "Experiment with other flours or different blends; the dough may feel a little different, so let its texture guide you. A good starting point is to see if you prefer just using strong bread flour, rather than an all-purpose and 00 blend.",
      "There’s no need to fret over grams. I don't measure precisely, which gives a delicious variation each time I make these. It's a forgiving dough.",
      "Use whichever tomato sauce you enjoy. A good-value pasta or bolognese sauce from a jar is an easy shortcut; or make your own if that’s the part you enjoy.",
      "Treat the cheese blend as a starting point, not a rule. Try other cheeses and amounts, but remember that too much can overwhelm the dough and sauce or make the pizza harder to bake through - if it's wet in the middle, you put too much stuff on it.",
    ],
    instructionVideos: [
      {
        instructionNumber: 4,
        title: "Watch: How to knead bread dough — King Arthur Baking",
        url: "https://www.youtube.com/watch?v=BJiucv88flM",
      },
      {
        instructionNumber: 6,
        title: "Watch: How to Ball Dough — Gozney",
        url: "https://www.youtube.com/watch?v=Vo5OW8Xkah4",
      },
    ],
    instructionImages: [
      {
        instructionNumber: 15,
        src: "/images/recipes/pizza-on-peel-web.jpg",
        alt: "Topped thin-crust pizza resting on a semolina-dusted pizza peel, ready for the oven",
        caption: "Check that the topped pizza still slides freely on the peel before baking.",
        width: 1500,
        height: 1125,
      },
      {
        instructionNumber: 17,
        src: "/images/recipes/pizza-crust.jpeg",
        alt: "A hand lifting a slice of pizza to show the crisp, airy crust",
        caption: "A crisp, airy crust is a sign that you nailed it.",
        width: 1500,
        height: 1000,
      },
    ],
    instructions: [
      "Start by putting your mixing bowl on the kitchen scales and resetting the display to zero. Pour in the cold water, reset the display, then weigh in the yeast. The water should feel cold, never warm.",
      "Give the water and yeast a quick mix. Reset the scales to zero, add the two flours one at a time (resetting between them), then reset once more and add the olive oil. Stir with a wooden spoon until you can’t see any dry flour. It’ll look rough and flaky at this point; that’s exactly right.",
      "Reset the scales and add the sugar or honey, then reset once more and add the salt. Give it a quick mix for a minute or two then tip everything onto a lightly floured worktop or silicone mat. Now wash and dry the mixing bowl; we'll be using it again shortly.",
      "Time to knead. Work the dough for about 10 minutes. It might be up to 15 minutes if you suck at kneading. It’ll be sticky to begin with, so use your dough scraper to lift it from the surface whenever it clings. Push it away from you, fold it back, then turn it 90 degrees in the same direction and repeat. Keep the original top facing up throughout; don’t flip it. You’re done when the dough feels smooth and is less sticky.",
      "Give the clean bowl a very light coating of olive oil. Fold the edges of the dough underneath to make a rough ball and pop it back into the bowl, original top still facing up. Rub a little oil from the bowl over the dough so it won’t stick as it expands. Cover it and leave it at room temperature for a few hours, until it has grown by about 50–100%.",
      "Once it’s risen, divide the dough into equal portions. Take one portion at a time: fold it over itself, turn it 90 degrees, and repeat three or four times. Stop when it starts to resist, before the surface tears. On the last fold, tuck the joined edges underneath and pinch the seam closed. Roll it gently between your hands into a ball, keeping track of which side is the top.",
      "Lightly oil the airtight containers and settle one dough ball into each, top side still facing up. Seal the containers and put them in the fridge. You can bake the dough from day 2 through day 5, though day 3 is usually just right.",
      "When pizza night arrives, give the dough time to lose its chill. On day 2, take it out at least 3 hours before baking; on day 3, allow 2–3 hours; on days 4–5, about 2 hours should do it. Need to save some for later? Freeze the portions on day 3. The day before you want them, move them to the fridge to thaw, then leave them at room temperature for 2–3 hours before baking.",
      "Get the oven preheating a good 30-45mins before you want to eat. The pizza steel on the middle oven rack will hopefully achieve 280°C or so.",
      "Dust your pizza peel with semolina so the dough can slide. Lightly flour the top of one dough ball, then turn it out onto the peel with the side that was against the container now facing up. Press out the centre with your fingers, leaving a rim about 1 cm wide. For a puffier edge, nudge some air from the middle towards the rim; for a less airy crust, simply pat the middle flatter.",
      "Stretch the dough gently until it’s about 12 inches across. You can lift it over your knuckles and rotate it, letting gravity do some of the work. Keep your hands off the rim and take your time; a small tear is harder to fix than a slightly wonky circle.",
      "Give the peel a gentle shake. The base should move freely before you add anything. If you find a sticky spot, carefully lift that part of the dough and tuck a little semolina underneath, then shake-test again.",
      "Spread about 2 tablespoons of sauce over the base. A smooth pasta or bolognese sauce from a jar works perfectly well. If you’d rather make your own, crush some peeled plum tomatoes and add herbs, finely chopped onion, olive oil, and garlic.",
      "Cheese goes on first, then the toppings. Try roughly 60% low-moisture mozzarella and 40% provolone as a starting point. Go easy at first: too much cheese can cover up the dough and sauce, and may not cook through as nicely. Then add what you fancy: classic margherita, chicken with red jalapeño and onion, pepperoni with chilli oil, or minced beef or pork with herbs and diced onion are all good places to start.",
      "Before the oven, give the peel one last shake. If the pizza slides freely, you’re ready. Slide it onto the hot steel, and try to keep the oven door open for as little time as possible.",
      "Bake for about 6 minutes, keeping an eye on it towards the end because every oven has its own personality. While it cooks, go and wash all the shit you used/chuck stuff in the dishwasher etc.",
      "As soon as it comes out, grate over some pecorino or another nutty, salty cheese. Brush or drizzle olive oil over the crust, too; those last touches bring the whole thing to life. That's it. You did it, gold star. Tuck in.",
    ],
  },
];

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.slug === slug);
}