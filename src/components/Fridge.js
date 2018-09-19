import React from 'react'
import { connect } from "react-redux";
import Note from './Note'

//are all my notes params going in right here 
//-----------------|*|
const filtered = (notes, filter) => {
  switch (filter) {
    case 'ALL':
      return notes
    case 'Active':
      return notes.filter( t => !t.complete )
    case 'Completed':
      return notes.filter( t => t.complete )
    case 'Red':
      //what is t and what defines it. how do I not use t and use notes params?????????
      //the previous ( t => t.complete ) makes sense because it's a boolean, and I'm checking that. 
      //if the params are going in then shouldnt I be able to check against this string? 
      //when I look at redux tools. it says its looking only for whether or not its completed. how would I change 
      //btw when I click the different buttons before I've added a note, redux tools says it's looking for the button i clicked before the current button......funky logic error?
      return notes.filter( t => this.color == 'red' )
    case 'Blue':
      return notes.filter( t => this.color == 'blue' )
    case 'Green':
      return notes.filter( t => this.color == 'green' )
  }
}

const Fridge = ({ notes, filter }) => (
  <ul>
    { filtered(notes, filter).map( (t) => {
      return ( <Note key={t.id} {...t} /> )
    })
  }
  </ul>
)

const mapStateToProps = (state) => {
  return { notes: state.notes, filter: state.filter }

}

export default connect(mapStateToProps)(Fridge)