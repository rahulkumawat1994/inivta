import React from 'react';
import Head from '../Components/head'
import App, { Container } from 'next/app';
import Layout from '../Components/layout';
import NextHead from 'next/head'
import Head from "next/head";
import indexStyles from './index.scss'
import '../global-styles/main.scss'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}