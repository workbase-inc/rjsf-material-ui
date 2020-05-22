import 'react-app-polyfill/ie11';

import React from 'react';
import ReactDOM from 'react-dom';

import CssBaseLine from '@material-ui/core/CssBaseline';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import Body from './body';
import examples from './examples';
import Menu from './menu';

const App = () => {
  const [selectedExample, setSelectedExample] = React.useState(
    examples.aditionalProperties
  );

  const onSelectMenuItem = type => () => setSelectedExample(type);

  return (
    <div>
      <CssBaseLine />

      <Menu
        onSelectMenuItem={onSelectMenuItem}
        selectedMenuItem={selectedExample.key}
      />
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Body selectedDemo={selectedExample} />
      </MuiPickersUtilsProvider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
