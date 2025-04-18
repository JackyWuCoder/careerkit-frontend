export { APIHub }

class APIHub {

    static #backendDomain = "Domain here"
    static #autofillEndpoint = "/EP Here";

    static async generateCoverLetter(body) {
        const endpoint = this.#backendDomain + this.#autofillEndpoint;
        try {
            const response = await fetch(endpoint, this.#buildPayload("POST", body));
            if (response.status === 200) {
                const data = await response.json();
                return data.letter;

            } else return null;

        } catch(e) {
            return null;
        }
    }

    static #buildPayload(method, body) {
        const payload = new Object();
        payload.method = method;
        if (body) payload.body = body;

        payload.headers = {
            "Content-Type": "application/json"
        };
        return payload;
    }
}