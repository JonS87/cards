import React from 'react';
import { Card } from './components/Card/';
import './App.css'

const App: React.FC = () => {
    return (
        <>
            <Card
              title="Card title 1"
              text="Some quick example text to build on the card title and make up the bulk of the card's content." 
              imageUrl="https://via.placeholder.com/150">
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </Card>
            <Card
              title="Card title 2"
              text="Some quick example text for the second card.">
              <a href="#" className="btn btn-primary">Go somewhere else</a>
            </Card>
        </>
    );
};

export default App;
