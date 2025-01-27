export let recipes = [
  {
    name: "Spaghetti Carbonara",
    ingredients: ["spaghetti", "pancetta", "egg yolks", "parmesan cheese", "black pepper"],
    processToPrepare: [
      "Bring a large pot of salted water to a boil. Cook spaghetti according to package instructions until al dente. Reserve 1 cup of pasta water, then drain the spaghetti.",
      "While the spaghetti is cooking, heat a large skillet over medium heat. Add pancetta and cook, stirring occasionally, until crispy and golden brown, about 5-7 minutes. Remove pancetta with a slotted spoon and place on a paper towel-lined plate.",
      "In a medium bowl, whisk together egg yolks, grated parmesan cheese, and freshly ground black pepper until smooth and creamy.",
      "In the same skillet used for pancetta, reduce the heat to low. Add the cooked spaghetti and toss to coat with the rendered pancetta fat.",
      "Remove the skillet from heat. Quickly pour the egg mixture over the spaghetti, tossing continuously to combine. The heat from the pasta will cook the eggs into a creamy sauce. If needed, add reserved pasta water a little at a time to thin out the sauce.",
      "Serve immediately, garnished with additional parmesan cheese and black pepper.",
    ],
    cuisine: "Italian",
    preparationTime: "30 minutes",
    dietaryRestrictions: ["Lactose intolerant"],
    description: "A classic Italian pasta dish featuring creamy eggs, crispy pancetta, and parmesan cheese. Simple yet indulgent, it's a beloved comfort food worldwide.",
    rating: 4,
    foodId: "food1",
    addedToFav: false,
  },
  {
    name: "Margherita Pizza",
    ingredients: ["pizza dough", "tomatoes", "mozzarella cheese", "basil", "olive oil"],
    processToPrepare: [
      "Preheat your oven to the highest setting (usually around 500°F or as high as it will go). Place a pizza stone or an inverted baking sheet in the oven to preheat.",
      "Roll out the pizza dough on a floured surface to your desired thickness. Transfer the dough to a piece of parchment paper lightly dusted with cornmeal.",
      "Spread crushed tomatoes evenly over the dough, leaving a small border around the edges. Sprinkle shredded mozzarella cheese over the tomatoes.",
      "Transfer the pizza (on the parchment paper) to the preheated pizza stone or baking sheet in the oven. Bake until the crust is golden and the cheese is bubbly and slightly browned, about 8-10 minutes.",
      "Remove the pizza from the oven and immediately top with fresh basil leaves. Drizzle with olive oil before serving.",
    ],
    cuisine: "Italian",
    preparationTime: "45 minutes",
    dietaryRestrictions: ["Gluten intolerant"],
    description: "A traditional Italian pizza topped with fresh tomatoes, mozzarella cheese, and basil. Simple yet flavorful, it's a favorite for pizza lovers.",
    rating: 4,
    foodId: "food2",
    addedToFav: false,
  },
  {
    name: "Chicken Tikka Masala",
    ingredients: ["chicken", "yogurt", "tomato sauce", "cream", "spices"],
    processToPrepare: [
      "In a large bowl, combine yogurt, minced garlic, grated ginger, ground cumin, ground coriander, turmeric, cayenne pepper, and salt to taste. Add chicken pieces and coat them with the marinade. Cover and refrigerate for at least 1 hour, preferably overnight.",
      "Preheat the grill to medium-high heat. Thread the marinated chicken onto skewers. Grill the chicken skewers until fully cooked and slightly charred, about 10-12 minutes, turning occasionally.",
      "While the chicken is grilling, heat a large skillet over medium heat. Add butter or ghee, minced garlic, grated ginger, ground cumin, ground coriander, turmeric, cayenne pepper, and salt to taste. Cook until fragrant, about 1-2 minutes.",
      "Stir in tomato sauce and heavy cream. Bring to a simmer, then reduce heat to low and let the sauce simmer gently for 10 minutes, stirring occasionally.",
      "Add the grilled chicken to the sauce, stirring gently to coat the chicken with the sauce. Simmer for an additional 5 minutes to allow the flavors to meld together.",
      "Serve hot with basmati rice and naan bread.",
    ],
    cuisine: "Indian",
    preparationTime: "1 hour",
    dietaryRestrictions: ["Lactose intolerant"],
    description: "A popular Indian dish featuring tender chicken marinated in yogurt and spices, cooked in a creamy tomato sauce. Rich and aromatic, it's a delight for curry enthusiasts.",
    rating: 5,
    foodId: "food3",
    addedToFav: false,
  },
  {
    name: "Caesar Salad",
    ingredients: ["romaine lettuce", "croutons", "parmesan cheese", "Caesar dressing", "chicken (optional)"],
    processToPrepare: [
      "Tear romaine lettuce into bite-sized pieces and place in a large salad bowl.",
      "Add homemade or store-bought croutons and shaved or grated parmesan cheese.",
      "Drizzle Caesar dressing over the salad ingredients, tossing gently to coat evenly.",
      "For an added protein boost, top the salad with grilled or roasted chicken strips.",
      "Serve immediately as a refreshing starter or light meal.",
    ],
    cuisine: "International",
    preparationTime: "20 minutes",
    dietaryRestrictions: ["Contains gluten", "Contains dairy"],
    description: "A classic salad with crisp romaine lettuce, crunchy croutons, and tangy Caesar dressing. Add chicken for a hearty twist.",
    rating: 4,
    foodId: "food4",
    addedToFav: false,
  },
  {
    name: "Sushi Rolls",
    ingredients: ["sushi rice", "seaweed", "fish (e.g., tuna, salmon)", "vegetables", "soy sauce"],
    processToPrepare: [
      "Rinse sushi rice under cold water until the water runs clear. Cook the rice according to package instructions, then let it cool to room temperature.",
      "Lay a sheet of seaweed (nori) on a bamboo rolling mat (makisu) or a clean kitchen towel. With wet hands, spread a thin, even layer of sushi rice over the nori, leaving about 1 inch of the seaweed uncovered at the top.",
      "Arrange strips of fish (such as tuna or salmon), thinly sliced vegetables (like cucumber or avocado), or other desired fillings along one edge of the rice.",
      "Using the bamboo mat or towel, carefully roll the sushi away from you, applying gentle pressure to compact the ingredients. Moisten the uncovered edge of the nori with water to seal the roll.",
      "With a sharp knife dipped in water, slice the sushi roll into bite-sized pieces.",
      "Serve the sushi rolls with soy sauce, pickled ginger, and wasabi.",
    ],
    cuisine: "Japanese",
    preparationTime: "45 minutes",
    dietaryRestrictions: ["Shellfish allergy"],
    description: "Japanese sushi rolls with vinegared rice, seaweed, fresh fish, and vegetables. Served with soy sauce, it's a staple of Japanese cuisine.",
    rating: 4,
    foodId: "food5",
    addedToFav: false,
  },
  {
    name: "Beef Tacos",
    ingredients: ["ground beef", "taco seasoning", "tortillas", "lettuce", "tomatoes", "cheddar cheese"],
    processToPrepare: [
      "In a large skillet over medium heat, cook the ground beef until browned and cooked through, breaking it up into crumbles with a spoon.",
      "Drain any excess grease from the skillet, then add taco seasoning and stir to coat the beef evenly. Cook for an additional 2-3 minutes.",
      "Meanwhile, warm the tortillas in a dry skillet or microwave according to package instructions.",
      "To assemble the tacos, place a portion of the seasoned beef in the center of each tortilla. Top with shredded lettuce, diced tomatoes, and grated cheddar cheese.",
      "Serve the tacos hot, accompanied by salsa, sour cream, and lime wedges if desired.",
    ],
    cuisine: "Mexican",
    preparationTime: "30 minutes",
    dietaryRestrictions: ["Gluten intolerant"],
    description: "Mexican-style tacos with seasoned ground beef, fresh vegetables, and cheddar cheese. Served in warm tortillas with salsa and sour cream.",
    rating: 4,
    foodId: "food6",
    addedToFav: false,
  },
  {
    name: "Pad Thai",
    ingredients: ["rice noodles", "shrimp", "tofu", "bean sprouts", "peanuts", "tamarind sauce"],
    processToPrepare: [
      "Soak rice noodles in a bowl of warm water until they are pliable but still firm to the touch, about 10-15 minutes. Drain and set aside.",
      "Heat oil in a large wok or skillet over medium-high heat. Add minced garlic and sauté until fragrant, about 30 seconds.",
      "Add shrimp to the wok and cook until pink and opaque, about 2-3 minutes. Push the shrimp to one side of the wok.",
      "Crack eggs into the wok and scramble until fully cooked, about 1-2 minutes. Stir the scrambled eggs into the shrimp.",
      "Add drained rice noodles to the wok along with tofu, bean sprouts, and tamarind sauce. Toss everything together until well combined and heated through, about 3-5 minutes.",
      "Remove from heat and stir in chopped peanuts.",
      "Serve hot, garnished with lime wedges and additional bean sprouts if desired.",
    ],
    cuisine: "Thai",
    preparationTime: "45 minutes",
    dietaryRestrictions: ["Peanut allergy"],
    description: "A popular Thai stir-fried noodle dish with shrimp, tofu, peanuts, and tamarind sauce. Sweet, sour, and savory flavors in every bite.",
    rating: 4,
    foodId: "food7",
    addedToFav: false,
  },
  {
    name: "Caprese Salad",
    ingredients: ["tomatoes", "fresh mozzarella cheese", "basil leaves", "balsamic glaze", "olive oil"],
    processToPrepare: [
      "Slice tomatoes and fresh mozzarella cheese into rounds of equal thickness.",
      "Arrange alternating slices of tomato and mozzarella on a serving platter or individual plates.",
      "Tuck fresh basil leaves between the tomato and mozzarella slices.",
      "Drizzle balsamic glaze and extra virgin olive oil over the arranged salad.",
      "Season with salt and freshly ground black pepper to taste.",
      "Serve immediately as a light and refreshing appetizer or side dish.",
    ],
    cuisine: "Italian",
    preparationTime: "15 minutes",
    dietaryRestrictions: [],
    description: "A classic Italian salad showcasing ripe tomatoes, creamy mozzarella, and fresh basil. Finished with a drizzle of balsamic glaze and olive oil.",
    rating: 4,
    foodId: "food8",
    addedToFav: false,
  },
  {
    name: "Lemon Garlic Butter Shrimp",
    ingredients: ["shrimp", "butter", "garlic", "lemon", "parsley"],
    processToPrepare: [
      "In a large skillet, melt butter over medium-high heat. Add minced garlic and sauté until fragrant, about 1 minute.",
      "Add shrimp to the skillet in a single layer. Cook for 2-3 minutes per side, or until shrimp are pink and opaque.",
      "Squeeze fresh lemon juice over the shrimp and sprinkle with chopped parsley.",
      "Toss shrimp in the lemon garlic butter sauce until evenly coated.",
      "Remove from heat and season with salt and pepper to taste.",
      "Serve immediately, garnished with additional parsley if desired.",
    ],
    cuisine: "Seafood",
    preparationTime: "15 minutes",
    dietaryRestrictions: ["Shellfish allergy"],
    description: "Juicy shrimp cooked in a flavorful lemon garlic butter sauce, finished with fresh parsley. Quick and delicious, perfect for seafood lovers.",
    rating: 4,
    foodId: "food9",
    addedToFav: false,
  },
  {
    name: "Beef Wellington",
    ingredients: ["beef tenderloin", "puff pastry", "mushrooms", "prosciutto", "egg"],
    processToPrepare: [
      "Season beef tenderloin generously with salt and pepper. Heat oil in a large skillet over high heat.",
      "Sear the beef tenderloin on all sides until well browned, about 2 minutes per side. Remove from skillet and let cool.",
      "In the same skillet, cook finely chopped mushrooms with minced garlic, thyme, salt, and pepper until all moisture evaporates, about 10 minutes.",
      "Roll out puff pastry on a lightly floured surface. Layer prosciutto slices, mushroom mixture, and seared beef tenderloin in the center of the pastry.",
      "Fold the puff pastry over the beef, sealing the edges tightly. Brush with beaten egg wash.",
      "Bake in a preheated oven at 400°F (200°C) until the pastry is golden brown and the beef reaches desired doneness, about 25-30 minutes.",
      "Let rest for 10 minutes before slicing. Serve hot.",
    ],
    cuisine: "French",
    preparationTime: "2 hours",
    dietaryRestrictions: ["Pork-free"],
    description: "A classic French dish featuring beef tenderloin wrapped in prosciutto and mushroom duxelles, encased in flaky puff pastry. Elegant and rich, perfect for special occasions.",
    rating: 5,
    foodId: "food10",
    addedToFav: false,
  },
  {
    name: "Chocolate Lava Cake",
    ingredients: ["dark chocolate", "butter", "eggs", "sugar", "flour"],
    processToPrepare: [
      "Preheat your oven to 425°F (220°C). Grease and lightly flour individual ramekins or muffin tins.",
      "In a microwave-safe bowl, melt dark chocolate and butter together in short bursts, stirring until smooth and combined.",
      "In a separate bowl, whisk together eggs and sugar until pale and fluffy.",
      "Fold the melted chocolate mixture into the egg mixture until well combined.",
      "Sift in flour and gently fold until just incorporated. Be careful not to overmix.",
      "Divide the batter evenly among the prepared ramekins or muffin tins.",
      "Bake for 12-14 minutes, or until the edges are set but the center is still soft and jiggly.",
      "Remove from oven and let cool for 1 minute. Carefully invert each lava cake onto a serving plate.",
      "Serve immediately, dusted with powdered sugar and accompanied by vanilla ice cream or whipped cream.",
    ],
    cuisine: "Dessert",
    preparationTime: "30 minutes",
    dietaryRestrictions: ["Gluten intolerant"],
    description: "Decadent individual chocolate cakes with molten centers, perfect for chocolate lovers and special occasions.",
    rating: 5,
    foodId: "food11",
    addedToFav: false,
  },
  {
    name: "Greek Salad",
    ingredients: ["cucumbers", "tomatoes", "red onion", "kalamata olives", "feta cheese", "oregano"],
    processToPrepare: [
      "Dice cucumbers, tomatoes, and red onion into bite-sized pieces. Place in a large salad bowl.",
      "Add pitted kalamata olives and crumbled feta cheese to the bowl.",
      "Drizzle with olive oil and sprinkle with dried oregano.",
      "Season with salt and pepper to taste.",
      "Toss gently to combine all ingredients.",
      "Serve immediately as a refreshing and tangy side dish or light lunch.",
    ],
    cuisine: "Greek",
    preparationTime: "15 minutes",
    dietaryRestrictions: ["Contains dairy"],
    description: "A traditional Greek salad with crisp cucumbers, juicy tomatoes, tangy feta cheese, and kalamata olives, dressed in olive oil and oregano.",
    rating: 4,
    foodId: "food12",
    addedToFav: false,
  },
  {
    name: "Chicken Alfredo",
    ingredients: ["chicken breast", "fettuccine pasta", "heavy cream", "parmesan cheese", "garlic", "butter"],
    processToPrepare: [
      "Cook fettuccine pasta according to package instructions. Drain and set aside.",
      "In a large skillet, melt butter over medium heat. Add minced garlic and cook until fragrant, about 1 minute.",
      "Add sliced chicken breast to the skillet. Cook until chicken is no longer pink and cooked through, about 5-7 minutes.",
      "Pour in heavy cream and bring to a simmer. Stir in grated parmesan cheese until melted and smooth.",
      "Add cooked pasta to the skillet, tossing gently to coat in the creamy sauce.",
      "Season with salt and pepper to taste.",
      "Serve hot, garnished with additional parmesan cheese and chopped parsley if desired.",
    ],
    cuisine: "Italian",
    preparationTime: "30 minutes",
    dietaryRestrictions: [],
    description: "Creamy fettuccine pasta tossed in a rich Alfredo sauce with tender chicken breast, garlic, and parmesan cheese. A comforting Italian classic.",
    rating: 4,
    foodId: "food13",
    addedToFav: false,
  },
  {
    name: "Guacamole",
    ingredients: ["avocados", "lime", "tomato", "onion", "jalapeno", "cilantro"],
    processToPrepare: [
      "Cut avocados in half, remove the pits, and scoop the flesh into a bowl.",
      "Mash the avocados with a fork until smooth or slightly chunky, depending on your preference.",
      "Dice tomato, onion, and jalapeno finely. Add them to the mashed avocado.",
      "Juice the lime into the bowl and add chopped cilantro.",
      "Season with salt to taste.",
      "Mix all ingredients together until well combined.",
      "Serve immediately with tortilla chips or as a topping for tacos, burritos, or nachos.",
    ],
    cuisine: "Mexican",
    preparationTime: "15 minutes",
    dietaryRestrictions: [],
    description: "A flavorful Mexican dip made with ripe avocados, lime juice, tomatoes, onions, jalapenos, and cilantro. Perfect for dipping or topping.",
    rating: 4,
    foodId: "food14",
    addedToFav: false,
  },
  {
    name: "Pesto Pasta",
    ingredients: ["pasta", "basil pesto", "cherry tomatoes", "parmesan cheese", "pine nuts", "garlic"],
    processToPrepare: [
      "Cook pasta in a large pot of salted boiling water according to package instructions until al dente. Drain and set aside.",
      "In a large skillet, toast pine nuts over medium heat until golden and fragrant. Remove from skillet and set aside.",
      "In the same skillet, heat a drizzle of olive oil over medium heat. Add minced garlic and cook until fragrant, about 1 minute.",
      "Add cherry tomatoes to the skillet and cook until they start to soften and burst, about 3-4 minutes.",
      "Return cooked pasta to the skillet. Stir in basil pesto until pasta is well coated.",
      "Remove from heat and toss in toasted pine nuts and grated parmesan cheese.",
      "Season with salt and pepper to taste.",
      "Serve hot, garnished with additional parmesan cheese and fresh basil leaves if desired.",
    ],
    cuisine: "Italian",
    preparationTime: "20 minutes",
    dietaryRestrictions: ["Contains nuts"],
    description: "A vibrant Italian pasta dish with basil pesto, cherry tomatoes, toasted pine nuts, and parmesan cheese. Fresh and flavorful, perfect for a quick meal.",
    rating: 4,
    foodId: "food15",
    addedToFav: false,
  },
  {
    name: "Chicken Teriyaki",
    ingredients: ["chicken thighs", "soy sauce", "mirin", "brown sugar", "garlic", "ginger", "sesame seeds"],
    processToPrepare: [
      "In a bowl, whisk together soy sauce, mirin, brown sugar, minced garlic, minced ginger, and sesame seeds to make the teriyaki sauce.",
      "Cut chicken thighs into bite-sized pieces and add them to the teriyaki sauce. Marinate for at least 30 minutes.",
      "Heat oil in a large skillet or wok over medium-high heat. Add marinated chicken pieces, reserving the marinade.",
      "Cook chicken until browned and cooked through, stirring occasionally.",
      "Pour in the reserved marinade and simmer until the sauce thickens and coats the chicken pieces.",
      "Remove from heat and garnish with sesame seeds and chopped green onions.",
      "Serve hot with steamed rice and steamed vegetables.",
    ],
    cuisine: "Japanese",
    preparationTime: "45 minutes",
    dietaryRestrictions: [],
    description: "Tender chicken thighs marinated and cooked in a sweet and savory teriyaki sauce, garnished with sesame seeds and green onions. A popular Japanese dish.",
    rating: 4,
    foodId: "food16",
    addedToFav: false,
  },
  {
    name: "Risotto ai Funghi",
    ingredients: ["arborio rice", "mushrooms", "onion", "garlic", "white wine", "parmesan cheese", "vegetable broth"],
    processToPrepare: [
      "In a saucepan, heat vegetable broth over medium heat until simmering.",
      "In a large skillet, heat olive oil over medium heat. Add finely chopped onion and minced garlic, sauté until translucent.",
      "Add sliced mushrooms to the skillet and cook until they release their moisture and start to brown.",
      "Add arborio rice to the skillet and toast for 1-2 minutes until lightly golden.",
      "Pour in white wine and cook until absorbed, stirring constantly.",
      "Add a ladleful of warm vegetable broth to the skillet, stirring frequently until absorbed.",
      "Continue adding broth, one ladleful at a time, stirring frequently, until rice is creamy and tender, about 18-20 minutes.",
      "Stir in grated parmesan cheese until melted and well combined.",
      "Season with salt and pepper to taste.",
      "Serve hot, garnished with additional parmesan cheese and chopped parsley if desired.",
    ],
    cuisine: "Italian",
    preparationTime: "40 minutes",
    dietaryRestrictions: ["Contains alcohol", "Contains dairy"],
    description: "A creamy Italian risotto with arborio rice, savory mushrooms, white wine, and parmesan cheese. Comforting and indulgent, perfect as a main course.",
    rating: 5,
    foodId: "food17",
    addedToFav: false,
  },
  {
    name: "Chicken Caesar Salad",
    ingredients: ["chicken breast", "romaine lettuce", "croutons", "parmesan cheese", "Caesar dressing", "lemon", "olive oil"],
    processToPrepare: [
      "Rub chicken breast with olive oil, lemon juice, salt, and pepper. Grill or cook in a skillet until cooked through. Let rest before slicing.",
      "Tear romaine lettuce into bite-sized pieces and place in a large salad bowl.",
      "Add homemade or store-bought croutons and shaved or grated parmesan cheese.",
      "Slice grilled chicken breast and arrange on top of the salad.",
      "Drizzle Caesar dressing over the salad or serve on the side.",
      "Toss gently to combine all ingredients.",
      "Serve immediately as a hearty and satisfying main course or lunch.",
    ],
    cuisine: "International",
    preparationTime: "30 minutes",
    dietaryRestrictions: ["Contains gluten", "Contains dairy"],
    description: "A classic Caesar salad with grilled chicken breast, crisp romaine lettuce, homemade croutons, and tangy Caesar dressing. Fresh and flavorful.",
    rating: 4,
    foodId: "food18",
    addedToFav: false,
  },
  {
    name: "Vegetarian Lasagna",
    ingredients: ["lasagna noodles", "ricotta cheese", "spinach", "mozzarella cheese", "marinara sauce", "parmesan cheese"],
    processToPrepare: [
      "Preheat your oven to 375°F (190°C).",
      "Cook lasagna noodles according to package instructions until al dente. Drain and set aside.",
      "In a large bowl, combine ricotta cheese, chopped spinach, shredded mozzarella cheese, and grated parmesan cheese. Mix well.",
      "Spread a thin layer of marinara sauce on the bottom of a baking dish.",
      "Layer cooked lasagna noodles over the sauce.",
      "Spread a layer of the ricotta-spinach mixture evenly over the noodles.",
      "Repeat layers of marinara sauce, noodles, and ricotta-spinach mixture until all ingredients are used, ending with a layer of marinara sauce on top.",
      "Cover the baking dish with aluminum foil and bake for 30 minutes.",
      "Remove the foil and bake for an additional 10-15 minutes, or until lasagna is bubbly and cheese is melted and golden on top.",
      "Let lasagna rest for 10 minutes before slicing and serving.",
    ],
    cuisine: "Italian",
    preparationTime: "1 hour",
    dietaryRestrictions: [],
    description: "A comforting vegetarian lasagna with layers of tender pasta, creamy ricotta-spinach filling, melted mozzarella cheese, and marinara sauce. Hearty and satisfying.",
    rating: 4,
    foodId: "food19",
    addedToFav: false,
  },
  {
    name: "Mango Sticky Rice",
    ingredients: ["sticky rice", "ripe mango", "coconut milk", "sugar", "salt", "toasted sesame seeds"],
    processToPrepare: [
      "Rinse sticky rice until the water runs clear. Soak rice in water for at least 30 minutes or up to overnight.",
      "Steam sticky rice until tender and cooked through, about 20-25 minutes.",
      "While rice is cooking, heat coconut milk, sugar, and a pinch of salt in a saucepan over medium heat. Stir until sugar dissolves.",
      "Remove coconut milk mixture from heat and let cool slightly.",
      "Peel and slice ripe mango into thin strips or cubes.",
      "Fluff cooked sticky rice with a fork and drizzle with some of the coconut milk mixture, stirring gently to coat.",
      "Serve sticky rice with sliced mango on the side or on top, drizzled with more coconut milk mixture.",
      "Sprinkle toasted sesame seeds over the top for added flavor and texture.",
      "Enjoy warm or at room temperature as a delightful Thai dessert.",
    ],
    cuisine: "Thai",
    preparationTime: "1 hour",
    dietaryRestrictions: ["Gluten-free", "Vegan (replace honey)"],
    description: "A traditional Thai dessert featuring sweet sticky rice drizzled with coconut milk and served with fresh ripe mango. Sweet, creamy, and satisfying.",
    rating: 4,
    foodId: "food20",
    addedToFav: false,
  },

];
