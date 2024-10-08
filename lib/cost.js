import config from 'lib/config'

export const is_weekend = (date) => {
    return date.getDay() === 5 || date.getDay() === 6 ? true : false
}

const get_custom_price_from_config = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
  
    if (config.costs.custom[year]) {
      if (config.costs.custom[year][month]) {
        if (config.costs.custom[year][month][day]) {
          return config.costs.custom[year][month][day]
        }
        if (
          is_weekend(date) &&
          config.costs.custom[year][month]['default_weekend']
        ) {
          return config.costs.custom[year][month]['default_weekend']
        }
        if (
          !is_weekend(date) &&
          config.costs.custom[year][month]['default_weekday']
        ) {
          return config.costs.custom[year][month]['default_weekday']
        }
      }
    }
  
    return null
  }
  
  export function getCost(date) {
    let price = config.costs.default_weekday
  
    if (is_weekend(date)) {
      price = config.costs.default_weekend
    }
  
    if (get_custom_price_from_config(date)) {
      price = get_custom_price_from_config(date)
    }
  
    return price
  }

  export const calcTotalCostOfStay = (startDate, endDate) => {
    let cost = 0

    const theDate = new Date(startDate)

    cost+=getCost(startDate)

    while (theDate < endDate) {
      theDate.setDate(theDate.getDate() + 1)
      cost+= getCost(theDate)
    }

    return cost
  }