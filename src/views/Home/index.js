import React from 'react';
import { connect } from 'react-redux';
import Booth from '../../components/Booth';
import './style.scss';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    
    render() {
        let currentLanguage = this.props.settings.language;
        return (
            <React.Fragment>
                <div class="wrapper">
                    <Booth/>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);