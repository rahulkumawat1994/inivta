import React from 'react';
import Head from '../Components/head'
import App, { Container } from 'next/app';
import Layout from '../Components/Layot/layout';
import NextHead from 'next/head';



export default class MyApp extends App {
  constructor(props){
    super(props)
    this.state = {
      sideBar:false
      };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (

      <Container>
  <Layout hideSidebar={e=>this.setState({sideBar:e})} sideBar={this.state.sideBar}><Component {...pageProps} sideBar={this.state.sideBar}/></Layout></Container>
  
  
  
  )
}
}