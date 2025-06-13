
import Skills from '@/components/home/Skills';
import StarBackground from '@/components/ui/StarBackground';

export default function SkillsPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <StarBackground />
      <div className="pt-20">
        <Skills />
      </div>
    </div>
  );
}
