/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Row } from 'react-materialize';
import TweetsView from '../TweetsView';

export default function HomePage() {
  return (
    <Row>
      <TweetsView />
    </Row>
  );
}
