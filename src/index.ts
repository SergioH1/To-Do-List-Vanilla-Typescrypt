import { Footer } from './components/footer.js';
import { Header } from './components/header.js';
import { Main } from './components/main.js';
import { TaskList } from './components/task.list.js';
import { TASKS } from './models/data.js';

new Header('body');
new Main('body');
new TaskList('main');
new Footer('body');
