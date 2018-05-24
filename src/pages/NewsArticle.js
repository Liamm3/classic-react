import React from 'react'
import styled from 'styled-components'

const Article = styled.article`
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 2px;
  background-color: #eee;
`

export default ({ title, author, date, description, url }) => (
  <Article>
    <h2>{title}</h2>
    <small>
      {date} - {author}
    </small>
    <p>{description}</p>
    <a href={url}>{url}</a>
  </Article>
)
