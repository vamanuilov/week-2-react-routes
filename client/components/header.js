import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/images/github.png'

const Links = (props) => {
  return (
    <div className="flex flex-end flex-col items-end text-white">
      {props.repositoryName && (
        <Link id="go-repository-list" to={`/${props.username}`}>
          <div className="hover:text-gray-200 hover:underline">Back to Repository List</div>
        </Link>
      )}
      {props.username && (
        <Link id="go-back" to="/">
          <div className="hover:text-gray-200 hover:underline">Back To Search</div>
        </Link>
      )}
    </div>
  )
}

const Header = (props) => {
  return (
    <nav className="flex w-screen items-center justify-between flex-wrap bg-teal-500 p-5">
      <div className="flex flex-start">
        <img
          style={{
            width: '60px',
            height: '60px',
            'border-radius': '50%'
          }}
          src={props.icon ? props.icon : logo}
          alt="avatar"
        />
        <div
          id="repository-name"
          className="flex items-center flex-shrink-0 text-2xl text-white pl-4"
        >
          {props.repositoryName || props.username || 'Search for GitHub repositories'}
        </div>
      </div>
      <Links username={props.username} repositoryName={props.repositoryName} />
    </nav>
  )
}

export default React.memo(Header)
