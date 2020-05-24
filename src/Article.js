import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './Destro.jpeg';

const Article = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Destroyers</h1>
        <p className="lead">Aprende mientras ries</p>
        <hr className="my-2" />
        <p></p>
        <p className="lead">
          <Button color="primary">Contactanos</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Article;