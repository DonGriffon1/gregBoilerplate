import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {SAGA_ACTION, TEST_USER} from "../../constants/actions";
import HomeComponent from '../../components/HomeComponent';


class Home extends Component {

    render() {
        return (
            <HomeComponent {...this.props} />
        );
    }
}
function mapStateToProps (state) {
    return {
        state: state.user
    }
}
function mapDispatchToProps(dispatch) {
    return {
        testUser: (payload) => dispatch({type: TEST_USER, payload}),
        consoleSaga: () => dispatch({type: SAGA_ACTION}),
    };
}

Home.propTypes = {
    testUser: PropTypes.func.isRequired,
    consoleSaga: PropTypes.func.isRequired,
    state: PropTypes.object
};


export default connect(mapStateToProps, mapDispatchToProps)(Home)
