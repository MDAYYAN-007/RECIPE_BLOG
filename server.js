import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//1. GET a all recipes
app.get("/recipes",(req,res) => {
  res.json(recipes);
})

//2. GET a specific recipe
app.get("/recipes/:id", (req,res) => {
 const requestedId = parseInt(req.params.id);
 const foundRecipe = recipes.find((recipe) => recipe.id === requestedId);
 if (foundRecipe) {
    res.json(foundRecipe);
 }else{
    return res.status(400).json({ error: `Recipe with id : ${requestedId} not found` });
 }
})

//3. POST a new recipe
app.post("/new", (req, res) => {
    const newRecipe = {
        id: recipes.length + 1,
        name: req.body.name,
        ingredients: req.body.ingredients,
        steps: req.body.steps,
        date: new Date()
    };
    recipes.push(newRecipe);
    res.json(newRecipe);
});

//4. PATCH a recipes
app.post("/edit/:id", (req,res) => {
  const requestedId = parseInt(req.params.id);
  const existingaRecipe=recipes[requestedId-1];
  if (existingaRecipe) {
    const newRecipe = {
      id : requestedId,
      name : req.body.name,
      ingredients : req.body.ingredients,
      steps : req.body.steps,
      date : new Date()
    }
    recipes[requestedId-1]=newRecipe;
    res.json(recipes);
  }else{
    return res.status(400).json({ error: `Recipe with id : ${requestedId} not found` });
  }
})

//5. DELETE Specific recipe
app.delete("/delete/:id", (req, res) => {
    const requestedId = parseInt(req.params.id);
    const indexToDelete = recipes.findIndex(recipe => recipe.id == requestedId);

    if (indexToDelete !== -1) {
        recipes.splice(indexToDelete, 1);
        res.sendStatus(200);
    } else {
        res.status(404).json({ message: "Recipe not found" });
    }
});

app.listen(port, () => {
  console.log(`Successfully started server on port ${port}.`);
});

const recipes = [
{
  id: 1,
  name: "Chicken Biryani",
  ingredients: `2 cups basmati rice
500g chicken, cut into pieces
2 onions, thinly sliced
1/2 cup yogurt
2 tomatoes, chopped
2 tablespoons biryani masala
1 tablespoon ginger-garlic paste
1/4 cup mint leaves
1/4 cup cilantro leaves
1/2 teaspoon saffron strands
Salt to taste
3 tablespoons ghee
2 cups water`,
  steps: `Wash and soak rice for 30 minutes.
Heat ghee in a pan and sauté onions until golden brown.
Add chicken, ginger-garlic paste, and tomatoes; cook until chicken is half done.
Add biryani masala, yogurt, mint, cilantro, and salt; cook for 5 minutes.
Layer half-cooked rice over chicken, sprinkle saffron, and pour water.
Cover and cook on low heat until rice and chicken are fully cooked.`,
  date: '2024-06-05 T16:00:00Z'
},
{
  id: 2,
  name: "Masala Dosa",
  ingredients: `1 cup rice
1/2 cup urad dal (black gram)
Salt to taste
Potatoes (masala)
4 large potatoes, boiled and mashed
2 onions, chopped
2 green chilies, chopped
1/2 teaspoon mustard seeds
1/2 teaspoon cumin seeds
1/4 teaspoon turmeric powder
Curry leaves
Salt to taste
Ghee or oil for cooking dosa`,
  steps: `Soak rice and dal separately for 6 hours.
Grind them together into a smooth batter, ferment overnight.
For masala, heat oil, add mustard seeds, cumin seeds, curry leaves, onions, green chilies, and turmeric.
Add mashed potatoes and salt; mix well.
Spread dosa batter on hot gr  iddle, add ghee, cook until golden brown.
Spread potato masala over dosa, fold and serve hot.`,
  date: '2024-06-05 T16:00:00Z'
},
{
  id: 3,
  name: "Butter Chicken",
  ingredients: `500g chicken breast, cubed
1 cup yogurt
2 tablespoons lemon juice
1 tablespoon ginger-garlic paste
2 tablespoons butter
1 large onion, chopped
2 tomatoes, pureed
1/2 cup cream
1 teaspoon garam masala
1 teaspoon red chili powder
1 teaspoon turmeric powder
Salt to taste`,
  steps: `Marinate chicken in yogurt, lemon juice, and spices for at least 1 hour.
Heat butter in a pan, sauté onions until golden brown.
Add ginger-garlic paste and cook for 2 minutes.
Add pureed tomatoes, cook until oil separates.
Add marinated chicken and cook until tender.
Stir in cream and simmer for 5 minutes.
Serve hot with naan or rice.`,
  date: '2024-06-05 T16:00:00Z'
},
{
  id: 4,
  name: "Palak Paneer",
  ingredients: `200g paneer, cubed
2 bunches spinach, blanched and pureed
2 onions, finely chopped
2 tomatoes, pureed
1 tablespoon ginger-garlic paste
1 teaspoon cumin seeds
1 teaspoon garam masala
1/2 teaspoon turmeric powder
1/2 teaspoon red chili powder
Salt to taste
2 tablespoons oil`,
  steps: `Heat oil in a pan, add cumin seeds and let them splutter.
Add onions and sauté until golden brown.
Add ginger-garlic paste and cook for 2 minutes.
Add pureed tomatoes and cook until oil separates.
Add spinach puree and spices, cook for 5 minutes.
Add paneer cubes and simmer for 5 minutes.
Serve hot with roti or rice.`,
  date: '2024-06-05 T16:00:00Z'
},
{
  id: 5,
  name: "Rogan Josh",
  ingredients: `500g lamb, cut into pieces
1 cup yogurt
2 onions, thinly sliced
2 tomatoes, chopped
2 tablespoons ginger-garlic paste
1 teaspoon cumin seeds
1 teaspoon coriander powder
1 teaspoon garam masala
1 teaspoon red chili powder
Salt to taste
2 tablespoons oil`,
  steps: `Marinate lamb in yogurt and spices for at least 1 hour.
Heat oil in a pan, sauté onions until golden brown.
Add ginger-garlic paste and cook for 2 minutes.
Add tomatoes and cook until oil separates.
Add marinated lamb and cook until tender.
Add water if needed, simmer until gravy thickens.
Serve hot with naan or rice.`,
  date: '2024-06-05 T16:00:00Z'
},
{
  id: 6,
  name: "Chicken Tikka Masala",
  ingredients: `500g chicken breast, cubed
1 cup yogurt
2 tablespoons lemon juice
1 tablespoon ginger-garlic paste
1 tablespoon cumin powder
1 tablespoon coriander powder
1 teaspoon turmeric powder
1 teaspoon chili powder
Salt to taste
2 tablespoons oil
1 large onion, chopped
2 tomatoes, pureed
1/2 cup cream
1 teaspoon garam masala`,
  steps: `Marinate chicken in yogurt, lemon juice, and spices for at least 1 hour.
Grill or bake the chicken until cooked through.
Heat oil in a pan, sauté onions until golden brown.
Add ginger-garlic paste and cook for 2 minutes.
Add pureed tomatoes and cook until oil separates.
Add grilled chicken, cream, and garam masala, simmer for 5 minutes.
Serve hot with naan or rice.`,
  date: '2024-06-05 T16:00:00Z'
},
{
  id: 7,
  name: "Paneer Butter Masala",
  ingredients: `200g paneer, cubed
2 onions, finely chopped
2 tomatoes, pureed
1/2 cup cream
1 tablespoon ginger-garlic paste
1 teaspoon cumin seeds
1 teaspoon garam masala
1/2 teaspoon turmeric powder
1/2 teaspoon red chili powder
Salt to taste
2 tablespoons butter`,
  steps: `Heat butter in a pan, add cumin seeds and let them splutter.
Add onions and sauté until golden brown.
Add ginger-garlic paste and cook for 2 minutes.
Add pureed tomatoes and cook until oil separates.
Add paneer cubes and spices, cook for 5 minutes.
Stir in cream and simmer for 5 minutes.
Serve hot with naan or rice.`,
  date: '2024-06-05 T16:00:00Z'
},
{
  id: 8,
  name: "Aloo Gobi",
  ingredients: `2 potatoes, cubed
1 cauliflower, cut into florets
2 tomatoes, chopped
1 onion, finely chopped
1 tablespoon ginger-garlic paste
1 teaspoon cumin seeds
1 teaspoon coriander powder
1/2 teaspoon turmeric powder
1/2 teaspoon red chili powder
Salt to taste
2 tablespoons oil`,
  steps: `Heat oil in a pan, add cumin seeds and let them splutter.
Add onions and sauté until golden brown.
Add ginger-garlic paste and cook for 2 minutes.
Add tomatoes and cook until oil separates.
Add potatoes, cauliflower, and spices, cook until vegetables are tender.
Serve hot with roti or rice.`,
  date: '2024-06-05 T16:00:00Z'
},
{
  id: 9,
  name: "Fish Curry",
  ingredients: `500g fish, cut into pieces
2 onions, finely chopped
2 tomatoes, pureed
1/2 cup coconut milk
1 tablespoon ginger-garlic paste
1 teaspoon cumin seeds
1 teaspoon coriander powder
1/2 teaspoon turmeric powder
1/2 teaspoon red chili powder
Salt to taste
2 tablespoons oil`,
  steps: `Heat oil in a pan, add cumin seeds and let them splutter.
Add onions and sauté until golden brown.
Add ginger-garlic paste and cook for 2 minutes.
Add pureed tomatoes and cook until oil separates.
Add fish pieces and spices, cook for 5 minutes.
Stir in coconut milk and simmer for 5 minutes.
Serve hot with rice.`,
  date: '2024-06-05 T16:00:00Z'
},
{
  id: 10,
  name: "Keema Matar",
  ingredients: `500g minced meat (keema)
1 cup green peas
2 onions, finely chopped
2 tomatoes, chopped
1 tablespoon ginger-garlic paste
1 teaspoon cumin seeds
1 teaspoon coriander powder
1/2 teaspoon turmeric powder
1/2 teaspoon red chili powder
Salt to taste
2 tablespoons oil`,
  steps: `Heat oil in a pan, add cumin seeds and let them splutter.
Add onions and sauté until golden brown.
Add ginger-garlic paste and cook for 2 minutes.
Add tomatoes and cook until oil separates.
Add minced meat and spices, cook until meat is browned.
Add green peas and simmer until meat is cooked through.
Serve hot with roti or rice.`,
  date: '2024-06-05 T16:00:00Z'
},
{
  id: 11,
  name: "Bhindi Masala",
  ingredients: `250g okra (bhindi), cut into pieces
2 onions, finely chopped
2 tomatoes, chopped
1 tablespoon ginger-garlic paste
1 teaspoon cumin seeds
1 teaspoon coriander powder
1/2 teaspoon turmeric powder
1/2 teaspoon red chili powder
Salt to taste
2 tablespoons oil`,
  steps: `Heat oil in a pan, add cumin seeds and let them splutter.
Add onions and sauté until golden brown.
Add ginger-garlic paste and cook for 2 minutes.
Add tomatoes and cook until oil separates.
Add okra and spices, cook until okra is tender.
Serve hot with roti or rice.`,
  date: '2024-06-05 T16:00:00Z'
},
{
  id: 12,
  name: "Chole Bhature",
  ingredients: `2 cups chickpeas, soaked and boiled
2 onions, finely chopped
2 tomatoes, chopped
1 tablespoon ginger-garlic paste
1 teaspoon cumin seeds
1 teaspoon coriander powder
1/2 teaspoon turmeric powder
1/2 teaspoon red chili powder
Salt to taste
2 tablespoons oil
For Bhature:
2 cups all-purpose flour
1/2 cup yogurt
1/2 teaspoon baking powder
Salt to taste
Oil for deep frying`,
  steps: `Heat oil in a pan, add cumin seeds and let them splutter.
Add onions and sauté until golden brown.
Add ginger-garlic paste and cook for 2 minutes.
Add tomatoes and cook until oil separates.
Add boiled chickpeas and spices, cook for 10 minutes.
For bhature, mix flour, yogurt, baking powder, and salt; knead into a dough.
Roll into discs and deep fry until golden brown.
Serve hot with chole.`,
  date: '2024-06-05 T16:00:00Z'
},
{
  id: 13,
  name: "Lamb Vindaloo",
  ingredients: `500g lamb, cut into pieces
2 onions, thinly sliced
2 tomatoes, chopped
2 tablespoons vinegar
1 tablespoon ginger-garlic paste
1 teaspoon cumin seeds
1 teaspoon coriander powder
1/2 teaspoon turmeric powder
1/2 teaspoon red chili powder
Salt to taste
2 tablespoons oil`,
  steps: `Marinate lamb in vinegar and spices for at least 1 hour.
Heat oil in a pan, sauté onions until golden brown.
Add ginger-garlic paste and cook for 2 minutes.
Add tomatoes and cook until oil separates.
Add marinated lamb and cook until tender.
Add water if needed, simmer until gravy thickens.
Serve hot with rice.`,
  date: '2024-06-05 T16:00:00Z'
},
{
  id: 14,
  name: "Aloo Paratha",
  ingredients: `2 cups whole wheat flour
2 potatoes, boiled and mashed
1 onion, finely chopped
2 green chilies, chopped
1/2 teaspoon cumin seeds
1/2 teaspoon coriander powder
Salt to taste
Ghee or oil for cooking`,
  steps: `Knead flour with water to make a dough.
Mix mashed potatoes, onions, green chilies, cumin seeds, coriander powder, and salt.
Roll dough into balls, stuff with potato mixture, and roll into parathas.
Cook on hot gr  iddle with ghee until golden brown.
Serve hot with yogurt or pickle.`,
  date: '2024-06-05 T16:00:00Z'
},
{
  id: 15,
  name: "Pav Bhaji",
  ingredients: `4 potatoes, boiled and mashed
1 cup mixed vegetables, boiled and mashed
2 onions, finely chopped
2 tomatoes, chopped
1 tablespoon ginger-garlic paste
1 teaspoon cumin seeds
1 teaspoon pav bhaji masala
1/2 teaspoon turmeric powder
1/2 teaspoon red chili powder
Salt to taste
4 tablespoons butter
Pav buns
Lemon wedges`,
  steps: `Heat butter in a pan, add cumin seeds and let them splutter.
Add onions and sauté until golden brown.
Add ginger-garlic paste and cook for 2 minutes.
Add tomatoes and cook until oil separates.
Add mashed vegetables, pav bhaji masala, turmeric, red chili powder, and salt; mix well.
Cook for 10 minutes, mashing occasionally.
Serve hot with buttered pav buns and lemon wedges.`,
  date: '2024-06-05 T16:00:00Z'
},
{
  id: 16,
  name: "Kheer",
  ingredients: `1 liter milk
1/4 cup rice, soaked
1/2 cup sugar
1/4 teaspoon cardamom powder
10-12 almonds, chopped
10-12 cashews, chopped`,
  steps: `Boil milk in a pan.
Add soaked rice and cook until rice is soft.
Add sugar, cardamom powder, almonds, and cashews.
Cook until kheer thickens.
Serve hot or chilled.`,
  date: '2024-06-05 T16:00:00Z'
},
{
  id: 17,
  name: "Gulab Jamun",
  ingredients: `1 cup khoya (mawa)
1/4 cup all-purpose flour
1/4 teaspoon baking powder
Ghee for frying
For syrup:
2 cups sugar
1 cup water
1/4 teaspoon cardamom powder
10-12 saffron strands`,
  steps: `Mix khoya, all-purpose flour, and baking powder to form a dough.
Shape into small balls.
Heat ghee in a pan and fry balls until golden brown.
For syrup, boil sugar, water, cardamom powder, and saffron strands until thick.
Soak fried balls in hot syrup for 30 minutes.
Serve warm.`,
  date: '2024-06-05 T16:00:00Z'
},
{
  id: 18,
  name: "Ras Malai",
  ingredients: `1 liter milk
1/2 cup sugar
1/4 teaspoon cardamom powder
10-12 saffron strands
1/4 cup chopped nuts (almonds, pistachios)
500g paneer, kneaded and shaped into discs`,
  steps: `Boil milk and reduce to half.
Add sugar, cardamom powder, and saffron strands.
Add paneer discs to the milk and cook for 5 minutes.
Garnish with chopped nuts.
Serve chilled.`,
  date: '2024-06-05 T16:00:00Z'
},
{
  id: 19,
  name: "Besan Ladoo",
  ingredients: `2 cups besan (gram flour)
1 cup ghee
1 1/2 cups powdered sugar
1/2 teaspoon cardamom powder
10-12 almonds, chopped`,
  steps: `Heat ghee in a pan, add besan and roast until golden brown.
Remove from heat, add powdered sugar, cardamom powder, and almonds.
Mix well and shape into ladoos while warm.
Cool and store in an airtight container.`,
  date: '2024-06-05 T16:00:00Z'
},
{
  id: 20,
  name: "Peda",
  ingredients: `2 cups khoya
1/2 cup powdered sugar
1/4 teaspoon cardamom powder
10-12 almonds, chopped`,
  steps: `Heat khoya in a pan until it softens.
Add powdered sugar and cardamom powder; mix well.
Cook for 5 minutes until the mixture thickens.
Let it cool slightly, shape into pedas and garnish with chopped almonds.
Serve or store in an airtight container.`,
  date: '2024-06-05 T16:00:00Z'
}
];
