const namedayProject = [
    {
        photo: 'ilona',
        title: 'Name Day Project no.0120 Ilona',
        description: ['Ilona means “torch” (from ancient Greek “helánē/ἑλάνη”) and “beautiful”, “light”, “bright” and “shining” (from ancient Greek “hēlios/ἥλιος” = sun/sunlight/sunshine).'],
    },
    {
        photo: 'bela',
        title: 'Name Day Project no.0121 Běla',
        description: [`Bela means “noble bright” and “noble shining” (from Adalbert) and “white” (from Slavic “bělŭ/бѣлъ”). For girls, Bela means “God is abundance”, “God is my oath” and “God has sworn.`, `
        With shining and white, with the unique day of 21.01.2021, Běla is an unique existence`]
    },
    {
        photo: 'slavomir',
        title: 'Name Day Project no.0122 Slavomír',
        description: [`Slavomír is of Slavic origin, composed of two Proto-Slavic elements: “sláva ‎(сла́ва)”, meaning “glory, fame, renown, honor, repute, reputation” plus “*mir" (*mirъ) mir ‎(мир)”, meaning “peace, calm, tranquility, universe, world”.
        01.22.21 is a palindrome date, filled with peace and glory universe.`]
    },
    {
        photo: 'zdenek',
        title: 'Name Day Project no.0123 Zdeněk',
        description: [`Zdeněk, the name of Slavic origin, composed of two Proto-Slavic elements: “zídati (зи́дати)” (to build, to create, construct) plus “sláva (сла́ва)” (glory, fame, renown, honor, repute, reputation).`, `On this palindrome date 01.23.21 means “created with glory, glory of creation”.`]
    },
    {
        photo: 'milena',
        title: 'Name Day Project no.0124 Milena',
        description: [`Milena is a name of Czech origin meaning "love, warmth, grace".
        The name is filled with power of love.`]
    },
    {
        photo: 'milos',
        title: 'Name Day Project no.0125 Miloš',
        description: [`Miloš means lover of glory.
        Feeling in love.`]
    },
    {
        photo: 'zora',
        title: 'Name Day Project no.0126 Zora',
        description: [`Zora means dawn and is of Slavic origin.`, `Be patient where you sit in the dark. The dawn is coming.`]
    },
    {
        photo: 'ingrid',
        title: 'Name Day Project no.0127 Ingrid',
        description: [`The name Ingrid is a girl's name of Norse origin meaning "fair; Ing is beautiful".`, `Elegance is the only beauty that never fades.`]
    },
    {
        photo: 'otylie',
        title: 'Name Day Project no.0128 Otýlie',
        description: [`Otýlie probably derives from the Germanic (Langobardic) name “Auda”, from the Ancient Germanic “*audaz”, meaning “prosperity, fortune, riches, wealth, heiress” or from "*ōþ- > uodil", meaning “One's ancestral land, homeland, home, territory”.`, `Art Deco is also filled with prosperity, riches atmosphere.`]
    },
    {
        photo: 'zdislava',
        title: 'Name Day Project no.0129 Zdislava',
        description: [`Zdislava is of Slavic origin, composed of two Proto-Slavic elements: “zídati (зи́дати)” (to build, to create, construct) plus “sláva (сла́ва)” (glory, fame, renown, honor, repute, reputation). In turn the name means “created with glory, glory of creation”.`, `Glory of creation is shinnig.`]
    },
].map(nameObj => ({ ...nameObj, tags: ['Adobe Illustrator', 'Font Design', 'Poster Design'], icons: 'ai', photo: `graphics/nameday/${nameObj.photo}`}))


const christmasProject = [1, 2, 3, 4, 5, 6].map(number => ({
    title: 'Veselé Vánoce',
    description: [`Custom digital portrait drawing from photo
    Christmas is the festivals regardless of race, culture, filled with joy and love.`, `• Image reference by IU (K-pop singer)`, `• Turn hair decorations into Christmas related icons. `],
    photo: `graphics/christmas/christmas-${number}`,
    tags: ['Adobe Illustrator', 'Digital drawing', 'Falt Art', 'Christmas'],
    icons: ['ai']
}));

const pantoneProject = [1, 2, 3, 4, 5, 6].map(number => ({
    title: 'Pantone Color of the Year 2021',
    description: [
        `Custom digital portrait drawing from photo`,
        `• illuminating & ultimate gray are Pantone 2021 color of the year`,
        `• Image reference by IU (K-pop singer)`
    ],
    photo: `graphics/pantone/pantone-${number}`,
    tags: ['Adobe Illustrator', 'Digital drawing', 'Falt Art', 'Pantone'],
    icons: ['ai']
}));

const doshaBusinessCardProject = [1, 2, 3, 4, 5, 6].map(number => ({
    title: 'Business card',
    description: [`Dosha.design business card design.`,
        `Dosha means “thank you” in Taiwanese.`,
        `Design is not limited to artistic elements; it is more of an integrated part of life`, `Design with a grateful heart, let the design warm your heart more.`, `Dosha Design.`],
    photo: `graphics/businessCard/card-${number}`,
    tags: ['Adobe Illustrator', 'Digital drawing', 'Business card design', 'Banner design'],
    icons: ['ai', 'ps'],
}));

const parallelWorld = [1, 2, 3, 4, 5].map(number => ({
    title: '2150’s Parallel World',
    description: [`•  Inspired by Movie "The Fifth Elements"`,
        `Two parallel worlds reflect comic and space world. Stella & Eris, the characters from two worlds. The story began on Eris visited the comic side unexpectedly...`,
        `Design is not limited to artistic elements; it is more of an integrated part of life`, `Design with a grateful heart, let the design warm your heart more.`, `Dosha Design.`],
    photo: `graphics/parallel/parallel-${number}`,
    tags: ['Photoshop', 'Fashion stylist'],
    icons: ['ps'],
}));

const digitalFashion = [1, 2, 3, 4, 5, 6].map(number => ({
    title: '3D Digital Fashion Garment',
    description: [`We are not only using technologies nowadays, but we also live with it.`],
    photo: `graphics/digitalFashion/digitalFashion-${number}`,
    tags: ['Photoshop', 'CLO 3D',],
    icons: ['ps', 'clo3d'],
}));

const liquidIllusion = [{
    title: 'Liquid Illusion',
    photo: 'graphics/other/banner',
    description: ['Goldfish’s beautiful appearance is not a natural show, it is made by artificial breeding.'],
    tags: ['Photoshop', 'Moodboard'],
    icons: ['ps']
}];

export default [
    {
        name: 'Graphics',
        content: [
            [
                {
                    project: christmasProject,
                    index: 0,
                },
                {
                    project: doshaBusinessCardProject,
                    index: 0,
                },
                {
                    project: pantoneProject,
                    index: 0,
                },
                {
                    index: 0,
                    project: [{
                        photo: 'graphics/other/yulia-lee-logo',
                        title: 'Yulia Lee Personal logo',
                        description: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`],
                        tags: [],
                        icons: [],
                    }]
                },
                // {

                //     index: 0,
                //     project: [{
                //         title: 'Painting project',
                //         photo: 'ig-5',
                //         description: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`],
                //         tags: [],
                //         icons: [],
                //     }]
                // },
                {
                    project: namedayProject,
                    index: 6,
                },
            ],
            [
                {
                    project: namedayProject,
                    index: 0,
                },
                {
                    project: pantoneProject,
                    index: 2,
                },
                {
                    project: digitalFashion,
                    index: 0,
                },
                {
                    project: namedayProject,
                    index: 1,
                },
                {
                    project: liquidIllusion,
                    index: 0,
                },
                {
                    project: namedayProject,
                    index: 2,
                },
            ],
            [
                {
                    project: christmasProject,
                    index: 2,
                },
                {
                    project: parallelWorld,
                    index: 0,
                },
                {
                    project: christmasProject,
                    index: 4,
                },
                // {
                //     project: [{
                //         photo: 'colors-1',
                //         title: 'Postcard Painting',
                //         description: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`],
                //         tags: [],
                //         icons: [],
                //     }],
                //     index: 0,
                // },
            
                {
                    project: pantoneProject,
                    index: 4
                }
            ],
        ]
    },
    {
        name: 'Painting',
        content: [
            // [
            //     {
            //         title: 'Taipei Postcard',
            //         photos: ['taipei-1'],
            //         description: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`],
            //         stack: [],
            //     },
            //     {
            //         title: 'Fluffy Dog',
            //         photos: ['postcard-4'],
            //         description: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`],
            //         stack: [],
            //     },
            //     {
            //         title: 'Rabbit',
            //         photos: ['rabbit'],
            //         description: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`],
            //         stack: [],
            //     },
            //     {
            //         title: 'Postcard painting',
            //         photos: ['postcard-5'],
            //         description: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`],
            //         stack: [],
            //     },
            // ],
            // [
            //     {
            //         title: 'Fashion Design',
            //         photos: ['ig-2'],
            //         description: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`],
            //         stack: [],
            //     },
            //     {
            //         title: 'Virtual Garment',
            //         photos: ['ig-3'],
            //         description: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`],
            //         stack: [],
            //     }, {
            //         title: 'Virtual Garment',
            //         photos: ['image--025'],
            //         description: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`],
            //         stack: [],
            //     },
            //     {
            //         title: 'Graphic design',
            //         photos: ['ig-5'],
            //         description: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`],
            //         stack: [],
            //     },
            //     {
            //         title: 'St. Petersburg',
            //         photos: ['postcard-2'],
            //         description: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`],
            //         stack: [],
            //     },
            // ],
            // [
            //     {
            //         title: '520 Holiday',
            //         photos: ['postcard-1'],
            //         description: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`],
            //         stack: [],
            //     },
            //     {
            //         title: 'Pattern Design',
            //         photos: ['05'],
            //         description: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`],
            //         stack: [],
            //     },
            //     {
            //         title: 'Pattern',
            //         photos: ['image--015'],
            //         description: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`],
            //         stack: [],
            //     },
            // ],
        ]
    },
    {
        name: 'Fashion',
        content: [
            // [{
            //     title: 'Garment Design',
            //     photos: ['image--015'],
            //     description: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`],
            //     stack: []
            // }, {
            //     title: 'Garment Design',
            //     photos: ['13'],
            //     description: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`],
            //     stack: []
            // },
            // {
            //     title: 'Garment Design',
            //     photos: ['14'],
            //     description: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`],
            //     stack: []
            // },
            // {
            //     title: 'Garment Design',
            //     photos: ['image--017'],
            //     description: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`],
            //     stack: []
            // },
            // {
            //     title: 'Garment Design',
            //     photos: ['image--021'],
            //     description: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`],
            //     stack: []
            // },
            // {
            //     title: 'Garment Design',
            //     photos: ['image--022'],
            //     description: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`],
            //     stack: []
            // },
            // {
            //     title: 'Garment Design',
            //     photos: ['image--023'],
            //     description: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`],
            //     stack: []
            // }

            // ],
            // [{
            //     title: 'Garment Design',
            //     photos: ['16'],
            //     description: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`],
            //     stack: []
            // }, {
            //     title: 'Garment Design',
            //     photos: ['17'],
            //     description: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`],
            //     stack: []
            // },
            // {
            //     title: 'Garment Design',
            //     photos: ['18'],
            //     description: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`],
            //     stack: []
            // }],
            // [{
            //     title: 'Garment Design',
            //     photos: ['19'],
            //     description: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`],
            //     stack: []
            // }, {
            //     title: 'Garment Design',
            //     photos: ['20'],
            //     description: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`],
            //     stack: []
            // },
            // {
            //     title: 'Garment Design',
            //     photos: ['image--017'],
            //     description: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`],
            //     stack: []
            // },
            // {
            //     title: 'Garment Design',
            //     photos: ['image--018'],
            //     description: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`],
            //     stack: []
            // },
            // {
            //     title: 'Garment Design',
            //     photos: ['image--019'],
            //     description: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`],
            //     stack: []
            // }

            // ]
        ]
    }
]
