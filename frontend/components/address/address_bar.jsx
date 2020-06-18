import React from 'react';
import AddressDropdown from './address_dropdown';

class AddressBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openDropdown: false
    }
    this.closeDropdown = this.closeDropdown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  

  closeDropdown() {
    this.setState({ openDropdown: false });
  }

  handleClick(e) {
    e.stopPropagation();
    let value = !this.state.openDropdown;
    this.setState({ openDropdown: value })
    console.log(this.state.openDropdown)
  }

  render() {
    const { currentUser, update } = this.props;
    const { openDropdown } = this.state;
    const Address = currentUser && currentUser.address 
      ? <span onClick={this.handleClick}>{currentUser.address}</span> 
      : <span onClick={this.handleClick}>Your Address</span>
    return (
      <div className="address-input">
        <span>ASAP</span>
        <p>to</p>
        {Address}
        { openDropdown ? 
          <AddressDropdown
            currentUser = {currentUser}
            update = {update}
            closeDropdown = {this.closeDropdown}/> 
            : null
        }
        
      </div>
    )
  }
}

export default AddressBar