import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/images/github.png'

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
          src={props.img ? props.img : logo}
          alt="avatar"
        />
        <div
          id="repository-name"
          className="flex items-center flex-shrink-0 text-2xl text-white pl-4"
        >
          {props.title}
        </div>
      </div>
      <div className="flex flex-col items-end text-white">
        {props.reposlist && (
          <Link id="go-repository-list" to={`/${props.reposlist}`}>
            <div className="hover:text-gray-200 hover:underline">Back to Repository List</div>
          </Link>
        )}
        {props.goBack && (
          <Link id="go-back" to="/">
            <div className="hover:text-gray-200 hover:underline">Back To Search</div>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default React.memo(Header)
