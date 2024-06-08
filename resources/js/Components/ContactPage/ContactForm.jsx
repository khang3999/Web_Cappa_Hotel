import { Head } from "@inertiajs/react";
import "../../../css/contact.css"
import "../../../css/app.css"
const ContactForm = () => {
    return (
        <>
            <section className="mb-5 z-2 position-relative bg-white section-padding contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mb-60">
                            <h3>The Cappa Luxury Hotel</h3>
                            <p>
                                Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine.
                            </p>
                            <div className="reservations mb-30">
                                <div className="icon">
                                    <span className="flaticon-call">
                                    </span>
                                </div>
                                <div className="text">
                                    <p>Reservation</p>
                                    <a href="tel:005-333-4444">005 333 4444</a>
                                </div>
                            </div>
                            <div className="reservations mb-30">
                                <div className="icon">
                                    <span className="flaticon-envelope">
                                    </span>
                                </div>
                                <div className="text">
                                    <p>Email Info</p>
                                    <a href="mailto:info@luxuryhotel.com">info@luxuryhotel.com</a>
                                </div>
                            </div>
                            <div className="reservations">
                                <div className="icon">
                                    <span className="flaticon-location-pin">
                                    </span>
                                </div>
                                <div class="text">
                                    <p>Address</p> 
                                    1616 Broadway NY, New York 10001
                                    <br/>
                                    United States of America
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h3>Get in touch</h3>
                            <form action="" method="post" className="contact_form">
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" name="name" placeholder="Your Name" required/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" name="name" placeholder="Your email" />
                                    </div>
                                    <div className="col-md-12">
                                        <textarea name="message" id="message" placeholder="Your message"></textarea>
                                    </div>
                                </div>
                                    <button type="submit" className="btn-dark2">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
export default ContactForm;