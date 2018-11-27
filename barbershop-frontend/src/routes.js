import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const Forms = Loadable({
    loader: () => import('./views/Base/Form/Forms'),
    loading: Loading,
});


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
    { path: '/base/forms', name: 'Forms', component: Forms },
    { path: '/', exact: true, name: 'Home', component: DefaultLayout }
];

export default routes;
