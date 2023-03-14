

export class House {
    constructor(data) {
        this.id = data.id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this.color = data.color
    }


    get HouseCard() {
        return `
    <div class="col-6 col-md-4">
    <div class="bg-light rounded elevation-5">
        <img class="img-fluid" src="${this.imgUrl}" alt="${this.bedrooms} ${this.bathrooms} ${this.year}">
        <h5 class="p-2 text-center text-dark">Beds: ${this.bedrooms} | Baths: ${this.bathrooms} | Year: ${this.year}</h5>
        <p class="text-dark">Market Cost: ${this.price}</p>
        <button class="btn btn-danger" > <i class="mdi mdi-delete-forever"></i></button>
        <button class="btn btn-warning"  data-bs-toggle="modal"
        data-bs-target="#edit-modal"><i class="mdi mdi-pen"></i></button>
    </div>
    </div>
    `
    }

    // onclick="app.carsController.deleteCar('${this.id}')"
    // onclick="app.carsController.openEditCarForm('${this.id}')"


    static DynamicHouseForm() {
        return ` 
        <form onsubmit="app.housesController.createHouse()" class="row p-4">
        <h3>List a House</h3>
        <div class="mb-2 col-5">
            <label for="bedrooms">Bedrooms</label>
            <input type="number" name="bedrooms" id="bedrooms" class="form-control" required min="1" max="10">
        </div>
        <div class="mb-2 col-5">
            <label for="bathrooms">Bathrooms</label>
            <input type="number" name="bathrooms" id="bathrooms" class="form-control" required min="1" max="10"
            >
        </div>
        <div class="mb-2 col-5">
            <label for="year">Year</label>
            <input type="number" name="year" id="year" class="form-control" required min="1700" max="3000"
            value="2010">
        </div>
        <div class="mb-2 col-5">
        <label for="levels">Levels</label>
        <input type="number" name="levels" id="levels" class="form-control" required min="1" max="4">
        </div>
        <div class="mb-2 col-12">
            <label for="imgUrl">Image URL</label>
            <input type="url" name="imgUrl" id="imgUrl" class="form-control" required
            placeholder="please enter a url for an image...">
        </div>
        <div class="mb-2 col-12">
            <label for="description">Description</label>
            <input type="text" name="description" id="description" class="form-control" maxlength="50">
        </div>
        <div class="mb-2 col-6">
            <label for="color">Color</label>
            <input type="color" name="color" id="color" class="form-control" required value="#4747ff">
        </div>
        <div class="mb-2 col-6">
            <label for="price">Price</label>
            <input type="number" name="price" id="price" class="form-control" required min="1">
        </div>
        <div class="text-end mt-2">
            <button class="btn" type="button">cancel</button>
            <button class="btn btn-primary" type="submit">submit</button>
        </div>
        </form>`
    }
}