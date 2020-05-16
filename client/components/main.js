import React, { useState } from 'react'
import Header from './header'
import { history } from '../redux'

const Input = (props) => {
  const [username, setUsername] = useState('')

  const setName = (e) => {
    props.onChange(e.target.value)
    setUsername(e.target.value)
  }

  return (
    <input
      className="border rounded-sm"
      placeholder="Input username"
      id="input-field"
      type="text"
      value={username}
      onChange={setName}
    />
  )
}

const Button = (props) => {
  return (
    <button
      className="m-2 bg-teal-500 hover:bg-teal-700 text-white py-2 px-4 border-b-4 border-teal-700 hover:border-teal-800 rounded"
      type="button"
      id="search-button"
      onClick={() => {
        history.push(props.link)
      }}
    >
      Search
    </button>
  )
}

const Main = () => {
  const [link, setLink] = useState('')

  const addLinkToButton = (value) => {
    setLink(`/${value}`)
  }
  return (
    <div>
      <Header title="Search for GitHub repositories" />
      <div className="flex flex-col items-center text-2xl p-4 mt-10">
        <Input className="input" onChange={addLinkToButton} />
        <Button link={link} />
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
