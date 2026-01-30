import React from 'react'

export default function Contact() {
    return (
        <>
            <div className="container py-5 mt-5">
                <h2 className="fw-bold mb-4">Contact Me</h2>

                <form className="col-md-6">
                    <input className="form-control mb-3" placeholder="Your Name" />
                    <input className="form-control mb-3" placeholder="Email" />
                    <textarea className="form-control mb-3" rows="4" placeholder="Message" />
                    <button className="btn btn-dark">Send Message</button>
                </form>
            </div>
        </>
    )
}
