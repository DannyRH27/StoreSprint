import { connect } from 'react-redux';
import {fetchMenus} from '../../actions/menu_actions'
import {fetchItems} from '../../actions/item_actions'
import { fetchStore, fetchStores } from '../../actions/store_actions';
import { selectReviewsForStore, selectStore} from '../../reducers/entities/selectors';
import StoreShow from './store_show'
import { openModal } from "../../actions/modal_actions";
import { receiveModalItem } from "../../actions/modal_item_actions";

const mapStateToProps = (state, { match }) => {
    const storeId = parseInt(match.params.storeId);
    const store = selectStore(state.entities, storeId);
    const menus = state.entities.menus;
    const items = state.entities.items;
    // const reviews = selectReviewsForStore(state.entities, store);
    return {
        storeId,
        store,
        menus,
        items
    };
};

const mapDispatchToProps = (dispatch) => ({
  fetchMenus: (id) => dispatch(fetchMenus(id)),
  fetchStore: (id) => dispatch(fetchStore(id)),
  fetchStores: () => dispatch(fetchStores()),
  fetchItems: (id) => dispatch(fetchItems(id)),
  openModal: () => dispatch(openModal()),
  receiveModalItem: (item) => dispatch(receiveModalItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoreShow);
