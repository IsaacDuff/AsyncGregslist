import { appState } from "../AppState.js";
import { House } from "../Models/House.js";

export const sandbox = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api'
})

class HousesService {


    async createHouse(formData) {
        const res = await sandbox.post('houses', formData)
        console.log('[creating house]', res.data);
        const newHouse = new House(res.data)
        appState.houses.push(newHouse)
        appState.emit('houses')
    }


    async getAllHouses() {
        const res = await sandbox.get('houses')
        console.log('[All House]', res.data)
        appState.houses = res.data.map(house => new House(house))
        console.log(appState.houses);
    }

    async deleteHouse(id) {
        const res = await sandbox.delete(`houses/${id}`)
        console.log('[deleted house]', res.data);
        appState.houses = appState.houses.filter(house => house.id != id)
    }

    async updateHouse(id, editData) {
        const res = await sandbox.put(`houses/${id}`, editData)
        console.log('[editing house]', res.data)
        const updateIndex = appState.houses.findIndex(house => house.id == id)
        appState.houses.splice(updateIndex, 1, new House(res.data))
        appState.emit('houses')
    }
}

export const housesService = new HousesService()