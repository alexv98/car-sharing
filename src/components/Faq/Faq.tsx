import React, {FC, useState} from 'react';
import {questions} from "../../assets/data";

const Faq: FC = () => {

  const [activeQuestion, setActiveQuestion] = useState({
    order: 1,
    isActive: false
  })

  const toggleActiveQuestion = (order: number) => {
    if(order === activeQuestion.order) {
      setActiveQuestion({...activeQuestion, isActive: !activeQuestion.isActive})
    } else {
      setActiveQuestion({order, isActive: true})
    }
  }


  return (
    <section className='faq'>
      <div className="container">
        <div className="faq__content">
          <div className="faq__title">
            <h5>FAQ</h5>
            <h2>Frequently Asked Questions</h2>
            <p>
              Frequently Asked Questions About the Car Rental Booking Process
              on Our Website: Answers to Common Concerns and Inquiries.
            </p>
          </div>
          <ul className='faq__questions'>
            {
              questions.map((q, index) =>
                <li
                  key={q.title}
                  className={activeQuestion.order === index+1 && activeQuestion.isActive
                    ? "question active" : "question"}
                  onClick={() => toggleActiveQuestion(index+1)}>
                  <div className='question__title'>
                    <p>{index+1}. {q.title}</p>
                    <i className="fa-solid fa-angle-down"></i>
                  </div>
                  <div className='question__body'>{q.body}</div>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faq;
