import axios from 'axios';

export class API {

    constructor(private url:string | undefined) {
        if (url === undefined || url === "") {
            url = import.meta.env.VITE_API_URL;
        }
        if (url && url.endsWith("/")) {
            url = url.substr(0, url.length - 1)
        }
        this.url = url
    }

    withPath(path:string) {
        if (!path.startsWith("/")) {
            path = "/" + path
        }
        return `${this.url}${path}`
    }

    async getAllProducts() {
        return axios.get(this.withPath("/products"))
            .then(r => r.data);
    }
}

export default new API(import.meta.env.VITE_API_URL);