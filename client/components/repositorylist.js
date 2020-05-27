import React from 'react'
import { Link } from 'react-router-dom'

const RepositoryList = (props) => {
  return (
    <div className="flex flex-col items-center p-3">
      {props.repositories.map((repo) => {
        return (
          <Link
            className="flex rounded-md items-center bg-teal-500 hover:bg-teal-700 text-white m-1 p-4"
            key={repo.id}
            to={`/${repo.full_name}`}
          >
            {repo.name}
          </Link>
        )
      })}
    </div>
  )
}

RepositoryList.propTypes = {}

export default RepositoryList
