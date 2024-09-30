import React from 'react'
import "./Tag.css"

const Tag = ({tagName,selectTag, selected}) => {
  const tagStyle = {
    HTML5: {backgroundColor : "#fda821"},
    CSS3: {backgroundColor : "#15d4c8"},
    JavaScript: {backgroundColor : "#ffd12c"},
    ReactJs: {backgroundColor : "#4cdafc"},
    default: {backgroundColor : "#f9f9f9"},
  }
  return (
      <button type='button' style={selected ? tagStyle[tagName] : tagStyle.default} className="tag" onClick={() => selectTag(tagName)}>{tagName}</button>
  )
}

export default Tag
