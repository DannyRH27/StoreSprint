import React from 'react'

class ShowMenuItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {item} = this.props
        if (item === null || item === undefined || item === false) return null;
        return(
            <div className='menu-item-container'>
                {/* Div below will be a button in the future */}
                <div className='menu-item-box'> 
                    <span className='secondary-foreground'>
                        <div className='second-inner-layer'>
                            <div className='menu-item-info'>
                                <div className='menu-item-name'>
                                    <span>{item.name}</span>
                                </div>
                                <span>{item.description}</span>
                                <p>{item.price.toFixed(2)}</p>
                            </div>
                            <div className='menu-item-picture-container'>
                                <div className='menu-item-picture-box'>
                                    <img src={`${item.photoUrl}`} alt="" />
                                </div>
                            </div>
                        </div>
                    </span>
                </div> 
            </div>
        )
    }
}

export default ShowMenuItem;