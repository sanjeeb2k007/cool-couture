import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';
import { connect } from 'react-redux';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.componet';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className="options">
        <Link to='/shop' className='option'>
            Shop
        </Link>
        <Link to='/contact' className='option'>
           Contact
        </Link> 
        {currentUser ?
        <div className='option' onClick = {()=>auth.signOut()}>Sign Out</div>
        :
        <Link to='/signin' className='option'>
           Sign In
        </Link> }
        <CartIcon/>
        </div>
        {
            hidden ? null : <CartDropdown />
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  });
  
  export default connect(mapStateToProps)(Header);