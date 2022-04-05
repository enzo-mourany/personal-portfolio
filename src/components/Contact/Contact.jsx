import "./contact.scss";

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="wrapper">
                <header></header>
                <div className="container">
                    <form action="">
                        <div className="formWord">
                            <span>Full Name</span>
                            <input type="text" className="inputName" name="fullName" required />
                            <span>Phone Number</span>
                            <input type="text" className="inputPhone" name="phone" required />
                            <span>Enter Email</span>
                            <input type="text" className="inputEmail" name="email" required />
                        </div>
                        <div className="formWord">
                            <span>Message</span>
                            <input type="text" className="inputMessage" name="message" required />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
