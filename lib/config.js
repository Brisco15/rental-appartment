export default {
    costs: {
        default_weekday: 30, // default week day price
        default_weekend: 50, //for Friday and Saturday nights

        custom: {
        2023: {
           8: {
             default_weekday: 70, //for the entire month of august, weekends are 70
             default_weekend: 170, //for the entire month of august, weekends are 170
             24: 100,
             25: 100,

            },
        },
        },
    },
    blocked: {
        2023: {
            8: [20, 21, 22], //block these days in August
        },
    },
    booked: {
        2023: {
            8: [17, 24, 25], // these days in August are reserved
        },
    },
}