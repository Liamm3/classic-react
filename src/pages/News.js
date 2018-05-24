import React, { Component } from 'react'

import NewsArticle from './NewsArticle'

export default class extends Component {
  state = {
    articles: null
  }

  async componentDidMount() {
    const response = await fetch(
      'https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=17ff1cd8dc464bbdb93c433df5c555a3'
    )
    const { articles } = await response.json()

    this.setState({ articles })
  }

  renderArticles = () => {
    if (!this.state.articles) {
      return <p>Loading...</p>
    }

    return this.state.articles.map((article, index) => (
      <NewsArticle
        key={index}
        title={article.title}
        description={article.description}
        author={article.author}
        date={article.publishedAt}
        url={article.title}
      />
    ))
  }

  render() {
    return (
      <main>
        <h1>News</h1>
        {this.renderArticles()}
      </main>
    )
  }
}
