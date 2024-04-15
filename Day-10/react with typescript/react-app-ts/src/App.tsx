import React from "react";
import ToDo from "./components/ToDo";
import Counter  from "./components/counter";
import './index';


const myToDoItem = [
  {
    id: 1,
    title: "Learn react ",
  },
  {
    id: 2,
    title: "Learn Js ",
  },
  {
    id: 3,
    title: "Learn Node Js ",
  },
  {
    id: 4,
    title: "Learn Python ",
  },
];
const App: React.FC= (props) => {
  return (
    <div>
      <h1 className="heading1">ToDo in React with TS</h1>
      <ToDo items={myToDoItem}/>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  );
};
import { useState } from 'react';

export default function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  if (isSent) {
    return <h1>Thank you!</h1>;
  } else {
    // eslint-disable-next-line
    const [message, setMessage] = useState('');
    return (
      <form onSubmit={e => {
        e.preventDefault();
        alert(`Sending: "${message}"`);
        setIsSent(true);
      }}>
        <textarea
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    );
  }
}


