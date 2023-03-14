import { appState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";
import { Pop } from "../Utils/Pop.js";

function _drawHouses() {
    console.log('drawing houses');
}


export class HousesController {

    constructor() {
        console.log('hello from the houses controller');
        this.getAllHouses()
    }

    async getAllHouses() {
        try {
            await housesService.getAllHouses()
        } catch (error) {
            console.log(error)
            Pop.error(error)
        }
    }

}