/************************************************************************
 Licensed Materials - Property of IBM
 IBM IoT for Manufacturing
 © Copyright IBM Corp. 2017, 2018 All Rights Reserved.
 US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 *************************************************************************/
import React from 'react'
import {render} from 'react-dom'
import thunk from 'redux-thunk';
import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'

import Root from './components/root/Root';

let store = null;

if (!(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)) {
  store = createStore(
    reducer,
    applyMiddleware(thunk),
  );
} else {
  store = createStore(
    reducer,
    compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    //compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  );
}

function renderRoot(username, role) {
  render(
    <Provider store={store}>
      <Root username={username} role={role}/>
    </Provider>, document.getElementById('root')
  )
}

GLOBAL_STORAGE.renderRoot=renderRoot

if (!ls || ls.fakeData !== "on") {
  renderRoot(GLOBAL_STORAGE['user'], ls['role']);
} else {
  renderRoot("dzhenhua@cn.ibm.com", 'modelmanager');
}
