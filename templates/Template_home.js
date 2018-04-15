/************************************************************************
 Licensed Materials - Property of IBM
 IBM IoT for Manufacturing
 © Copyright IBM Corp. 2017, 2018 All Rights Reserved.
 US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 *************************************************************************/
import React, {PropTypes, Component} from 'react';
import {Router, Route, hashHistory} from 'react-router';
import css from './<component name>_Home.modules.css'

export default class <component name>_Home extends Component {
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
