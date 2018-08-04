import React, { Component } from 'react';
// import { connect } from 'react-redux';

import Aux from '../Auxl/Auxl';
import AppBar from '../../components/Navigation/AppBar';
 

class Layout extends Component {
    
    render () {
        return (
            <Aux>
               <AppBar/>
            </Aux>
        )
    }
}

 

export default  Layout ;