import React, { Component } from "react";
import "./style.css";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      addTodo: "",
      select: true,
    };
  }
  render() {
    const onChange = (e) => {
      const { value } = e.target;
      this.setState({ addTodo: value });
    };

    const onAdd = () => {
      let obj = {
        id: this.state.data.length+1,
        name: this.state.addTodo,
      };
      console.log(obj);
      if(this.state.addTodo !== ''){

          this.setState({
              data: [...this.state.data, obj],
              addTodo: ''
            });
        };
    }

    const onDelete =(id)=>{
        console.log("delete");
        let res = this.state.data.filter((value)=> value.id !== id);
        this.setState({data:res})
    
    }

    const onClear = ()=>{
        this.setState({data:[] , addTodo: ''})
    }

    const onStar = (id)=>{
        let res = this.state.data.map((value)=> value.id === id);
        if(res){
            this.setState({select: !this.state.select})
        }
        console.log(this.state.select);
        const btn = document.querySelector('.star');
        if(this.state.select){
            btn.classList = 'color'
        }
        else{
            btn.classList.remove = ''
        }
        // this.setState({select: !this.state.select})
        // const btn = document.querySelector('.star');
        // if(this.state.select){
        //     btn.classList = 'color'
        // }
        // else{
        //     btn.classList = '';
        // }

    }
    return (
      <div>
        <div className="clear">
          <p>{this.state.data.length} {this.state.data.length < 2 ? 'Task' : 'Tasks'}</p>
          <button className="btn" onClick={onClear}>Clear List</button>
        </div>
        <div className="addZone">
            <ul>
          {this.state.data.map(({ id, name }) => {
            return (
                <li key={id} className = "list">
                  {name}
                  <div>
                    <button>check</button>
                    <button onClick={()=>onStar(id)} className = "star">star</button>
                    <button onClick={()=>onDelete(id)}>delete</button>
                  </div>
                </li>
            );
        })}
        </ul>
        </div>
        <div className="addTodo">
          <input
            value={this.state.addTodo}
            type="text"
            name=""
            id=""
            onChange={onChange}
            placeholder="Add a ToDo"
          />
          <button className="add" onClick={onAdd}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default Main;
