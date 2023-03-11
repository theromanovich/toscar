import { useEffect, useState } from 'react'
import Cars from './Cars'
// import { carsData } from './accordionData'

const Accordion = props => {
  const [isAccordionClicked, setIsAccordionClicked] = useState(false)

  const paragraphsElement = props.paragraphs_accordions.data.map(
    (paragraph, i) => {
      return <li key={i}>{paragraph.attributes.paragraph}</li>
    }
  )
  console.log(props.cars[0])
  const carsElement = props.cars.data.map(car => {
    return <Cars {...car.attributes} img={car.attributes.img} />
  })
  console.log(props.paragraphs)
  const accordionToggler = () => {
    setIsAccordionClicked(!isAccordionClicked)
  }

  useEffect(() => {
    document.querySelector('.deliverer__services-title').click()
  }, [])

  return (
    <div className='deliverer__services-item'>
      <div
        className={`deliverer__services-title ${
          isAccordionClicked ? 'active' : ''
        }`}
        onClick={accordionToggler}
      >
        {props.paragraphs.attributes.title}
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M6 9L12 15L18 9'
            stroke='black'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      </div>

      <div
        className={`deliverer__services-content ${
          isAccordionClicked ? 'active' : ''
        }`}
      >
        <div className='deliverer__services-cta'>
          <button>Підбір авто</button>
          <button>Розрахунок всіх витрат</button>
        </div>
        <ul className='deliverer__services-description'>{paragraphsElement}</ul>
        <div className='deliverer__cars'>
          {carsElement}
          <div className='deliverer__cars-btn'>
            <button>Показати усі пропозиції</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Accordion
