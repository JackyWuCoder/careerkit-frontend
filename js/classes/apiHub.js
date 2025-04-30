export { APIHub }

class APIHub {

    static #backendDomain = "http://localhost:5240"
    static #autofillEndpoint = "/api/v1/coverLetter/generate/template";

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