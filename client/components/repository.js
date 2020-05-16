import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import showdown from 'showdown'
import Header from './header'

// TODO: Add plugin to convert html to JSX(remove dangerous)
// TODO: Add styles for description

const converter = new showdown.Converter()

const RepositoryList = () => {
  const { username, repositoryName } = useParams()
  const [readme, setReadme] = useState('')

  useEffect(() => {
    axios
      .get(`https://api.github.com/repos/${username}/${repositoryName}/readme`)
      .catch((e) => console.error(e))
      .then(({ data }) => setReadme(data))
  }, [username, repositoryName])
  const description = readme ? converter.makeHtml(window.atob(readme.content)) : readme
  return (
    <div>
      <Header title={repositoryName} reposlist={username} goBack />
      <div
        id="description"
        className="flex flex-wrap items-center pt-100px"
        dangerouslySetInnerHTML={{__html: description}}
      />
    </div>
  )
}

RepositoryList.propTypes = {}

export default RepositoryList
