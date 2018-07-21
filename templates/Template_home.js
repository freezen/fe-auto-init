/************************************************************************

 *************************************************************************/
import React, {PropTypes, Component} from 'react';
import {Router, Route, hashHistory} from 'react-router';
import css from './<component name>.modules.css'

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
