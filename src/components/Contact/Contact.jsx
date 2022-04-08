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
                            <div className="item">

                                <span>Enter Full Name</span>
                                <input type="text" className="inputName" name="fullName" required />
                            </div>
                            <div className="item">
                                <span>Enter Email</span>
                                <input type="text" className="inputEmail" name="email" required />

                            </div>
                        </div>
                        <div className="formWord">
                            <div className="item">

                                <span>Message</span>
                                <input type="text" className="inputMessage" name="message" required />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
