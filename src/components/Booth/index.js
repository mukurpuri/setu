import React from 'react';
import { connect } from 'react-redux';
import './style.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

class Booth extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    
    render() {
        let currentLanguage = this.props.settings.language;
        return (
            <React.Fragment>
                <div class="booth">
                    <div class="header">
                        <div class="setuPro">
                            <img src="/logo.webp"/>
                        </div>
                        <div class="bubbleText">
                            Welcome to Setu, Type Hello @&#60;your service&#62; to connect with your services instantly!
                        </div>
                    </div>
                    <div class="footer">
                        <div class="placeholder">Hello @</div>
                        <div class="send">
                            SEND
                        </div>
                        <input/>
                    </div>
                </div>
                <div class="services">
                    <h1>Connect with</h1>
                    <div>
                        <div class="row">
                            <div class="col">
                                <div class="service ax">
                                    <img src="/axix-logo.png"/>
                                </div>
                                <p>
                                    Axix Bank
                                </p>
                            </div>
                            <div class="col">
                                <div class="service hdfc">
                                    <img src="/hdfc-logo.png"/>
                                </div>
                                <p>
                                    HDFC Bank
                                </p>
                            </div>
                            <div class="col">
                                <div class="service icici">
                                    <img src="/icici-logo.png"/>
                                </div>
                                <p>
                                    ICICI Bank
                                </p>
                            </div>
                            <div class="col">
                            <div class="service hdfc">
                                    <img src="/sbi-logo.png"/>
                                </div>
                                <p>
                                    SBI Bank
                                </p>
                            </div>
                            <div class="col">
                                <div class="service hsbc">
                                    <img src="/hsbc-logo.png"/>
                                </div>
                                <p>
                                    HSBC Bank
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="service amazon">
                                    <img src="/amazon-logo.png"/>
                                </div>
                                <p>
                                    Amazon.in
                                </p>
                            </div>
                            <div class="col">
                                <div class="service ">
                                    <img src="/flipkart-logo.png"/>
                                </div>
                                <p>
                                    Flikart.com
                                </p>
                            </div>
                            <div class="col">
                                <div class="service snap">
                                    <img src="/snapdeal-logo.png"/>
                                </div>
                                <p>
                                    Snapdeal.com
                                </p>
                            </div>
                            <div class="col">
                                <div class="service ">
                                    <img src="/myntra-logo.png"/>
                                </div>
                                <p>
                                    Myntra.com
                                </p>
                            </div>
                            <div class="col">
                                <div class="service groffer">
                                    <img src="/groffers-logo.png"/>
                                </div>
                                <p>
                                    Groffers.com
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="service cleartax">
                                    <img src="/cleartax-logo.png"/>
                                </div>
                                <p>
                                    Cleartax.com
                                </p>
                            </div>
                            <div class="col">
                                <div class="service airtel">
                                    <img src="/airtel-logo.png"/>
                                </div>
                                <p>
                                    Airtel
                                </p>
                            </div>
                            <div class="col">
                                <div class="service ">
                                    <img src="/jio-logo.png"/>
                                </div>
                                <p>
                                    Jio
                                </p>
                            </div>
                            <div class="col">
                                <div class="service vi">
                                    <img src="/vi-logo.png"/>
                                </div>
                                <p>
                                    Vi
                                </p>
                            </div>
                            <div class="col">
                                <div class="service cred">
                                    <img src="/cred-logo.png"/>
                                </div>
                                <p>
                                    Cred
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );   
    }
}
const mapStateToProps = state => {
    return {
      settings: state.settingsReducer.settings
    };
  };
  
const mapDispatchToProps = (dispatch) => {
    return {};
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Booth);