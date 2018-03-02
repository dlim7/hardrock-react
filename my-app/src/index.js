import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react';

class HardRock extends React.Component {

  render() {
    return (
        <Container textAlign="center">
            <Header as='h1'>HardRock!</Header>
        </Container>
    );
  }
}
class TopMenu extends React.Component {
  render() {
    const itemStyle = { color: "#ccc", fontSize: "22px" };
    return (
        <Menu className="topmenu">
          <Menu.Item>(Logo goes here)</Menu.Item>
          <Menu.Item style={itemStyle} position="right">CAFES</Menu.Item>
          <Menu.Item style={itemStyle}>HOTELS</Menu.Item>
        </Menu>
    )
  }
}
class middle extends React.Component {
  render() {
    const itemStyle = { color: "#ccc", fontSize: "22px" };
    return (
        <Menu className="middle">
          <Menu.Item>(Logo goes here)</Menu.Item>
          <Menu.Item style={itemStyle} position="right">CAFES</Menu.Item>
          <Menu.Item style={itemStyle}>HOTELS</Menu.Item>
        </Menu>
    )
  }
}
class footer extends React.Component {
  render() {
    const itemStyle = { color: "#ccc", fontSize: "22px" };
    return (
        <Menu className="footer">
          <Menu.Item>(Logo goes here)</Menu.Item>
          <Menu.Item style={itemStyle} position="right">CAFES</Menu.Item>
          <Menu.Item style={itemStyle}>HOTELS</Menu.Item>
        </Menu>
    )
  }
}
ReactDOM.render(<HardRock/>, document.getElementById('root'));