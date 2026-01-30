import React from 'react'

export default function ProjectCard(props) {
    return (
        <>
            <div className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100 shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{props.title}</h5>
                        <p className="card-text text-muted">{props.description}</p>
                        <p className="small"><strong>Tech:</strong> {props.tech}</p>
                    </div>
                    <div className="card-footer bg-white border-0">
                        <a href={props.github} className="btn btn-sm btn-outline-dark me-2">
                            GitHub
                        </a>
                        <a href={props.live} className="btn btn-sm btn-dark">
                            Live
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
