import React, { Component } from 'react';
import './App.css';
import List from './item.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: [], 
     textDecoration:[]
    };
    this.onComplete =this.onComplete.bind(this);
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  };
  onComplete= (index)=>{
  let arr = this.state.items
  arr[index]= !arr[index]
  this.setState({
    textDecoration: arr
  })
  };

  onSubmit = (event) => {
    
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }
    onDelete =(index)=>{
      const Newtodo  = this.state.items;
        Newtodo.splice(index, 1);
        this.setState({
            items: Newtodo
        })
      
    }
 

  render() {
    return (
      <div>
          <input value={this.state.term}
            onKeyUp={(e)=>{
              e.which === 13 &&this.onSubmit();
              }
            } 
          required="on" type="text" onChange={this.onChange} />
          <button onClick={this.onSubmit}>Submit</button>
        <List  onDelete={this.onDelete} items={this.state.items} onComplete={this.onComplete}/>
      </div>
    );
  }
}


