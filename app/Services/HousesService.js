import { appState } from "../AppState.js";
import { House } from "../Models/House.js";

export const sandbox = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api'
})

class HousesService {

    constructor() {

    }

    async getAllHouses() {
        const res = await sandbox.get('houses')
        console.log('[All Houses}', res.data)
        appState.houses = res.data.map(house => new House(house))
        console.log(appState.houses);
    }

}

export const housesService = new HousesService()