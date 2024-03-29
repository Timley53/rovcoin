import React, { useState } from 'react'
import {RxCaretDown, RxCaretUp} from 'react-icons/rx'


const faq =[
     {
    question: 'How does crypto work?',
    answer:  'Cryptocurrency works through a technology called blockchain, which is a decentralized ledger that records transactions across a network of computers. The most well-known Cryptocurrency is Bitcoin, but there are many others as well.'
},
     {
    question: 'What are the different types of cryptocurrency?',
    answer: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi animi tempore nesciunt nemo optio! Repudiandae rem dolorum nesciunt nisi, optio ratione ipsam ex placeat illo provident sapiente eligendi quaerat velit dolores rerum explicabo sint corporis. Qui inventore sint, illo omnis eos porro doloribus rem assumenda quae, dolorum accusantium numquam minus.'
},
     {
    question: 'Is Cryptocurrency regulated by government? ',
    answer:  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit consequatur soluta voluptatibus earum modi obcaecati dolorum expedita quia numquam reiciendis dolore distinctio tempora iusto, ullam sunt deleniti magnam deserunt rem accusantium molestiae nostrum ea.'
},
     {
    question: 'How can i keep my cryptocurrency secure? ',
    answer:  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit consequatur soluta voluptatibus earum modi obcaecati dolorum expedita quia numquam reiciendis dolore distinctio tempora iusto, ullam sunt deleniti magnam deserunt rem accusantium molestiae nostrum ea.'
},
]
function Faq() {

    const [first, setfirst] = useState(false)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)
    const [forth, setForth] = useState(false)


 return (
    <div className='pb-20 w-[80%] text-white text-center mx-auto'>

        <h1 className='md:text-left sm:text-2xl'>Our Frequently Asked Questions</h1>

        <p className='md:text-left pb-12'>
            Cryptocurrency is a revolutionary digital asset that has the potential to change the financial world as we know it. By using decentralized technology and advanced encryption methods, cryptocurrency allow for secure.
        </p>


        <div className="d">

        <Accordion state={first} setState={setfirst} {...faq[0]}/>
        <Accordion state={second} setState={setSecond} {...faq[1]}/>
        <Accordion state={third} setState={setThird} {...faq[2]}/>
        <Accordion state={forth} setState={setForth} {...faq[3]}/>

        </div>
    </div>
  )
}




function Accordion({state, setState, question, answer}){


    return(
        <article className={`w-[550px] md:w-[90%]  border border-[#08ff10] mx-auto text-white ${state ? 'h-[170px] md:h-[240px] transition-all': 'h-[58px] md:h-[58px]  transition-all'} overflow-hidden rounded-3xl transition-all duration-700 my-4`}>

<button className='w-full bg-[#08ff10] text-left p-3 py-7 px-3 flex justify-between items-center h-[50px] md:h-[48px] text-blue-950 rounded-2xl font-bold '
onClick={()=> setState(!state)}

>
   <p>
   {question}
   </p>

   <span className={` text-3xl`}>
    {state && <RxCaretDown/> || <RxCaretUp/>}
   </span>
</button>
<p className='p-4'>
    {answer}
</p>
        </article>
    )
}

export default Faq