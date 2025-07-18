import '../headerComponet/header.css';
import logoHeader from '../headerComponet/header-img/logo.png'
function Header() {
    return (
        <>
            <div className="main-div-header">
                <div className="inner-div-header">
                    <div className="inner-logo-div-header">
                        <img  className='logo-header' src={logoHeader} alt="" />
                    </div>
                    <div className="inner-navlist-header">
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
                    <div className="humburger-header"></div>
                </div>
            </div>
        </>
    )
}
export default Header