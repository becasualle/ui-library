import Tooltip from './mark-ui/tooltip';
import Dropdown from './mark-ui/dropdown';
import Tabs from './mark-ui/tabs';
import Snackbar from './mark-ui/snackbar';

// create a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));

tooltip.init();

// create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
});

// create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

// create snackbar
const snackbar = new Snackbar();
snackbar.init();

// show snackbar
const button = document.querySelector('.snackbar-trigger');
button.addEventListener('click', ()=>{
    snackbar.show('I know, people love pop-ups');
})