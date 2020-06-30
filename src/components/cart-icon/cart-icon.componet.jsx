import React from 'react';
import './cart-icon.styles.scss';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-cart-icon.svg';

const CartIcon = ({toggleCartHidden}) => (
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden} />
        <span className='item-count'>0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);