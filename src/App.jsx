import { Header } from "./components/Header"
import { Post } from "./components/Post"
import styles from './App.module.css'

import './global.css'
import { Sidebar } from "./components/Sidebar"

const posts = [
  {
    id: 1,
    author: {
      avatar_url: 'https://github.com/LeonardoVales.png',
      name: 'Leonardo Vales',
      role: 'Back-end developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2021-05-01T12:00:00.000Z'),
  },
  {
    id: 2,
    author: {
      avatar_url: 'https://github.com/johndoe.png',
      name: 'John Doe',
      role: 'Front-end developer',
    },
    content: [
      { type: 'paragraph', content: 'Hello everyone 👋'},
      { type: 'paragraph', content: 'Just launched a new project on my portfolio. It is a project I did at the NLW Return event by Rocketseat. The project name is HealthCare 🚀' },
      { type: 'link', content: 'jane.design/healthcare' },
    ],
    publishedAt: new Date('2021-06-01T12:00:00.000Z'),
  },
  {
    id: 3,
    author: {
      avatar_url: 'https://github.com/janedoe.png',
      name: 'Jane Doe',
      role: 'Full-stack developer',
    },
    content: [
      { type: 'paragraph', content: 'Hey folks 👋'},
      { type: 'paragraph', content: 'I just uploaded another project to my portfolio. It is a project I did at the NLW Return event by Rocketseat. The project name is FitTrack 🚀' },
      { type: 'link', content: 'jane.design/fittrack' },
    ],
    publishedAt: new Date('2021-07-01T12:00:00.000Z'),
  },
]

export function App() {
  return (
      <div>
        <Header />

        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            {posts.map(post => (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            ))}
          </main>
        </div>
      </div>
  )
}

