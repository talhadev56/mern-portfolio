import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24 sm:py-32 border-t border-[var(--color-line-soft)]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionHeading
          eyebrow="03 / Projects"
          title="Systems I've actually shipped."
          description="A mix of client work and solo builds — from full Django platforms to a React portfolio built for someone else's brief."
        />

        {/* Featured: full-width large, then a two-column medium pair */}
        <div className="mt-14 space-y-6">
          {featured
            .filter((p) => p.size === 'large')
            .map((project, i) => (
              <ProjectCard key={project.id} project={project} delay={i * 0.1} />
            ))}

          <div className="grid md:grid-cols-2 gap-6">
            {featured
              .filter((p) => p.size !== 'large')
              .map((project, i) => (
                <ProjectCard key={project.id} project={project} delay={0.1 + i * 0.1} />
              ))}
          </div>
        </div>

        {/* Remaining projects: tighter three-column grid for visual rhythm */}
        {rest.length > 0 && (
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((project, i) => (
              <ProjectCard key={project.id} project={project} delay={i * 0.08} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
