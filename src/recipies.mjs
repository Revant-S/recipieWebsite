export let recipes  = [
  {
    name: "Spaghetti Carbonara",
    ingredients: ["spaghetti", "pancetta", "egg yolks", "parmesan cheese", "black pepper"],
    processToPrepare: [
      "Cook spaghetti according to package instructions.",
      "In a skillet, cook pancetta until crispy.",
      "Whisk together egg yolks, parmesan cheese, and black pepper in a bowl.",
      "Combine drained spaghetti with pancetta in the skillet.",
      "Remove from heat and quickly stir in egg mixture until creamy.",
      "Serve immediately."
    ],
    cuisine: "Italian",
    preparationTime: "30 minutes",
    dietaryRestrictions: ["Lactose intolerant"],
    description: "A classic Italian pasta dish featuring creamy eggs, crispy pancetta, and parmesan cheese. Simple yet indulgent, it's a beloved comfort food worldwide.",
    rating: 4,
    foodId: `food1`,
    addedToFav: false
  },
  {
    name: "Margherita Pizza",
    ingredients: ["pizza dough", "tomatoes", "mozzarella cheese", "basil", "olive oil"],
    processToPrepare: [
      "Roll out pizza dough into desired shape.",
      "Spread crushed tomatoes evenly over the dough.",
      "Sprinkle shredded mozzarella cheese over the tomatoes.",
      "Bake in a preheated oven until crust is golden and cheese is bubbly.",
      "Top with fresh basil leaves and drizzle with olive oil before serving."
    ],
    cuisine: "Italian",
    preparationTime: "45 minutes",
    dietaryRestrictions: ["Gluten intolerant"],
    description: "A traditional Italian pizza topped with fresh tomatoes, mozzarella cheese, and basil. Simple yet flavorful, it's a favorite for pizza lovers.",
    rating: 4,
    foodId: `food2`,
    addedToFav: false
  },
  {
    name: "Chicken Tikka Masala",
    ingredients: ["chicken", "yogurt", "tomato sauce", "cream", "spices"],
    processToPrepare: [
      "Marinate chicken in yogurt and spices.",
      "Grill or bake marinated chicken until cooked through.",
      "Simmer tomato sauce and cream together in a skillet.",
      "Add cooked chicken to the sauce and simmer until flavors meld.",
      "Serve hot with rice or naan."
    ],
    cuisine: "Indian",
    preparationTime: "1 hour",
    dietaryRestrictions: ["Lactose intolerant"],
    description: "A popular Indian dish featuring tender chicken marinated in yogurt and spices, cooked in a creamy tomato sauce. Rich and aromatic, it's a delight for curry enthusiasts.",
    rating: 5,
    foodId: `food3`,
    addedToFav: false
  },
  {
    name: "Caesar Salad",
    ingredients: ["romaine lettuce", "croutons", "parmesan cheese", "Caesar dressing", "chicken (optional)"],
    processToPrepare: [
      "Tear romaine lettuce into bite-sized pieces and place in a salad bowl.",
      "Add croutons and shaved or grated parmesan cheese.",
      "Toss with Caesar dressing until evenly coated.",
      "Optionally, top with grilled or roasted chicken strips.",
      "Serve immediately as a refreshing starter or light meal."
    ],
    cuisine: "International",
    preparationTime: "20 minutes",
    dietaryRestrictions: ["Contains gluten", "Contains dairy"],
    description: "A classic salad with crisp romaine lettuce, crunchy croutons, and tangy Caesar dressing. Add chicken for a hearty twist.",
    rating: 4,
    foodId: `food4`,
    addedToFav: false
  },
  {
    name: "Sushi Rolls",
    ingredients: ["sushi rice", "seaweed", "fish (e.g., tuna, salmon)", "vegetables", "soy sauce"],
    processToPrepare: [
      "Prepare sushi rice and let it cool.",
      "Lay seaweed on a bamboo mat, spread rice evenly on it.",
      "Add fish and vegetables along one edge.",
      "Roll tightly using the bamboo mat, seal with water.",
      "Slice into bite-sized pieces, serve with soy sauce."
    ],
    cuisine: "Japanese",
    preparationTime: "45 minutes",
    dietaryRestrictions: ["Shellfish allergy"],
    description: "Japanese sushi rolls with vinegared rice, seaweed, fresh fish, and vegetables. Served with soy sauce, it's a staple of Japanese cuisine.",
    rating: 4,
    foodId: `food5`,
    addedToFav: false
  },
  {
    name: "Beef Tacos",
    ingredients: ["ground beef", "taco seasoning", "tortillas", "lettuce", "tomatoes", "cheddar cheese"],
    processToPrepare: [
      "Cook ground beef with taco seasoning until browned.",
      "Warm tortillas in a skillet or microwave.",
      "Assemble tacos with beef, lettuce, tomatoes, and cheese.",
      "Serve hot with salsa and sour cream."
    ],
    cuisine: "Mexican",
    preparationTime: "30 minutes",
    dietaryRestrictions: ["Gluten intolerant"],
    description: "Mexican-style tacos with seasoned ground beef, fresh vegetables, and cheddar cheese. Served in warm tortillas with salsa and sour cream.",
    rating: 4,
    foodId: `food6`,
    addedToFav: false
  },
  {
    name: "Pad Thai",
    ingredients: ["rice noodles", "shrimp", "tofu", "bean sprouts", "peanuts", "tamarind sauce"],
    processToPrepare: [
      "Soak rice noodles in warm water until softened.",
      "Stir-fry shrimp and tofu in a wok until cooked.",
      "Add soaked noodles, bean sprouts, and tamarind sauce.",
      "Toss everything together until well combined and heated through.",
      "Serve hot, garnished with crushed peanuts."
    ],
    cuisine: "Thai",
    preparationTime: "40 minutes",
    dietaryRestrictions: ["Nut allergy"],
    description: "Thai stir-fried noodles with shrimp, tofu, bean sprouts, and peanuts in a tangy tamarind sauce. A flavorful and popular Thai dish.",
    rating: 4,
    foodId: `food7`,
    addedToFav: false
  },
  {
    name: "Caprese Salad",
    ingredients: ["tomatoes", "fresh mozzarella", "basil leaves", "balsamic glaze", "olive oil"],
    processToPrepare: [
      "Slice tomatoes and fresh mozzarella into rounds.",
      "Arrange alternating slices on a plate.",
      "Tuck fresh basil leaves between tomato and mozzarella slices.",
      "Drizzle with balsamic glaze and olive oil.",
      "Season with salt and pepper to taste."
    ],
    cuisine: "Italian",
    preparationTime: "15 minutes",
    dietaryRestrictions: ["Contains dairy"],
    description: "A simple Italian salad with ripe tomatoes, fresh mozzarella, and basil, drizzled with balsamic glaze and olive oil. Light and refreshing.",
    rating: 4,
    foodId: `food8`,
    addedToFav: false
  },
  {
    name: "Beef Stir-Fry",
    ingredients: ["beef", "bell peppers", "broccoli", "soy sauce", "ginger", "garlic"],
    processToPrepare: [
      "Slice beef thinly against the grain.",
      "Heat oil in a wok or skillet, stir-fry ginger and garlic until fragrant.",
      "Add beef slices, cook until browned.",
      "Add bell peppers and broccoli, stir-fry until vegetables are tender-crisp.",
      "Season with soy sauce, toss well to combine.",
      "Serve hot with steamed rice."
    ],
    cuisine: "Asian",
    preparationTime: "30 minutes",
    dietaryRestrictions: ["Shellfish allergy"],
    description: "A savory Asian stir-fry with tender beef, crisp bell peppers, and broccoli in a flavorful soy sauce. Served hot over steamed rice.",
    rating: 4,
    foodId: `food9`,
    addedToFav: false
  },
  {
    name: "Margarita Cocktail",
    ingredients: ["tequila", "lime juice", "triple sec", "simple syrup", "salt"],
    processToPrepare: [
      "Rim a glass with salt: rub the rim with lime juice, dip in salt.",
      "In a shaker, combine tequila, lime juice, triple sec, and simple syrup.",
      "Shake well with ice until chilled.",
      "Strain into the prepared glass over ice.",
      "Garnish with a lime wedge."
    ],
    cuisine: "Mexican",
    preparationTime: "5 minutes",
    dietaryRestrictions: ["Alcohol-free"],
    description: "A classic Mexican cocktail made with tequila, lime juice, and triple sec, served over ice with a salted rim. Refreshing and tangy.",
    rating: 4,
    foodId: `food10`,
    addedToFav: false
  },
  {
    name: "Chicken Alfredo",
    ingredients: ["chicken breast", "fettuccine pasta", "heavy cream", "butter", "garlic", "parmesan cheese"],
    processToPrepare: [
      "Cook fettuccine pasta according to package instructions.",
      "Sauté chicken breast until fully cooked.",
      "In a separate pan, melt butter and sauté garlic until fragrant.",
      "Add heavy cream and parmesan cheese, stir until smooth.",
      "Combine cooked pasta and chicken with the creamy sauce, toss until well coated.",
      "Serve hot, garnished with more parmesan and freshly ground black pepper."
    ],
    cuisine: "Italian",
    preparationTime: "40 minutes",
    dietaryRestrictions: ["Lactose intolerant"],
    description: "A creamy Italian pasta dish with tender chicken, fettuccine pasta, and a rich Alfredo sauce made with heavy cream and parmesan cheese.",
    rating: 4,
    foodId: `food11`,
    addedToFav: false
  },
  {
    name: "Beef Burger",
    ingredients: ["ground beef", "burger buns", "lettuce", "tomato", "cheddar cheese", "onion", "pickles"],
    processToPrepare: [
      "Form ground beef into patties, season with salt and pepper.",
      "Grill or fry patties until cooked to desired doneness.",
      "Toast burger buns on the grill or in a toaster.",
      "Assemble burgers with lettuce, tomato, cheddar cheese, onion, and pickles.",
      "Serve hot with ketchup and mustard."
    ],
    cuisine: "American",
    preparationTime: "20 minutes",
    dietaryRestrictions: ["Gluten intolerant"],
    description: "Classic American beef burgers with juicy patties, fresh vegetables, and cheddar cheese, served on toasted burger buns with condiments.",
    rating: 4,
    foodId: `food12`,
    addedToFav: false
  },
  {
    name: "Chocolate Brownies",
    ingredients: ["chocolate", "butter", "sugar", "eggs", "flour", "vanilla extract"],
    processToPrepare: [
      "Melt chocolate and butter together until smooth.",
      "Beat eggs and sugar until light and fluffy.",
      "Mix melted chocolate into the egg mixture.",
      "Fold in flour and vanilla extract until just combined.",
      "Pour batter into a greased baking pan, spread evenly.",
      "Bake in a preheated oven until a toothpick inserted comes out with a few moist crumbs.",
      "Let cool before cutting into squares."
    ],
    cuisine: "International",
    preparationTime: "45 minutes",
    dietaryRestrictions: ["Contains dairy"],
    description: "Rich and decadent chocolate brownies with a fudgy texture, perfect for chocolate lovers. Enjoy as a dessert or sweet treat.",
    rating: 5,
    foodId: `food13`,
    addedToFav: false
  },
  {
    name: "Greek Salad",
    ingredients: ["cucumber", "tomatoes", "red onion", "kalamata olives", "feta cheese", "olive oil"],
    processToPrepare: [
      "Dice cucumber, tomatoes, and red onion into bite-sized pieces.",
      "Add kalamata olives and crumbled feta cheese.",
      "Drizzle with olive oil, toss gently to combine.",
      "Season with salt and pepper to taste.",
      "Serve chilled as a refreshing salad or side dish."
    ],
    cuisine: "Greek",
    preparationTime: "15 minutes",
    dietaryRestrictions: ["Contains dairy"],
    description: "A refreshing Greek salad with crisp cucumber, juicy tomatoes, tangy feta cheese, and kalamata olives, drizzled with olive oil.",
    rating: 4,
    foodId: `food14`,
    addedToFav: false
  },
  {
    name: "Vegetable Stir-Fry",
    ingredients: ["assorted vegetables (bell peppers, broccoli, carrots)", "tofu", "soy sauce", "ginger", "garlic"],
    processToPrepare: [
      "Cut vegetables and tofu into bite-sized pieces.",
      "Heat oil in a wok or skillet, stir-fry ginger and garlic until fragrant.",
      "Add vegetables and tofu, stir-fry until vegetables are tender-crisp.",
      "Season with soy sauce, toss well to combine.",
      "Serve hot with steamed rice or noodles."
    ],
    cuisine: "Asian",
    preparationTime: "30 minutes",
    dietaryRestrictions: ["Contains soy"],
    description: "A healthy and colorful Asian stir-fry with assorted vegetables and tofu, seasoned with ginger, garlic, and soy sauce. Perfect for veggie lovers.",
    rating: 4,
    foodId: `food15`,
    addedToFav: false
  },
  {
    name: "Ratatouille",
    ingredients: ["eggplant", "zucchini", "bell peppers", "onion", "garlic", "tomato sauce", "herbs de Provence"],
    processToPrepare: [
      "Dice eggplant, zucchini, and bell peppers into small cubes.",
      "Sauté onion and garlic until translucent.",
      "Add diced vegetables and herbs de Provence, cook until vegetables are tender.",
      "Stir in tomato sauce, simmer for flavors to meld.",
      "Serve hot as a side dish or main course."
    ],
    cuisine: "French",
    preparationTime: "45 minutes",
    dietaryRestrictions: ["Gluten intolerant", "Contains garlic"],
    description: "A classic French vegetable stew with eggplant, zucchini, bell peppers, and tomatoes, seasoned with herbs de Provence. A rustic and hearty dish.",
    rating: 4,
    foodId: `food16`,
    addedToFav: false
  },
  {
    name: "Tiramisu",
    ingredients: ["ladyfingers", "espresso", "mascarpone cheese", "eggs", "sugar", "cocoa powder"],
    processToPrepare: [
      "Brew espresso and let it cool.",
      "Separate egg yolks and whites.",
      "Whisk egg yolks with sugar until pale and fluffy.",
      "Fold in mascarpone cheese until smooth.",
      "Beat egg whites until stiff peaks form, fold into mascarpone mixture.",
      "Quickly dip ladyfingers into espresso, layer in a dish.",
      "Spread mascarpone mixture over ladyfingers, repeat layers.",
      "Chill tiramisu for several hours, dust with cocoa powder before serving."
    ],
    cuisine: "Italian",
    preparationTime: "1 hour",
    dietaryRestrictions: ["Contains dairy", "Contains raw eggs"],
    description: "An elegant Italian dessert with layers of espresso-soaked ladyfingers and creamy mascarpone cheese, dusted with cocoa powder. Delightfully rich and decadent.",
    rating: 5,
    foodId: `food17`,
    addedToFav: false
  },
  {
    name: "Gyoza",
    ingredients: ["ground pork", "cabbage", "garlic", "ginger", "soy sauce", "gyoza wrappers"],
    processToPrepare: [
      "Finely chop cabbage, garlic, and ginger.",
      "Mix ground pork with chopped ingredients and soy sauce.",
      "Place a spoonful of filling onto a gyoza wrapper, fold and pleat to seal.",
      "Pan-fry gyozas until golden and crisp on the bottom.",
      "Steam gyozas with water until filling is cooked through.",
      "Serve hot with dipping sauce."
    ],
    cuisine: "Japanese",
    preparationTime: "45 minutes",
    dietaryRestrictions: ["Contains pork"],
    description: "Japanese dumplings filled with seasoned ground pork and vegetables, pan-fried until crispy and steamed to perfection. Served with a savory dipping sauce.",
    rating: 4,
    foodId: `food18`,
    addedToFav: false
  },
  {
    name: "Chicken Shawarma",
    ingredients: ["chicken thighs", "yogurt", "lemon juice", "garlic", "spices", "pita bread", "tahini sauce"],
    processToPrepare: [
      "Marinate chicken thighs in yogurt, lemon juice, garlic, and spices.",
      "Grill or roast marinated chicken until cooked through and slightly charred.",
      "Slice chicken into thin strips.",
      "Warm pita bread, fill with chicken strips and drizzle with tahini sauce.",
      "Serve immediately with salad or pickles."
    ],
    cuisine: "Middle Eastern",
    preparationTime: "1 hour",
    dietaryRestrictions: ["Lactose intolerant"],
    description: "A flavorful Middle Eastern street food featuring marinated grilled chicken wrapped in soft pita bread with tahini sauce. A popular and satisfying dish.",
    rating: 4,
    foodId: `food19`,
    addedToFav: false
  },
  {
    name: "Pasta Primavera",
    ingredients: ["pasta", "assorted vegetables (bell peppers, zucchini, cherry tomatoes)", "garlic", "olive oil", "parmesan cheese", "fresh herbs"],
    processToPrepare: [
      "Cook pasta according to package instructions.",
      "Sauté assorted vegetables and garlic in olive oil until tender-crisp.",
      "Toss cooked pasta with sautéed vegetables, parmesan cheese, and fresh herbs.",
      "Season with salt and pepper to taste.",
      "Serve hot as a colorful and vibrant pasta dish."
    ],
    cuisine: "Italian",
    preparationTime: "30 minutes",
    dietaryRestrictions: ["Contains dairy"],
    description: "An Italian pasta dish with vibrant sautéed vegetables, tossed with pasta and parmesan cheese. Fresh and flavorful, perfect for any season.",
    rating: 4,
    foodId: `food20`,
    addedToFav: false
  }
];
