import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Header from './header'

const RepositoryList = () => {
  const { username } = useParams()
  const [repositories, setRepostitories] = useState([])
  const [icon, setIcon] = useState('')

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .catch((e) => console.error(e))
      .then(({ data: repos }) => setRepostitories(repos))
  }, [username])

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .catch((e) => console.error(e))
      .then(({ data }) => setIcon(data.avatar_url))
  }, [username])

  return (
    <div>
      <div>
        <Header title={username} goBack img={icon} />
      </div>
      <div className="flex flex-col items-center p-3">
        {repositories.map((repo) => {
          return (
            <Link key={repo.id} to={`/${repo.full_name}`}>
              <div className="flex rounded-md items-center bg-teal-500 hover:bg-teal-700 text-white m-1 p-4">
                {repo.name}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

RepositoryList.propTypes = {}

export default RepositoryList
