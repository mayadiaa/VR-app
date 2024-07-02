import "./ContactForm.scss";
export default function ContactForm() {
    return (
        <div className="col-12" id="ContactForm">
            <div className="col-5 Form" >
                <div className="col-12" id="Img" ></div>
            </div>
            <div className="col-5 Form" >
                <form className="col-12">
                    <label className="col-6 label1">First Name</label>
                    <input className="col-5" type="text" placeholder="First name here" />
                    <label className="col-6 label2">Last Name</label>
                    <input className="col-5" type="text" placeholder="Last name here" />
                    <label className="col-6 label3">Email Address </label>
                    <input className="col-5" type="text" placeholder="Add email" />
                    <label className="col-6 label4">Subject</label>
                    <input className="col-5" type="text" placeholder="How can we help you?" />
                    <label className="col-6 label5">Comments / Questions</label>
                    <input className="col-11 input1" type="text" placeholder="Comments" />
                    <button>Send Message</button>
                </form>

            </div>
        </div>
    );
}