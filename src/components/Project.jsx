import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import projects from "@/lib/projectsData";

const Projects = () => {
  return (
    <section id="projects" className="mt-32">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-white">Projects</h2>
        <p className="mt-2 text-gray-400">Some projects I have worked on</p>
      </div>

      <div className="grid gap-8 grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="group bg-neutral-900 border-neutral-800 overflow-hidden transition hover:border-white/20"
          >
            <CardContent className="p-0">
              <img
                src={project.image}
                alt={project.title}
                className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </CardContent>

            <CardHeader className="space-y-1">
              <CardTitle className="text-white text-lg">
                {project.title}
              </CardTitle>
              <p className="text-sm text-gray-400 line-clamp-2 min-h-[40px]">
                {project.shortDesc}
              </p>
            </CardHeader>

            <CardFooter className="flex gap-2 pt-2">
              <Link to={`/projects/${project.slug}`}>
                <Button size="sm" variant="secondary">
                  Detail
                </Button>
              </Link>

              <a href={project.demoUrl} target="_blank" rel="noreferrer">
                <Button size="sm">Live Demo</Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
