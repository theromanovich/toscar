

const Form = () => {
  return (
    <section className="form">
        <div className="form__link">
            <a>Contact us</a>
        </div>
        <div className="form__title">
            Get in touch
        </div>
        <div className="form__subtitle">
            We’d love to hear from you. Please fill out this form.
        </div>
        <form id="form">

            <div className="username">
                <div className="username__item">
                    <label className="label" htmlFor="first-name">First name</label>
                    <input 
                        type="text" 
                        id="first-name" 
                        name="first-name"
                        placeholder="First name"/
                        >
                </div>
                <div className="username__item">
                    <label className="label" htmlFor="last-name">Last name</label>
                    <input 
                        type="text" 
                        id="last-name" 
                        name="last-name"
                        placeholder="Last name"
                        />
                </div>
            </div>

            <div className="email">
                    <label className="label" htmlFor="email">Email</label>
                    <input 
                        className="input"
                        type="email" 
                        id="email" 
                        name="email"
                        placeholder="you@company.com"
                        />
            </div>

            <div className="phone">
                    <label className="label" htmlFor="phone">Phone number</label>
                    <input 
                        className="input"
                        type="tel" 
                        id="phone" 
                        name="phone"
                        pattern="[0]{1}[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-2]{2}"
                        placeholder="068-123-23-21"
                        />
            </div>

            <div className="message">
                    <label className="label" htmlFor="message">Message</label>
                    <textarea name="message" form="form" id="message" placeholder="Leave us a message..."></textarea>
            </div>

            <div className="privacy">
                <input 
                    type="checkbox" 
                    id="privacy" 
                    name="privacy"
                    />
                <label htmlFor="privacy">You agree to our friendly <a href="#">privacy policy</a>.</label>
            </div>
            <button type="submit">Send message</button>
        </form>
    </section>
  )
}
export default Form;