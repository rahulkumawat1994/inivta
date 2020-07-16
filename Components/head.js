import React from 'react'
import NextHead from 'next/head'

const Head = ({ title, description }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>Thumbs App</title>
    <link rel="icon" href="/favicon.ico" />
    <meta name="description" content={description || ''} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;400&display=swap" rel="stylesheet"/>
  </NextHead>
)

export default Head