/************************************************************************
 Licensed Materials - Property of IBM
 IBM IoT for Manufacturing
 © Copyright IBM Corp. 2017, 2018 All Rights Reserved.
 US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 *************************************************************************/
import {
  combineReducers
} from 'redux-immutable';

import root from '../components/root/reducers/index';
import header from '../components/common/header/reducers/index';
import dataPanel from '../components/common/dataPanel/reducers/index';

const app = combineReducers({
  root,
  header,
  dataPanel,
});


export default app;
