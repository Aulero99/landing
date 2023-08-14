import { reactive } from 'vue'

export const AppState = reactive({
    navOpen: false,
    scrollPosition: 0,
    activePage:{dest:'landing', orig:'landing', hover: false},
    portfolio:[
        {
            name:'keepr',
            img:'src/assets/img/keepr/keepr_full.jpg', 
            logo:'src/assets/img/keepr/logo.svg', 
            description: 'Lets be honest, the world doesn’t need another Pintrest clone, but I went and made one anyway.',
            tech: ['Vue','Sass','.Net','Auth0'],
            github: 'https://github.com/Aulero99/keeper',
            url: null,
        },
        {
            name:'Recipeasy',
            img:'src/assets/img/keepr/keepr_1080.jpg', 
            logo:'src/assets/img/keepr/logo.svg', 
            description: 'Starting its life out as Fridge, then becoming Cooking Compass, then finally settling as Recipeasy, this app has gone through a lot to become what it is today. While still in development, it is an app that allows the users to store their food in their pantry, tracks how good that food is, then suggests recipes to the user based on the food they have alongside their dietary preferences. Once the user finds a recipe, they simply press a button and the recipe ingredients are subtracted from their pantry, and if they run out it automatically adds them to their shopping list.',
            tech: ['Vue','CSS','Node Js','Auth0'],
            github: 'https://github.com/Aulero99/Recipeasy',
            url: null,
        },
        {
            name:'JOT',
            img:'src/assets/img/keepr/keepr_1080.jpg', 
            logo:'src/assets/img/keepr/logo.svg', 
            description: 'This is one of my original projects from my time as enrolled in Codeworks and is my first project using the MVC design pattern. The app is barebones, uses no modern tech like Vue or React, and only uses local storage, but I think it is a solid foundation for a note taking app.',
            tech: ['HTML','CSS','Javascript'],
            github: 'https://github.com/Aulero99/checkpoint3',
            url: 'https://aulero99.github.io/checkpoint3/',
        },
        {
            name:'Playground',
            img:'src/assets/img/keepr/keepr_1080.jpg', 
            logo:'src/assets/img/keepr/logo.svg', 
            description: "Want to see what I'm working on right now? Head on over to my playground to see what wacky stuff I'm cooking up right now!",
            tech: [],
            github: 'https://github.com/Aulero99/playground',
            url: null,
        }
    ]
})