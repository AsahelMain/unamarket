import './Header.css';
import cart from '../../assets/shoppingcart.svg';

function Header() {
    return(
        <header>
            <img src={cart} alt="Shopping cart by Yaprativa"></img>
            <div className='header-text-wrap'>
                <p className='header-text'>UNAMARKET</p>
            </div>
        </header>
    );
}

export default Header;