import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

import 'bootstrap/dist/css/bootstrap.css';

import App from '../imports/ui/App.jsx';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});