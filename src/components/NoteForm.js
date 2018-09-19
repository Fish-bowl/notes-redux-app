import React from 'react'
import { connect } from 'react-redux'

class NoteForm extends React.Component {
  state = { name: '', color: '' }

  handelSubmit = (e) => {
    e.preventDefault()
    const { dispatch, id } = this.props
    const { name, color } = this.state 
    const note = { name, id, completed: false, color}
    dispatch({ type: 'ADD_NOTE', note  })
    dispatch({ type: 'INC_ID' })
    this.setState({ name: '', color: '' })
  }

  handleColor = (color) => {
    this.setState({ color: color})
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  render() {
    const { name } = this.state 

    return (
      <div>
        <h3>Add A note</h3>
          <div >
          <button style={this.state.color == 'red' ? { backgroundColor: 'red'}: {} } onClick={() => this.handleColor("red")}>
          Red 
          </button>
          <button style={this.state.color == 'blue' ? { backgroundColor: 'blue' } : {}}  onClick={() => this.handleColor("blue")}>
          Blue
          </button>
          <button style={this.state.color == 'green' ? { backgroundColor: 'green' } : {}} onClick={() => this.handleColor("green")} >
          Green
          </button>
          </div>
        <form onSubmit={this.handelSubmit}>
          <input value={name} onChange={this.handleChange} />
        </form>
        
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return { id: state.nextId}
}

export default connect(mapStateToProps)(NoteForm) 