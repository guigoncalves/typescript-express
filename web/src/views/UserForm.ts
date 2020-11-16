import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
    
    eventsMap(): { [eventKey: string]: () => void } {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick,
            'click:.save-user': this.onSaveUserClick
        }
    }

    onSaveUserClick = () => {
        this.model.save();
    }

    onSetAgeClick = (): void => {
        this.model.setRandomAge();
    }

    onSetNameClick = (): void => {
        const input = this.parent.querySelector('input');
        
        if(input) {
            const name = input.value;
            this.model.set({ name });
        }
    }

    template() {
        return `
        <div>
            <input placeholder=${this.model.get('name')} />
            <button class="set-name">Set Name</button>
            <button class="set-age">Random Age</button>
            <button class="save-user">Save User</button>
        </div>
        `;
    }

}