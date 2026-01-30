import React from 'react'

export default function Home() {
    return (
        <>
            <section className="vh-100 d-flex align-items-center bg-light">
                <div className="container text-center">
                    <h1 className="display-4 fw-bold">
                        Hi, I'm Jenit Lal Shakya 👋
                    </h1>

                    <p className="lead text-muted mt-3">
                        Frontend Developer | React | JavaScript
                    </p>

                    <div className="mt-4">
                        <a href="#projects" className="btn btn-dark btn-lg me-3">
                            View Projects
                        </a>
                        <a href="#contact" className="btn btn-outline-dark btn-lg">
                            Contact Me
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
