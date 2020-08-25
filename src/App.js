import React from 'react';
import Header from './Header';
import MemeGenerator from './MemeGenerator';
import './App.css';

//import Joke from './Joke';
//import jokesData from './jokesData';

function App() {
   return(
   <div>
     <Header />
     <MemeGenerator />
   </div>
  );
}

export default App;

/*//import Joke from './Joke';
//import jokesData from './jokesData';

function App() {
  const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} 
    punchLine={joke.punchLine} />)

   return(
    <div>
      {jokeComponents}  
    </div>
  );
}
 */