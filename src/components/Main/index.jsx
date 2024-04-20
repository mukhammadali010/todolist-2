import React, { Component } from 'react';
import './style.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      addTodo: '',
    };
  }

  handleChange = (e) => {
    this.setState({ addTodo: e.target.value });
  };

  handleAdd = () => {
    const { data, addTodo } = this.state;
    if (addTodo.trim()) {
      const newTask = {
        id: data.length + 1,
        name: addTodo,
        completed: false,
      };
      this.setState({
        data: [...data, newTask],
        addTodo: '',
      });
    }
  };

  handleDelete = (id) => {
    const updatedData = this.state.data.filter(task => task.id !== id);
    this.setState({ data: updatedData });
  };

  handleClear = () => {
    this.setState({ data: [], addTodo: '' });
  };

  handleCheck = (id) => {
    this.setState(prevState => ({
      data: prevState.data.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  handleStar = (id) => {
    this.setState(prevState => ({
      data: prevState.data.map(task => 
        task.id === id ? { ...task, starred: !task.starred } : task
      ),
    }));
  };

  render() {
    const { data, addTodo } = this.state;

    return (
      <div>
        <div className="clear">
          <p>{data.length} {data.length === 1 ? 'Task' : 'Tasks'}</p>
          <button className="btn" onClick={this.handleClear}>Clear List</button>
        </div>

        <div className="addZone">
          <ul>
            {data.map(({ id, name, completed }) => (
              <li key={id} className={`list ${completed ? 'completed' : ''}`}>
                <span>{name}</span>
                <div>
                  <button onClick={() => this.handleCheck(id)}>Check</button>
                  
                  <button onClick={() => this.handleDelete(id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="addTodo">
          <input
            value={addTodo}
            type="text"
            onChange={this.handleChange}
            placeholder="Add a ToDo"
          />
          <button className="add" onClick={this.handleAdd}>Add</button>
        </div>
      </div>
    );
  }
}

export default Main;
