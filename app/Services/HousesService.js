import { appState } from "../AppState.js";
import { House } from "../Models/House.js";

export const sandbox = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api'
})

class HousesService {

    // async createCar(formData) {
    //     // -----------------------------⬇️ endpoint
    //     // --------------------------------------⬇️ body (our data being sent up)
    //     const res = await sandbox.post('cars', formData)
    //     console.log('[Creating Car]', res.data)
    //     const newCar = new Car(res.data)
    //     appState.cars.push(newCar)
    //     appState.emit('cars')
    // }

    async createHouse(formData) {
        const res = await sandbox.post('houses', formData)
        console.log('[creating house]', res.data);
        const newHouse = new House(res.data)
        appState.houses.push(newHouse)
        appState.emit('houses')
    }


    async getAllHouses() {
        const res = await sandbox.get('houses')
        console.log('[All Houses}', res.data)
        appState.houses = res.data.map(house => new House(house))
        console.log(appState.houses);
    }

}

export const housesService = new HousesService()