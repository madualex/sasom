import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsArrowDown } from 'react-icons/bs'
import { BsArrowUp } from 'react-icons/bs'
import { AiOutlineMinus } from 'react-icons/ai'

const FAQ = ({ number, question, answer }) => {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);

  return (
    <article className="faq" onClick={() => setIsAnswerShowing(prev => !prev)}>
      <div>
        <h4 className='faq__number'>{number}</h4>
        <h4>{question}</h4>
        <button className='faq__icon'>
          {
            isAnswerShowing ? <BsArrowUp /> : <BsArrowDown />
          }
        </button>
      </div>
      {isAnswerShowing && <p>{answer}</p>}
    </article>
  )
}

export default FAQ