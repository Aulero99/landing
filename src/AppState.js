import { reactive } from 'vue'

export const AppState = reactive({
    navOpen: false,
    breakPoint: 1180,
    modalOpen: false,
    screenX: 0,
    screenY: 0,
    scrollPosition: 0,
    activePage:{dest:'landing', orig:'landing', hover: false},
    portfolio:[
        {
            name:'keepr',
            img:'src/assets/img/keepr/keepr_full.jpg',
            img1080:'src/assets/img/keepr/keepr_1080.jpg',
            img600:'src/assets/img/keepr/keepr_600.jpg',
            img300:'src/assets/img/keepr/keepr_300.jpg',
            logo:'src/assets/img/keepr/keepr_logo.svg', 
            description: 'Lets be honest, the world doesn’t need another Pintrest clone, but I went and made one anyway. This one is built using vue and a .NET backend.',
            tech: ['Vue','Sass','.Net','Auth0'],
            favColor: '#bfbfbf',
            github: 'https://github.com/Aulero99/keeper',
            url: null,
        },
        {
            name:'JOT',
            img:'src/assets/img/jot/jot_full.jpg',
            img1080:'src/assets/img/jot/jot_1080.jpg',
            img600:'src/assets/img/jot/jot_600.jpg',
            img300:'src/assets/img/jot/jot_300.jpg',
            logo:'src/assets/img/jot/jot_logo.svg', 
            description: 'One of my original projects from my time as enrolled in CodeWorks and is my first project using the MVC design pattern. Just a solid foundation for a future note taking app.',
            tech: ['HTML','CSS','Javascript'],
            favColor: '#ffe894',
            github: 'https://github.com/Aulero99/checkpoint3',
            url: 'https://aulero99.github.io/checkpoint3/',
        },
        {
            name:'Recipeasy',
            img:'src/assets/img/recipeasy/recipeasy_full.jpg',
            img1080:'src/assets/img/recipeasy/recipeasy_1080.jpg',
            img600:'src/assets/img/recipeasy/recipeasy_600.jpg',
            img300:'src/assets/img/recipeasy/recipeasy_300.jpg',
            logo:'src/assets/img/recipeasy/recipeasy_logo.svg', 
            description: 'Recipeasy is an app that tracks how fresh the users food is, then suggests recipes based on that food. With a single button press the ingredients of a recipe are subtracted from the pantry and automatically updates shopping lists.',
            tech: ['Vue','Node Js','Auth0'],
            favColor: '#a22c2a',
            github: 'https://github.com/Aulero99/Recipeasy',
            url: null,
        },
        // {
        //     name:'Playground',
        //     img:'src/assets/img/playground/playground_full.jpg',
        //     img1080:'src/assets/img/playground/playground_1080.jpg',
        //     img600:'src/assets/img/playground/playground_600.jpg',
        //     img300:'src/assets/img/playground/playground_300.jpg',
        //     logo:'src/assets/img/playground/playground_logo.svg', 
        //     description: "Want to see what I'm working on right now? Head on over to my playground to see what wacky stuff I'm cooking up right now!",
        //     tech: [],
        //     favColor: '#ff8901',
        //     github: 'https://github.com/Aulero99/playground',
        //     url: null,
        // }
    ]
})