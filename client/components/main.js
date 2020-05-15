import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { history } from '../redux'

const Input = (props) => {
  return <input id="input-field" type="text" onChange={(e) => props.onChange(e.target.value)} />
}

// const Button = (props) => {
//   return (
//     <button
//       type="button"
//       id="search-button"
//       onClick={() => {
//         history.push(`/${props.link}`)
//       }}
//     >
//       Search
//     </button>
//   )
// }

const Main = () => {
  const [link, setLink] = useState('')

  const addLinkToButton = (value) => {
    setLink(`/${value}`)
  }
  return (
    <div>
      <Input onChange={addLinkToButton} />
      <Link to={link}>Search</Link>
      <div>{link}</div>
    </div>
  )
}

Main.propTypes = {}

export default Main
