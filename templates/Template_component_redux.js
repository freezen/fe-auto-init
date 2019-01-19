/************************************************************************

 *************************************************************************/
import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import { HashRouter, Route, Switch, hashHistory } from 'react-router-dom';

import css from './<component name>.modules.css'

export default class <component name> extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props);
    this.state={
      sample:'sample',
    }
  }

  componentWillMount(){

  }

  componentDidMount(){

  }

  componentWillReceiveProps(){

  }

  shouldComponentUpdate(){
    return true
  }

  componentWillUpdate(){

  }

  componentDidUpdate(){

  }

  render() {
    let _this=this
    return (

      <div className={css['<component name-lower>']} style={{}}>
        <component name>
      </div>

    );
  }
}
