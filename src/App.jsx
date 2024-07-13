import React , {useState} from "react";
import { data } from './constant';
const App = () => {
  const [count, setCount] = useState(0);
  const [text,setText]= useState([]);
  const handleSubmit = (e) =>{
    e.preventDefault();
    let amount=parseInt(count);
    if(amount<0)
    {
      alert("enter a positive number");
    }
    if(amount>11)
    {
      alert("opps! it's too big number");
    }
    setText(data.slice(0,amount));
  };
  return (
    <section className="section-center">
      <h3>Tired of boring loreum ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label>paragraphs:</label>
        <input type="number" name="amount" id="amount" value={count} onChange={(e) => setCount(e.target.value)} />
        <button className="btn">Generate</button>
      </form>
      <article>
       {text.map((data, index) => (
          <p key={index}>{data}</p>
       ))}

    
      </article>
    </section>
  );
};

export default App;