import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Layout from '../components/Layout.js'
import Project from '../components/Project.js'

export default function Home() {
  return (
    <Layout>
      <Project 
        name='Synth'
        img='/synth.png'
        deployed='https://synth-frontend.vercel.app/'
        git='https://github.com/billymoroney1/synth-frontend'
        info='Capstone project for General Assembly. Full-stack application using MERN, NextJS, TailwindCSS, and the node package Tone.js. Allows users to design sounds in the browser and perform full CRUD operations on their settings.'
        technologies={['Mongo', 'React', 'Nodejs', 'Heroku', 'Tailwind']}
      />
      <Project  
        name='Mario Party'
        img='/project1.jpeg'
        deployed='https://billymoroney1.github.io/mario-party/'
        git='https://github.com/billymoroney1/mario-party'
        info='The first project I finished. Play a bootleg version of Mario Party against the computer in your browser. Game relies on DOM manipulation and some hacky manipulation of CSS classes. Would like to rework using HTML canvas in the future!'
        technologies={['Javascript', 'HTML', 'CSS']}
       />
      <Project 
        name='Music Search'
        img='/project2.jpeg'
        deployed='https://billy-album-picker.herokuapp.com/'
        git='https://github.com/billymoroney1/billy-album-picker'
        info='A server-side app using NodeJS, Express, SQL, Sequelize, EJS, Materialize CSS, and the Spotify API. You can create an account, search for albums/artists/tracks, save albums, create playlists, and view some album metadata.'
        technologies={['Nodejs', 'Postgresql', 'Sequelize', 'materialize', 'Spotify']}
      />
      <Project
        name='Chirper'
        img='/project3.png'
        deployed='https://chirper.surge.sh/'
        git='https://github.com/billymoroney1/Team-7-frontend'
        info='A quick-and-dirty Twitter imitation. Full-stack group project that allows users to make accounts, follow other users, make posts, reply, repost, search for users and posts, like posts, and more. Uses the MERN stack, front end is deployed through Surge, the backend is on Heroku.'
        technologies={['Mongo', 'React', 'Nodejs', 'Heroku', 'Surge', 'Bootstrap']}
        />
      <Project
        name='Portfolio'
        img='/project4.png'
        deployed='https://portfolio-fklk6wjwl.vercel.app/'
        git='https://github.com/billymoroney1/portfolio'
        info='This very website! Uses NextJS and Tailwind CSS. Handling emails from the contact form with EmailJS. Responsive and looks good on mobile -'
        technologies={['React', 'Nodejs', 'Nextjs', 'Tailwind', 'Heroku']}
        />
    </Layout>
  )
}
