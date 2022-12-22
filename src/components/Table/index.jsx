import React, { Component } from "react";
import "./style.css";
import { users } from "./user.js";
class Table extends Component {
  constructor() {
    super();
    this.state = {
      data: users,
      active: null,
      name: "",
      age: "",
      address: "",
      status: "",
      nickname: "",
      univ: "",
      job: "",
    };
  }
  render() {
    const onEdit = (
      { id, name, age, address, status, nickname, univ, job },
      isSave
    ) => {
      console.log(id);
      if (isSave) {
        let res = this.state.data.map((value) =>
          value.id === this.state.active.id
            ? {
                ...value,
                name: this.state.name,
                age: this.state.age,
                address: this.state.address,
                status: this.state.status,
                nickname: this.state.nickname,
                univ: this.state.univ,
                job: this.state.job,
              }
            : value
        );
        this.setState({ active: null, data: res });
      } else {
        this.setState({
          name: name,
          age: age,
          address: address,
          status: status,
          nickname: nickname,
          univ: univ,
          job: job,
          active: { id, name, age, address, status, nickname, univ, job },
        });
      }
    };

    const onChange = (e) => {
      console.log(e.target.value);
      this.setState({ [e.target.name]: e.target.value });
    };

    const onCancel = (isSave) => {
        if(isSave){
            this.setState({active: null})
        }
    };
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>AGE</th>
              <th>ADDRESS</th>
              <th>STATUS</th>
              <th>NICKNAME</th>
              <th>UNIV</th>
              <th>JOB</th>
              <th>EDIT</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(
              ({ id, name, age, address, status, nickname, univ, job }) => {
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>
                      {this.state.active?.id === id ? (
                        <input
                          onChange={onChange}
                          name="name"
                          value={this.state.name}
                          type="text"
                          className="inpChange"
                        />
                      ) : (
                        name
                      )}
                    </td>
                    <td>
                      {this.state.active?.id === id ? (
                        <input
                          onChange={onChange}
                          name="age"
                          value={this.state.age}
                          type="text"
                          className="inpChange"
                        />
                      ) : (
                        age
                      )}
                    </td>
                    <td>
                      {this.state.active?.id === id ? (
                        <input
                          onChange={onChange}
                          name="address"
                          value={this.state.address}
                          type="text"
                          className="inpChange"
                        />
                      ) : (
                        address
                      )}
                    </td>
                    <td>
                      {this.state.active?.id === id ? (
                        <input
                          onChange={onChange}
                          name="status"
                          value={this.state.status}
                          type="text"
                          className="inpChange"
                        />
                      ) : (
                        status
                      )}
                    </td>
                    <td>
                      {this.state.active?.id === id ? (
                        <input
                          onChange={onChange}
                          name="nickname"
                          value={this.state.nickname}
                          type="text"
                          className="inpChange"
                        />
                      ) : (
                        nickname
                      )}
                    </td>
                    <td>
                      {this.state.active?.id === id ? (
                        <input
                          onChange={onChange}
                          name="univ"
                          value={this.state.univ}
                          type="text"
                          className="inpChange"
                        />
                      ) : (
                        univ
                      )}
                    </td>
                    <td>
                      {this.state.active?.id === id ? (
                        <input
                          onChange={onChange}
                          name="job"
                          value={this.state.job}
                          type="text"
                          className="inpChange"
                        />
                      ) : (
                        job
                      )}
                    </td>
                    <td className="btns">
                      <button
                        onClick={() =>
                          onEdit(
                            {
                              id,
                              name,
                              age,
                              address,
                              status,
                              nickname,
                              univ,
                              job,
                            },
                            this.state.active?.id === id
                          )
                        }
                      >
                        {this.state.active?.id === id ? "save" : "edit"}
                      </button>
                      {this.state.active?.id === id ? (
                        <button
                          onClick={() =>
                            onCancel(
                              {
                                id,
                                name,
                                age,
                                address,
                                status,
                                nickname,
                                univ,
                                job,
                              },
                              this.state.active?.id === id
                            )
                          }
                        >
                          cancel
                        </button>
                      ) : (
                        ""
                      )}
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
