import "./contact.scss";

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="wrapper">
                <span className="big-text">CONTACT</span>
                <div className="container">
                    <div className="text">
                        <h2>Get In <span>Touch</span></h2>
                        <p>
                            let's discuss your great project idea so that it can become a reality</p>
                    </div>
                    <form action="">
                        <div className="formWord">
                            <div className="form-group">
                                <div className="item">

                                    <span>Enter Full Name</span>
                                    <input type="text"
                                        className="inputName"
                                        name="fullName"
                                        placeholder="Your name"
                                        required />
                                </div>
                                <div className="item">
                                    <span>Enter Email</span>
                                    <input type="text"
                                        className="inputEmail"
                                        name="email"
                                        placeholder="Your email address"
                                        required />

                                </div>
                                <div className="item">

                                    <span>Message</span>
                                    <textarea type="text"
                                        className="inputMessage"
                                        name="message"
                                        placeholder="Your comment"
                                        required />
                                </div>
                                <div className="item">
                                    <button type="submit">
                                        SUBMIT NOW
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
