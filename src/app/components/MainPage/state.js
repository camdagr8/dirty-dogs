/**
 MainPage Initial State
*/

export default {
    header: {
        backgroundImage: 'url(/assets/images/head.png)',
        social: {
            links: [
                {
                    to: 'https://www.instagram.com/explore/tags/hotdogs',
                    icon: '/assets/images/icon-instagram.png',
                    label: '#hotdogs',
                }
            ]
        }
    },

    nav: {
        buttons: [
            {type: 'nav', exact: true, to: '/menu', label: 'Menu'},
            {type: 'nav', exact: true, to: '/catering', label: 'Catering'},
            {type: 'nav', exact: true, to: '/about', label: 'About Us'},
            {type: 'nav', exact: true, to: '/contact', label: 'Contact'}
        ]
    },

    hero: {
        icon: '/assets/images/icon-hotdog.png',
        cta: {
            to: '/catering',
            type: 'link',
            children: ['More Dogs ‘n Make Em Hot'],
        },
        content: [
            'Dirty Dogs serves all-beef, vegan and',
            'vegetarian hot dogs.',
        ]
    },

    features: {
        layout: [
            'col-xs-12 col-md-6',
            'col-xs-12 col-md-6'
        ],
        items: [
            {backgroundImage: 'url(/assets/images/feature-01.png)', caption: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.', title: 'Gourmet All Beef Hotdogs'},
            {backgroundImage: 'url(/assets/images/feature-02.png)', caption: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.', title: 'Vegan Hotdogs'},
            {backgroundImage: 'url(/assets/images/feature-03.png)', caption: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.', title: 'Vegetarian Hotdogs'},
        ]
    },

    footer: {
        year: (new Date()).getFullYear(),
        nav: [
            {label: '274 Marconi Blvd. Columbus, Ohio 43215'},
            {label: '614.538.0095'},
            {label: 'Contact Us', url: '/contact'}
        ]
    },
};
