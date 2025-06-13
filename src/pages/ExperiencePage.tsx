
import Experience from '@/components/home/Experience';
import StarBackground from '@/components/ui/StarBackground';

export default function ExperiencePage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <StarBackground />
      <div className="pt-20">
        <Experience />
      </div>
    </div>
  );
}
