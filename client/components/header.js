import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <nav className="flex w-screen items-center justify-between flex-wrap bg-teal-500 p-5">
      {/* TODO Add imgSrc
       * <img src={`pr${props.img}`} alt="avatar" />
       */}
      <div id="repository-name" className="flex items-center flex-shrink-0 text-2xl text-white">
        {props.title}
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
