import React, { Component } from 'react';

//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

//Routes
import Routes from './routes';

class App extends Component {
  render() {

    //Font Awesome Method
    library.add(fab);

    return (
      <div>
        {Routes}
      </div>
    );
  }
}

export default App;