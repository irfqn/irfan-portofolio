import { useParams, Link } from "react-router-dom";
import projects from "@/lib/projectsData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github } from "lucide-react";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Project tidak ditemukan</p>
      </div>
    );
  }

  return (
    <main className="bg-black min-h-screen px-4">
      <div className="max-w-[1000px] mx-auto px-6 py-20 text-white">
        {/* Back */}
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            ← Kembali
          </Button>
        </Link>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

        {/* Image */}
        <Card className="bg-neutral-900 border-neutral-800 mb-8 overflow-hidden">
          <CardContent className="p-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover"
            />
          </CardContent>
        </Card>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed mb-8">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-neutral-800 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <Button>Live Demo</Button>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
            >
              <Button
                variant="outline"
                size="icon"
                className="
                  h-10 w-10
                  bg-black text-white border-neutral-700
                  hover:bg-white hover:text-black
                  transition-colors
                "
              >
                <Github className="h-5 w-5" />
              </Button>
            </a>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
