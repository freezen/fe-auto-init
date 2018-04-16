/************************************************************************

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
