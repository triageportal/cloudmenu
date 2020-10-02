export const restaurant = {
    name: 'Buongiorno',
    info: {
        address: {},
        phone: '',
        web: '',
        email: '',
        hours: '',
        social: [
            {
                name: 'twitter',
                link: ''
            },
            {
                name: 'Facebook',
                link: ''
            },
        ]
    },
    menu: [
        {
            type: "Lunch",
            description: 'Lunch served 11am-4pm',
            submenu: [
                {
                    name: 'salads',
                    description: 'Served with 2 rolls',
                    items: [
                        {
                            name: 'Garden salad',
                            description: 'Lettuce, tomat, itd',
                            price: '$9.99',
                            priceArr: [
                                {
                                    amount: '',
                                    size: ''
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'salads',
                    description: 'Served with 2 rolls',
                    items: [
                        {
                            name: 'Garden salad',
                            description: 'Lettuce, tomat, itd',
                            price: '$9.99',
                            priceArr: [
                                {
                                    amount: '',
                                    size: ''
                                }
                            ]
                        }
                    ]
                },
            ]
        },
        {
            type: 'Regular',
            description: '',
            submenu: [
                {
                    name: 'PIZZA',
                    description: 'Hand tossed new york style',
                    items: [
                        {
                            name: 'Regular',
                            description: 'New york style',
                            price: '',
                            priceArr: [
                                {
                                    amount: '$9.99',
                                    size: 'Small 12"'
                                },
                                {
                                    amount: '$12.99',
                                    size: 'Medium 14"'
                                }
                            ]
                        }
                    ],
                    modifiers: [
                        {
                            name: 'toppings',
                            category: [
                                {
                                    name: 'veggie',
                                    price: '$2.99',
                                    items: [
                                        'broccoli', 'mush'
                                    ]
                                },
                                {
                                    name: 'meat',
                                    price: '$2.99',
                                    items: [
                                        'roni', 'meatball'
                                    ]
                                }
                            ]
                            
                        }
                    ]
                },
            ]
        },
    ]
}