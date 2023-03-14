import { appState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";
import { House } from "../Models/House.js";
import { getFormData } from "../Utils/FormHandler.js";

function _drawHouses() {
    console.log('drawing houses');
    const houses = appState.houses
    let template = ''
    houses.forEach(house => template += house.HouseCard)
    setHTML('listings', template)
}


export class HousesController {

    constructor() {
        console.log('hello from the houses controller');
        // this.getAllHouses()
        this.viewHouses()
        appState.on('houses', _drawHouses)
    }

    viewHouses() {
        this.getAllHouses()
        setHTML('form', House.DynamicHouseForm())
    }

    async getAllHouses() {
        try {
            await housesService.getAllHouses()
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }

    async createHouse() {
        try {
            event.preventDefault()
            const form = event.target
            const formData = getFormData(form)
            await housesService.createHouse(formData)
            bootstrap.Modal.getOrCreateInstance('#create-modal').hide()
            form.reset()
            Pop.toast(`Created Listing for ${formData.year} ${formData.price}`, 'success', 'bottom', 2000)
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }

}