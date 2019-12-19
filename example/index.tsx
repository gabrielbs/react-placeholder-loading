import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PlaceholderLoading from '../.';
import './example.css';
const App = () => {
  return (
    <React.Fragment>
      <div className="card">
        <PlaceholderLoading shape="circle" width={60} height={60} />
        <PlaceholderLoading shape="rect" width={100} height={50} />
        <div>
          <PlaceholderLoading shape="rect" width={250} height={10} /><br/>
          <PlaceholderLoading shape="rect" width={250} height={10} /><br/>
          <PlaceholderLoading shape="rect" width={250} height={10} /><br/>
          <PlaceholderLoading shape="rect" width={250} height={10} /><br/>
        </div>
      </div>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
