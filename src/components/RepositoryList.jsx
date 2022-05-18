import React from 'react'
import RepositoryItem from './RepositoryItem'

const repository = {
  name: 'unform',
  description: 'forms in react',
  url: 'https://github.com/unform/unform'
}

export default function RepositoryList() {
  return (
    <section className='repository-list'>
      <h1>RepositoryList</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  )
}
