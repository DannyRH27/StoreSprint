import { combineReducers } from "redux";
import stores from './stores_reducer';
import menus from './menu_reducers';
import items from './items_reducer';
import modalItem from  './modal_item_reducer';

const entitiesReducer = combineReducers({
    stores,
    menus,
    items,
    modalItem
});

export default entitiesReducer;