import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { fetchCart, updateCart } from "../../actions/cart_actions";
import NavBar from './nav_bar';


const mapStateToProps = ({entities, session}) =>{
    return {
        currentUser: session.currentUser,
        toggleSideBar: false,
        cart: entities.cart
    }
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchCart: (cartId) => dispatch(fetchCart(cartId))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);