export abstract class Component {
    render(selector: string, template: string) {
        const element = document.querySelector(selector);
        if (element === null) return false;
        element.innerHTML = template;
        return true;
    }

    renderAdd(selector: string, template: string) {
        const element = document.querySelector(selector);
        if (element === null) return false;
        element.innerHTML += template;
        return true;
    }
    renderOuter(selector: string, template: string) {
        const element = document.querySelector(selector);
        if (element === null) return false;
        element.outerHTML = template;
        return true;
    }
}
