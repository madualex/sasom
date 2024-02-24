import { FaCrown } from 'react-icons/fa'
import { programs } from '../data'
import SectionHead from './SectionHead'
import Card from '../UI/Card'
import { Link } from 'react-router-dom'
import { AiFillCaretRight } from 'react-icons/ai'

const Programs = () => {
    return (
        <section className="programs">
            <div className="container ">
                <h2 className='section__head'>What we provide</h2>
                {/* <SectionHead icon={<FaCrown />} title="Programs" /> */}
                <div className="programs__wrapper">
                    {
                        programs.map(({ id, icon, title, info, isConsult, isIT, isCloud }) => {
                            return (
                                <Card key={id} className='programs__program'>
                                    <span className={isConsult ? 'a' : isIT ? 'b' : isCloud ? 'c' : ''}>
                                        <img src={icon} alt="" />
                                    </span>
                                    <h4>{title}</h4>
                                    <small>{info}</small>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Programs