import React from 'react'

export default function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository?.name ?? 'Name is empty'}</strong>
      <p>{repository?.description ?? 'Description is empty'}</p>

      <a href={repository?.url ?? '#'}>{repository?.url ?? 'URL is empty'}</a>
    </li>
  )
}
