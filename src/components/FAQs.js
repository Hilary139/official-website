import React, { useState }  from 'react'

const FAQs = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "Can I send large files?",
      answer: "Yes. Xend allows you to send large files",
      id:0
    },
    {
      question: "What if I forgot my password?",
      answer: "Xend dosen't disclose user passwords. Please ask the sender to resend the password.",
      id:1
    }
])
  return (
    <div  id='faqs'>
      <h2>Frequently asked questions</h2>
      <p>Answers to most common questions.</p>
      <div className='flex' id='faqsContainer'>
              {faqs.map((faq) => {
          return (
            <div className='faq' key={faq.id}>
              <h3>{faq.question}</h3>
              <p>{ faq.answer }</p>
            </div>
        )
      })}
      </div>
    </div>
  )
}

export default FAQs