import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import showdown from 'showdown'
import Header from './header'
import './repo.scss'

// TODO: Add plugin to convert html to JSX(remove dangerous)

const converter = new showdown.Converter()

const RepositoryList = () => {
  const { username, repositoryName } = useParams()
  const [readme, setReadme] = useState('')
  const [icon, setIcon] = useState('')

  useEffect(() => {
    axios
      .get(`https://api.github.com/repos/${username}/${repositoryName}/readme`)
      .catch((e) => console.error(e))
      .then(({ data }) => setReadme(data))
  }, [username, repositoryName])

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .catch((e) => console.error(e))
      .then(({ data }) => setIcon(data.avatar_url))
  }, [username])

  const description = readme ? converter.makeHtml(window.atob(readme.content)) : readme
  return (
    <div>
      <Header title={repositoryName} reposlist={username} goBack img={icon} />
      <div
        id="description"
        className="description flex-wrap items-center pt-100px"
        dangerouslySetInnerHTML={{__html: description}}
      />
    </div>
  )
}

RepositoryList.propTypes = {}

export default RepositoryList
