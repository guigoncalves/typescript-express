import { Model } from '../models/Model';
import { User } from '../models/User';

export abstract class View < T extends Model<K>, K> {

    regions: { [key: string]: Element } = {};

    abstract template(): string;

    constructor(public parent: Element, public model: T) {
        this.bindModel();
    }

    eventsMap(): { [eventKey: string]: () => void } {
        return { }
    }


    bindModel() {
        this.model.on('change', () => {
            this.render();
        });
    }

    bindEvents(fragment: DocumentFragment) {
        const eventMap = this.eventsMap();

        for(let eventKey in eventMap) {
            const [event, selector] = eventKey.split(':');
            
            fragment.querySelectorAll(selector).forEach((element: Element) => {
                element.addEventListener(event, eventMap[eventKey]);
            });
        }
    }

    mapRegions(fragment: DocumentFragment) {
        const regionsMap = this.regionsMap();

        for(let key in regionsMap) {
            const selector = regionsMap[key];
            const element = fragment.querySelector(selector);

            if(element)
                this.regions[key] = element;
        }
    }

    regionsMap(): { [key:string]: string } {
        return { };
    }
    
    onRender(): void {
    }

    render() {
        this.parent.innerHTML = '';

        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();
        
        this.bindEvents(templateElement.content);
        this.regionsMap();
        this.onRender();


        this.parent.append(templateElement.content);
    }
}