import { reactive } from 'vue'

export const AppState = reactive({
    scrollPosition: 0,
    activePage:{dest:'landing', orig:'landing', hover: false},
    portfolio:[
        {
            name:'keepr',
            img:'src/assets/img/keepr/keepr_full.jpg', 
            logo:'src/assets/img/keepr/logo.svg', 
            description: 'Lets be honest, the world doesn’t need another pintrest clone, but I went and made one anyway.',
            tech: ['Vue','Sass','.Net','Auth0'],
            github: '#',
            url: '#',
        },
        {
            name:'Tower',
            img:'src/assets/img/keepr/keepr_1080.jpg', 
            logo:'src/assets/img/keepr/logo.svg', 
            description: 'description for keepr2',
            tech: ['Vue','CSS','Node Js','Auth0'],
            github: '#',
            url: null,
        },
        {
            name:'JOT',
            img:'src/assets/img/keepr/keepr_1080.jpg', 
            logo:'src/assets/img/keepr/logo.svg', 
            description: 'description for keepr3',
            tech: ['HTML','CSS','Javascript'],
            github: null,
            url: null,
        },
        {
            name:'Num4',
            img:'src/assets/img/keepr/keepr_1080.jpg', 
            logo:'src/assets/img/keepr/logo.svg', 
            description: 'description for keepr4',
            tech: [],
            github: null,
            url: null,
        }
    ]
})