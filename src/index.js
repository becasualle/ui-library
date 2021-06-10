import Tooltip from './mark-ui/tooltip';
import Dropdown from './mark-ui/dropdown';

// create a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));

tooltip.init();

// create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
})
