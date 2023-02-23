import { useState } from "react"


const Accordion = ({title, paragraphs}) => {
    const [isAccordionClicked, setIsAccordionClicked] = useState(false);
    const accordionToggler = () => {
        setIsAccordionClicked(!isAccordionClicked)
    }

    return (
        <div className="deliverer__services-item">

            <div className={`deliverer__services-title ${isAccordionClicked && 'active'}`} onClick={accordionToggler}>
                {title}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>

            <div className={`deliverer__services-content ${isAccordionClicked && 'active'}`}>
                <ul className="deliverer__services-description">
                    {paragraphs.map(paragraph => {
                        return <li>{paragraph}</li>
                    })}
                </ul>
            </div>

        </div>
    )
}
export default Accordion