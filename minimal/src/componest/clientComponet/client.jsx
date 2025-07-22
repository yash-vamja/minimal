import '../clientComponet/client.css';
import logo1 from '../clientComponet/client_img/logo1.png';
import logo2 from '../clientComponet/client_img/logo2.png';
import logo3 from '../clientComponet/client_img/logo3.png';
import logo4 from '../clientComponet/client_img/logo4.png';
import logo5 from '../clientComponet/client_img/logo5.png';
import logo6 from '../clientComponet/client_img/logo6.png';
import logo7 from '../clientComponet/client_img/logo7.png';
import fram1 from '../clientComponet/client_img/fram1.svg'
import fram2 from '../clientComponet/client_img/fram2.svg';
import fram3 from '../clientComponet/client_img/fram3.svg';
function client() {
    return (
        <>
            <div className="main-div-client-compo">
                <div className="inner-div-1-client-compo">
                    <h2>Our Clinets</h2><br />
                    <p>We have been working with some Fortune 500+ clients</p>
                </div>
                <div className="inner-div-2-client-compo">
                    <img src={logo1} alt=""  />
                    <img src={logo2} alt=""  />
                    <img src={logo3} alt=""  />
                    <img src={logo4} alt=""  />
                    <img src={logo5} alt=""  />
                    <img src={logo6} alt=""  />
                    <img src={logo7} alt=""  />
                </div>
            </div>
            <div className="main-div-community-compo">
                <div className="inner-div-1-community-compo">
                    <h1>Manage your entire community in a single system</h1>
                    <p>Who is Nextcent suitable for ?</p>
                </div>
                <div className="inner-div-community-fram-compo">
                        <div className="fram1-community-compo">
                            <img src={fram1} alt="" />
                            <h3>Membership Organisatios</h3>
                            <p>Our membership management software provides full automation of membership renewals and payments</p>
                        </div>
                        <div className="fram1-community-compo">
                            <img src={fram2} alt="" />
                            <h3>National Associations</h3>
                            <p>Our membership management software provides full automation of membership renewals and payments</p>
                        </div>
                        <div className="fram1-community-compo">
                            <img src={fram3} alt="" />
                            <h3>Clubs And Groups</h3>
                            <p>Our membership management software provides full automation of membership renewals and payments</p>
                        </div>
                </div>
            </div>
        </>
    )
}
export default client;