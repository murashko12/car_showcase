// import axios from 'axios'

// const options = {
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/cars',
//     params: { model: 'camry' },
//     headers: {
//         'X-Api-Key': 'ZEzVTZzetoDHxFKJvwnZ7g==Ok2YEiTd2kKRZD32'
//     }
// }

// try {
//     const response = await axios.request(options)
//     console.log(response.data)
// } catch (error) {
//     // @ts-ignore
//     console.error('Error:', error.response ? error.response.data : error.message)
// }

export async function fetchCars()  {
    const headers = {
        'X-Api-Key': 'ZEzVTZzetoDHxFKJvwnZ7g==Ok2YEiTd2kKRZD32'
    }

    const response = await fetch('https://api.api-ninjas.com/v1/cars?model=camry', {
        headers: headers
    })

    const result = await response.json()

    return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50
    const mileageFactor = 0.1
    const ageFactor = 0.05

    const mileageRate = city_mpg * mileageFactor
    const ageRate = (new Date().getFullYear() - year) * ageFactor

    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

    return rentalRatePerDay.toFixed(0)
}