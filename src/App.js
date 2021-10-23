import  Pizza from './PizzaIcon';
import  calender from './calendar.jpg';
import {ics} from 'calendar-link'
import {motion} from 'framer-motion'
import './App.css';

const event = {
  title: "מסיבת פיצה!",
  // description: "Be there!",
  start: "2021-12-24 18:00:00 +0200",
  duration: [2, "hour"],
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Pizza/>
        <motion.h1
          animate={{
            color:['#00aa00', '#ffffff','#aa0000','#00aa00',],
            transition:{
              // yoyo:Infinity,
              repeat:Infinity,
              ease:'easeInOut',
              duration:2
            }
          }}
        >
          - פיצה -
        </motion.h1>
          יום ראשון, שעה שש
        <a
          className="App-link"
          href={ics(event)}
          target="_blank"
          title="הוספה ליומן"
        >
          <img src={calender}/>
        </a>
      </header>
    </div>
  );
}

export default App;
