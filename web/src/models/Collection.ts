import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

export class Collection<T, K> {
    models: T[] = [];
    events: Eventing = new Eventing();

    constructor(
        public rootUrl: string,
        public deserealize: (json: K) => T 
    ) {}

    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    fetch() {
        axios.get(this.rootUrl)
        .then((response: AxiosResponse): void => {
            response.data.forEach((attrs: K) => {
                const user = this.deserealize(attrs);
                this.models.push(user);
            });
            this.trigger('change');
        });
    }
}