import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';

import 'reset.css/reset.css';
import 'normalize.css/normalize.css';
import './assets/css/fonts.css';
import './assets/css/libs.css';
import './assets/css/variables.css';
import './assets/css/base.css';
import './assets/css/common.css';

import '@utils/axios.ts';
import { App } from './App';
import { setup } from '@hoc/setup';

const container = document.getElementById('the-app');
const AppWithSetup = setup(App);

ReactDOM.render(<AppWithSetup />, container);
