

import jokesData from './components/jokesData';
import Joke from './components/jokes';

import { useState } from 'react';
// Conditional rendering and &&

// function App(){
//   const [messages, setMessages] = useState(['a'])
   
//     return (
//         <div>
//           {
//           messages.length === 0 ? <h1>"You're all caught up!"</h1>
//            :<h1>You have unread {messages.length>1 ?  "messages" : "message"} !</h1>
//            }
          
//         </div>
//     )
// }

function App() {
  const jokeElements = jokesData.map(joke => {
    return (
        <Joke 
            key={joke.id}
            setup={joke.setup} 
            punchline={joke.punchline} 
        />
    )
})
return (
    <div >
        {jokeElements}
    </div>
)
}
export default App;
