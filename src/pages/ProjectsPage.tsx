
import Projects from '@/components/home/Projects';
import StarBackground from '@/components/ui/StarBackground';

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <StarBackground />
      <div className="pt-20">
        <Projects />
      </div>
    </div>
  );
}
