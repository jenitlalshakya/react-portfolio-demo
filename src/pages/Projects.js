import React from 'react'
import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
    return (
        <>
            <div className="container py-5 mt-5">
                <h2 className="fw-bold mb-4 text-center">Projects</h2>

                <div className="row">
                    {projects.map(project => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </>
    )
}
