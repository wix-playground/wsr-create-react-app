import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Card from 'wix-style-react/Card';
import Input from 'wix-style-react/Input';
import FormField from 'wix-style-react/FormField';
import Slider from 'wix-style-react/Slider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div
            data-hook="card-example-basic"
            style={{background: '#F0F4F7', padding: 30}}
          >
            <Card>
              <Card.Header title="Simple Card" />

              <Card.Content>
                <FormField label="Type your joke below">
                  <Input />
                </FormField>
              </Card.Content>

              <Card.Divider />

              <Card.Content>
                <FormField label="Type your tragedy below">
                  <Input />
                </FormField>
                <Slider
                  dataHook={'story-slider-multiple'}
                  value={[3, 4, 5]}
                  min={1}
                  max={10}
                />
              </Card.Content>
            </Card>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
