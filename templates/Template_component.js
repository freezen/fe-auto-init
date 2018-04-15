/************************************************************************
 Licensed Materials - Property of IBM
 IBM IoT for Manufacturing
 © Copyright IBM Corp. 2017, 2018 All Rights Reserved.
 US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 *************************************************************************/
import React, {PropTypes,Component} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router';

import <component name>_Home from './<component name>_Home'
import * as actions from './actions'


const mapStateToProps = (state) => {
  return {
    expandAppList:state.get('<component name>').get('expandAppList'),
    expandData:state.get('<component name>').get('expandData'),
  }
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(<component name>_Home);
