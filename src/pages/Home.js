import React, { Component } from 'react'

import trees from '../assets/trees.jpg'
import Post from '../components/Post'

export default class extends Component {
  state = {
    posts: null
  }

  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()

    this.setState({ posts })
  }

  renderPosts = () => {
    if (!this.state.posts) {
      return <p>Loading...</p>
    }

    return this.state.posts.map(post => (
      <Post key={post.id} title={post.title} body={post.body} />
    ))
  }

  render() {
    return (
      <div>
        <main>
          <h1>Home</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <img src={trees} alt="Trees" />
        </main>
        <h2>Some Posts</h2>
        {this.renderPosts()}
      </div>
    )
  }
}
