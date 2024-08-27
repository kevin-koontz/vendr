export class Snack {
  constructor(name, price, imgUrl) {
    this.name = name
    this.price = price
    this.imgUrl = imgUrl
  }

  get cardHTMLTemplate() {
    return /*html*/`
        <div class="col-12 d-flex justify-content-center">
          <div class="px-5 py-3 vendr-card">
            <p class="display-1">
              IMG
            </p>
            <div class="bg-dark text-light">
              <p class="fs-3">NAME</p>
              <p class="fs-5">PRICE</p>
              <button class="btn btn-primary p-3 fs-1">BUY HERE</button>
            </div>
          </div>
        </div>
        `
  }
}