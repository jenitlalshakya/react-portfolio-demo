import React from 'react'

export default function About() {
    return (
        <>
            <div className="container py-5 mt-5">
                <h2 className="fw-bold mb-4">About Me</h2>

                <p className="text-muted">
                    I am a frontend developer focused on building responsive, user-friendly web applications using React and modern JavaScript.
                </p>

                <p className="text-muted">
                    I enjoy turning ideas into clean UI solutions and I am currently improving my skills in backend itegration and performance optimization.
                </p>

                <h5 className="mt-4">Tech Stack</h5>
                <ul className="list-inline">
                    {['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'Git'].map(skill => (
                        <li className="list-inline-item badge bg-dark me-2" key={skill}>
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
