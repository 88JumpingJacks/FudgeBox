import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Title = (props) => {
  return (
    <div>
      <h1>Router Demo</h1>
      <Link to='/list'><button>List</button></Link>
      <form>
        Input yo: <input type="text" onChange={props.handleChange}/>
      </form>
    </div>
  );
}

const List = () => {
  return (
    <div>
      <h1>List</h1>
      <Link to='/'><button>Title</button></Link>
    </div>
  );
}

class App extends Component {
  
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    console.log(e.target.value);
    
    if (e.target.value.charAt(0).toLowerCase() == 'b') {
      alert("Starts with a b!");

      // Week 2: pass state to component that renders message
    }
  }

  render() {
    return (
      <Router>
        <div>
          <h1>h8 bind()</h1>
          <input type="text" onChange = {this.handleChange} placeholder = "text in bind"/>
          <ul>
            <Link to='/'>Title </Link>
            <Link to='/list'>List</Link>
          </ul>
          <Route exact path='/' render={(props) => (<Title handleChange={this.handleChange}/>)} />
          <Route path='/list' component={List}/>
        </div>
      </Router>
    );
  }
}

export default App;