import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'
import { BsFillBagFill } from 'react-icons/bs'

import "./index.css"

const Header = () => (
    <div className='header-design'>
  <nav className='links-navigation'>
    <li >
      <Link to="/" className='links'><AiFillHome className="icons"/>Home</Link>
    </li>
    <li>
      <Link to="/cart" className='links'><FaShoppingCart className="icons"/>Cart</Link>
    </li>
    <li>
      <Link to="/checkout" className='links'><BsFillBagFill className="icons"/>Checkout</Link>
    </li>
  </nav>
  </div>
);


export default Header