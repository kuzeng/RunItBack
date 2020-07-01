import React, { Component } from 'react';
import Layout from '../hoc/Layout/Layout'
import Header from '../components/Header/Header';

class Main extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header />
        </Layout>
      </div>
    );
  }
}

export default Main;
