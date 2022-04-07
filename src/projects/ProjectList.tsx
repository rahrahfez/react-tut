import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

function ProjectList({ projects }: any) {
  const items = projects.map((project: any) => (
    <div key={project.id} className="cols-sm">
      <ProjectCard project={project} />
      <ProjectForm />
    </div>
  ));
  return <div className="row">{items}</div>;
}

export default ProjectList;
