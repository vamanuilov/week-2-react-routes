import React, { useEffect, useState } from 'react'
import { Route, Switch, useParams } from 'react-router-dom'
import axios from 'axios'
// import showdown from 'showdown'

import Dashboard from './dashboard'
import Profile from './profile'
import Header from './header'
import RepositoryList from './repositorylist'
import Repository from './repository'
import Main from './main'

const Home = () => {
  // const converter = new showdown.Converter()
  const { username, repositoryName } = useParams()
  const [icon, setIcon] = useState('')
  const [repositories, setRepostitories] = useState([])
  const [readme, setReadme] = useState('')

  useEffect(() => {
    if (typeof username !== 'undefined') {
      axios
        .get(`https://api.github.com/users/${username}/repos`)
        .catch((e) => console.error(e))
        .then(({ data: repos }) => setRepostitories(repos))
      axios
        .get(`https://api.github.com/users/${username}`)
        .catch((e) => console.error(e))
        .then(({ data }) => setIcon(data.avatar_url))
    }
  }, [username])

  useEffect(() => {
    if (typeof repositoryName !== 'undefined') {
      const headers = {Accept: 'application/vnd.github.VERSION.html'}
      axios
        .get(`https://api.github.com/repos/${username}/${repositoryName}/readme`, {
          param: {},
          headers
        })
        .catch((e) => console.error(e))
        .then(({ data }) => setReadme(data))
    }
  }, [username, repositoryName])

  // const description = readme ? converter.makeHtml(window.atob(readme.content)) : readme

  return (
    <div>
      <Header username={username} repositoryName={repositoryName} icon={icon} />
      <div className="items-center">
        <Switch>
          <Route exact path="/" component={() => <Main />} />
          <Route
            exact
            path="/:username"
            component={() => <RepositoryList repositories={repositories} />}
          />
          <Route
            exact
            path="/:username/:repositoryName"
            component={() => <Repository description={readme} />}
          />
          <Route exact path="/dashboard" component={() => <Dashboard />} />
          <Route exact path="/dashboard/profile/:username" component={() => <Profile />} />
        </Switch>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
