
import About from '@/components/home/About';
import StarBackground from '@/components/ui/StarBackground';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <StarBackground />
      <div className="pt-20">
        <About />
      </div>
    </div>
  );
}
