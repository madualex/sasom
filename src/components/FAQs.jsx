import SectionHead from './SectionHead'
import { FaQuestion } from 'react-icons/fa'
import { faqs } from '../data'
import FAQ from './FAQ'


const FAQs = () => {
  return (
    <section className="faqs">
      <div className="container faqs__container">
        <h2 className='section__head'>We have expertise in these fields</h2>
        <p>Our team possesses extensive expertise in a wide range of fields, enabling us to deliver exceptional solutions and services tailored to your unique business needs. Trust Sasom to provide expert guidance and deliver results that drive your success.</p>
        {/* <SectionHead icon={<FaQuestion />} title="FAQs" /> */}
        <div className="faqs__wrapper">
          {
            faqs.map(({ id, number, question, answer }) => {
              return <FAQ key={id} number={number} question={question} answer={answer} />
            })
          }
        </div>
      </div>
    </section>
  )
}

export default FAQs