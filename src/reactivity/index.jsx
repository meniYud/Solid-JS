const context = [];

function subscribe(observer, subscriptions){

    subscriptions.add(observer)
    observer.dependencies.add(subscriptions)

}
function cleanup(observer){
    for(const dep of observer.dependencies){
        dep.delete(observer)
    }
    observer.dependencies.clear()
}

export function createSignal(value) {
    const subscriptions = new Set();

    const read = () => {
        const observer = context[context.length - 1]
        if(observer) subscribe(observer, subscriptions)
        return value
    };
    const write = (newValue) => {
        value = newValue

        for(const observer of [...subscriptions]){
            observer.execute()
        }

    };
    
    return [read, write]
}

export function createEffect(fn) {
    const effect = {
        execute() {
            cleanup(effect)
            context.push(effect);
            fn();
            context.pop();

        },
        dependencies: new Set()
    }

    effect.execute()
}