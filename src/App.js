import React, { Component } from 'react';

//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faMobileAlt} from '@fortawesome/free-solid-svg-icons';

//Components
import Routes from './routes';

class App extends Component {
  render() {

    //Font Awesome Method
    library.add(fab, faEnvelope, faMobileAlt);

    return (
      <div>
        {Routes}
      </div>
    );
  }
}

export default App;