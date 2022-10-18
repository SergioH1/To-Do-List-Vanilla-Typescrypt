import { TASKS } from '../models/data.js';
import { Task } from '../models/task.js';
import { AddTask } from './add.task.js';
import { Component } from './component.js';
export class TaskList extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.tasks = [...TASKS];
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
        new AddTask('slot#add-task');
        setTimeout(() => {
            var _a;
            (_a = document
                .querySelector('form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', this.handleAdd.bind(this));
            document
                .querySelectorAll('.eraser')
                .forEach((item) => item.addEventListener('click', this.handlerEraser.bind(this)));
        }, 100);
    }
    createTemplate() {
        let template = `<section>
                <h2>Tareas</h2>
                <slot id="add-task"></slot>
                <ul>`;
        this.tasks.forEach((item) => {
            template += `
            <li> ${item.id} - ${item.title} 
            <span class="eraser" data-id="${item.id}">🗑️</span>
            </li>`;
        });
        template += `</ul>
            </section>`;
        return template;
    }
    handleAdd(ev) {
        ev.preventDefault();
        const title = document.querySelector('#title')
            .value;
        const responsible = document.querySelector('#resp').value;
        this.tasks.push(new Task(title, responsible));
        this.manageComponent();
    }
    handlerEraser(ev) {
        const deletedID = ev.target.dataset.id;
        this.tasks = this.tasks.filter((item) => item.id !== +deletedID);
        this.manageComponent();
    }
}
