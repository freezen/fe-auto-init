/************************************************************************

 *************************************************************************/
import React, {PropTypes,Component} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router';

import <component name> from './<component name>'
import * as actions from './actions'


const mapStateToProps = (state) => {
  return {
    expandAppList:state.get('<component name-lower>').get('expandAppList'),
    expandData:state.get('<component name-lower>').get('expandData'),
  }
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(<component name>);
