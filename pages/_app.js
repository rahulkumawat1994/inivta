import React from 'react';
import Head from '../Components/head'
import App, { Container } from 'next/app';
import Layout from '../Components/layout';
import NextHead from 'next/head'


export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}