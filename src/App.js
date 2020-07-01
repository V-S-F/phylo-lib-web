import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import { Popover } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import HomeContent from './components/HomeContent';
import Generate from './components/Generate';
import Visualize from './components/Visualize';
import DisplayPairwise from './components/DisplayPairwise';

const Header = () => {
  const content = (
    <div>
      <p>A <a href="https://en.wikipedia.org/wiki/Phylogenetic_tree">phylogenetic tree</a> is a tree that shows the evolutionary relationships between species. The structure of these trees can be stored in <a href="http://www.phyloxml.org/">XML</a> files. To see visualizations of such trees, you can click Visualize Phylogenetic Trees.</p>
      <p> We can also try to predict the structure of phylogenetic trees by looking at the similarities in the DNAs of different species. To know more, you can click Generate Phylogenetic Trees.</p>
    </div>
  );
  return (
    <header className="site-header">
      <Link className="site-title" to="/phylo-lib-web/">
        PhyloML
      </Link>
      <Popover className="clickable"
        content={content}
        className="tooltip"
        // title="Title"
        trigger="click"
      >
        <a className="tooltip">
          {' '}
          <InfoCircleOutlined style={{ paddingRight: '0.5em' }} />
          Confused by all the terms?
        </a>
      </Popover>
    </header>
  );
};

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/phylo-lib-web/generate">
            <Generate />
          </Route>
          <Route path="/phylo-lib-web/visualize">
            <Visualize />
          </Route>
          <Route path="/phylo-lib-web/pairwise">
            <DisplayPairwise />
          </Route>
          <Route path="/phylo-lib-web/">
            <HomeContent />
          </Route>
          <Route path="/">
            <HomeContent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
