import React from 'react'
import regeneratorRuntime from "regenerator-runtime";

class ShowMenuItem extends React.Component{
    constructor(props){
        super(props)
        
    }

    async handleClick(){
      const { openModal, item, receiveModalItem } = this.props;

      new Promise((resolve, reject) => {
        receiveModalItem(item)
      })
      await openModal()
    }

    render(){
        const {item, menu, openModal, receiveModalItem} = this.props
        if (item === null || item === undefined || item === false) return null;
        if (menu === null || menu === undefined || menu === false) return null;
        return (
          <div onClick={() => this.handleClick()} className="menu-item-container">
            {/* Div below will be a button in the future */}
            <div className="menu-item-box">
              <span className="secondary-foreground">
                <div className="second-inner-layer">
                  <div className="menu-item-info">
                    <div className="menu-item-name">
                      {/* Need to fix anchor tags. */}
                      <p>{item.name}</p>
                    </div>
                    <span>{item.description}</span>
                    <p>{item.price.toFixed(2)}</p>
                  </div>
                  <div className="menu-item-picture-container">
                    <div className="menu-item-picture-box">
                      <img src={`${item.photoUrl}`} alt="" />
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
        );
    }
}

export default ShowMenuItem;