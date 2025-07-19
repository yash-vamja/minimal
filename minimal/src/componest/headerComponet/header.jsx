import '../headerComponet/header.css';
import logoHeader from '../headerComponet/header-img/logo.png'
import menu from '../headerComponet/header-img/menu.png';
function Header() {
    function toggleMenu() {
    document.querySelector('.inner-navlist-header').classList.toggle('show');
  }
  function closeMenu() {
   document.querySelector('.inner-navlist-header').classList.remove('show');
  }
    return (
        <>
            <div className="main-div-header">
                <div className="inner-div-header">
                    <div className="inner-logo-div-header">
                        <img  className='logo-header' src={logoHeader} alt="" />
                    </div>
                    <div className="inner-navlist-header">
                        <span className='close-btn-header' onClick={closeMenu}>X</span>
                        <ul className='ul-header'>
                            <li>Home</li>
                            <li>Service</li>
                            <li>Feature</li>
                            <li>Product</li>
                            <li>testimonial</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div className="btn-header">
                        <button className='login-header-btn'>Login</button>
                        <button className='signup-header-btn'>Sign up</button>
                    </div>
                    <div className="humburger-header">
                        <img className='menu-img-header' onClick={toggleMenu} src={menu} alt=""  />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header