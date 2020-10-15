type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {}

  on(eventName: string, callBack: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callBack);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName] || [];

    handlers.forEach(cb => cb());
  }
}