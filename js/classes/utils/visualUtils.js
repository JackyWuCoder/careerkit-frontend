export { LoadingWrapper }

class LoadingWrapper {

    #loadingImage; // img tag that holds image of loading icon
    #element; // original element thats to be swapped in once finished loading
    #originalDisplay; // original display property of the passed in swapped element

    constructor(loadingElement, toSwapElement = null) {
        this.#loadingImage = loadingElement;
        this.#element = toSwapElement;
        this.#originalDisplay = toSwapElement?.style.display;
    }

    show() {
        this.#loadingImage.style.display = "block";
        if (this.#element) this.#element.style.display = "none";
    }

    hide() {
        this.#loadingImage.style.display = "none";
        if (this.#element) this.#element.style.display = this.#originalDisplay;
    }

    swapLoadImage(imagePath) {
        this.#loadingImage.src = imagePath;
    }
}