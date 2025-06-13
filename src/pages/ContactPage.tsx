
import Contact from '@/components/home/Contact';
import StarBackground from '@/components/ui/StarBackground';

export default function ContactPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <StarBackground />
      <div className="pt-20">
        <Contact />
      </div>
    </div>
  );
}
