export default {
    costs: {
        default_weekday: 30, // default week day price
        default_weekend: 50, //for Friday and Saturday nights

        custom: {
        2023: {
           3: {
             default_weekday: 70, //for the entire month of March, weekends are 70
             default_weekend: 90, //for the entire month of March, weekends are 170
             24: 100,
             25: 100,

            },
            4: {
                default_weekday: 70, //for the entire month of April, weekends are 70
                default_weekend: 90, //for the entire month of April, weekends are 170
                24: 100,
                25: 100,
   
               },

        },
        },
    },
    blocked: {
        2023: {
            3: [20, 21, 22], //block these days in March
            4: [10, 13, 30], //block these days in April
        },

    },
    
}