
import Hero from '@/components/home/Hero';
import StarBackground from '@/components/ui/StarBackground';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <StarBackground />
      <Hero />
    </div>
  );
}
