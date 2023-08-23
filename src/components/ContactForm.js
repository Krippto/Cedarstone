import { Link } from "react-router-dom"
import "./ContactForm.css"

const ContactForm = () => {
    return (
        <div className="outer-box">
            <header className="outer-box-header"><p>Have questions or interested in our services? Reach out to us!
                We'd love to hear from you</p></header>
            <div className="inner-box">
                <header className="signup-header">
                    <h1>Sign Up</h1>
                    <p>It just takes 30 seconds</p>
                </header>
                <main className="signup-body">
                    <form>
                        <p>
                            <label htmlFor="fullname">Full Name</label>
                            <input type="text" id="fullname" required />
                        </p>
                        <p>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" required />
                        </p>
                        <p>
                            <label htmlFor="phone">Contact number</label>
                            <input type="tel" id="phone" required />
                        </p>
                        <p>
                            <label htmlFor="businessname">Business Name</label>
                            <input type="text" id="businessman" required />
                        </p>
                        <p>
                            <label htmlFor="message">Your Message</label>
                            <textarea id="message" name="message" rows="4"></textarea>
                        </p>
                        {/* <p> */}
                            <input type="checkbox" id="privacyPolicy" />
                            <label htmlFor="privacyPolicy"> I agree to Cedarstone Ltd. processing my data in accordance with the
                                <Link to="/privacyPolicy"> Privacy Policy</Link></label>
                        {/* </p> */}
                        <p>
                            <button type="submit" id="submit">Grow your business</button>
                        </p>

                    </form>
                </main>
            </div>
        </div>
    )
}

export default ContactForm