import React from 'react';
import './index.css';
import { Card } from 'semantic-ui-react'
import '/src/index.css'

const CardExampleCard = ({weatherData}) => (
  <Card>
    <Card.Content>
        <Card.Header className="header">{weatherData.name}</Card.Header>
    </Card.Content>
  </Card>
)

export default CardExampleCard;
