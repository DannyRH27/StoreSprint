import React from "react";
import ReactTooltip from "react-tooltip";
import { GrCircleInformation } from "react-icons/gr";
class CheckoutDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      store: {},
      cart: {},
      tip: 'Please add a tip'
    }
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    const {
      fetchStores,
      fetchCart,
      fetchCartStore,
      cart,
      currentUser,
    } = this.props;
    fetchCart(currentUser.id).then((payload) => {
      this.setState({ cart: payload.cart})
      fetchCartStore(payload.cart.storeId)
        .then(payload => this.setState({ store: payload.payload}))
    });
  }

  placeOrder(){
    
  }

  onSelect(e){
    let value = e.target.innerHTML.split('$')
    this.setState({ tip: parseFloat(value[1])})
    console.log(parseFloat(value[1]))
    console.log(typeof parseFloat(value[1]))
  }

  render() {
    const { drawerClasses } = this.props;
    const { store, cart, tip } = this.state;
    let subtotal = 0
    if (Object.values(cart).length === 0 ) return null;
    Object.values(cart.contents).forEach((item) => {
      let item_subtotal = parseFloat(item.price) * parseFloat(item.quantity);
      subtotal += item_subtotal;
    });
    let buttonClass = null
    let tax = subtotal * 0.0875
    let service = subtotal * 0.11
    let fees = tax + service
    let baseTip = Math.round(subtotal * .1)
    let selectedTip = typeof tip === typeof "" ? <p>{tip}</p> : <p>${tip.toFixed(2)}</p>
    let total = typeof tip === typeof "" ? subtotal + fees : subtotal + fees + tip
    let tooltip = `Estimated Tax: $${tax.toFixed(2)}<br/>Service Fee: $${service}<br/><br/>This 11% service fee helps us<br/>operate DannyDash.`
    return (
      <nav
        onClick={(e) => e.stopPropagation()}
        className={drawerClasses.join(" ")}
        id="store-cart"
      >
        <div className="checkout-drawer-section">
          <div className="checkout-drawer-header">
            <h1>Order From</h1>
            <span>{store.name}</span>
          </div>
          <button className="checkout-drawer-button">Place Order</button>
          <div className="checkout-drawer-payment">
            <div className="payment-section">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <div className="payment-section">
              <div className="tax-details">
                <p>Fees and Estimated Tax</p>
                <ReactTooltip effect="solid" place="bottom" multiline={true} />
                <p data-tip={tooltip}>
                  <GrCircleInformation id="tooltip" />
                </p>
              </div>
              <p>${fees.toFixed(2)}</p>
            </div>
            <div className="payment-section">
              <p>Delivery</p>
              <p>Free</p>
            </div>
          </div>
        </div>
        <div className="checkout-drawer-section">
          <div className="payment-section">
            <p>Dasher Tip</p>
            {selectedTip}
          </div>
          <div className="tip-radio-inputs">
            <button onClick={this.onSelect} autoFocus>
              ${baseTip.toFixed(2)}
            </button>
            <button onClick={this.onSelect}>${(baseTip + 1).toFixed(2)}</button>
            <button onClick={this.onSelect}>${(baseTip + 2).toFixed(2)}</button>
            <button onClick={this.onSelect}>${(baseTip + 3).toFixed(2)}</button>
          </div>
          <div className="dasher-info">
            <p>
              The recommended Dasher tip is based on the delivery distance and
              effort. 100% of the tip goes to your Dasher.
            </p>
          </div>
        </div>
        <div className="checkout-drawer-section">
          <div className="payment-section">
            <p>Total</p>
            <p>{total.toFixed(2)}</p>
          </div>
        </div>
        <div id="final" className="checkout-drawer-section">
          <div className="payment-section">
            <p>Amount Due</p>
            <p>{total.toFixed(2)}</p>
          </div>
        </div>
      </nav>
    );
  }
}
export default CheckoutDrawer;