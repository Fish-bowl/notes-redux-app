import React from 'react'
import FilterLink from "./FilterLink";

const Footer = () => (
  <div>
    <FilterLink>All</FilterLink>
    {' '}
    <FilterLink>Active</FilterLink>
    {' '}
    <FilterLink>Completed</FilterLink>
    {' '}
    <FilterLink>Red</FilterLink>
    {' '}
    <FilterLink>Blue</FilterLink>
    {' '}
    <FilterLink>Green</FilterLink>
  </div>
)

export default Footer 