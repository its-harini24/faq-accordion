
import './App.css';
import { useState } from 'react';

function App() {
   const[openIndex,setOpenIndex]=useState(null);//I'm using use state  because to store open indexes//
                                                  
//I'm stnswers as array of objects
const faqs =[     //faq is an array
  {                               //object1
    question:"What is React js ?",//key-value pair
    answer:"react is an javascript library."

  },
 { question: "What is JSX?",
    answer: "JSX allows you to write HTML-like syntax inside JavaScript."},
  {
question:"What is a Component?" ,
answer :"A component is a reusable piece of UI in React."
  },
{
   question:"What is useState?",
answer:"useState is a React Hook used to manage state in functional components."
},
{
  question:"What are Props?",
  answer:"Props are used to pass data from a parent component to a child component."
},
{question:"Why should I learn React?",
  answer:"React helps developers build fast, interactive, and reusable web applications."
}
]
 /*
This function handles:
1. Expanding a question.
2. Collapsing it if it's already open.
*/
 function handleClick (index){
              if(openIndex=== index){
 /*null==0false//re-renders
 index=0 and open index ==0 so returns null*/               
                setOpenIndex(null);//nothing returns
        
              }
              else{
                setOpenIndex(index);//index 0 is stored in index
              }
            }

  return (
    <div className="faq-box">
      <h2 className="faq-main-title">Frequently Asked Questions</h2>
           {faqs.map((faq,index)=>(
        <div className="faq-row" >
          <button className="faq-btn" onClick={()=>handleClick(index) }> {faq.question}</button>
        {/* Show answer only if this faq is open*/}
          {openIndex===index &&<p className="faq-txt"> {faq.answer}  </p>}
         
       </div>
      )
      )}
      
    </div>
  );
}

export default App;
