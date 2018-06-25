import React, { Component } from 'react';

//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

//Components
import Home from './Components/Home/Home';

class App extends Component {
  render() {

    //Font Awesome Method
    library.add(fab);

    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;