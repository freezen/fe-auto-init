/************************************************************************

 *************************************************************************/
import React, {Component,PropTypes} from 'react';
import { Router, Route, hashHistory } from 'react-router';

import css from './<component name>.modules.css'

export default class <component name> extends Component {
  static propTypes = {
    userName : PropTypes.string.isRequired,
    showUserInfo : PropTypes.bool.isRequired,// judge if show the user info drop down menu

    expandUserInfo : PropTypes.func.isRequired
  };

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

  popup(e){
    this.props.actions.popup(e)
  }

  render() {
    let _this=this
    return (

      <div className={css['<component name>']} style={{}} onClick={e => this.popup(e)}>
        Sample
      </div>

    );
  }
}
