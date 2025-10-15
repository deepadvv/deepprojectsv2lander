import AnimatedBadge from '@/components/ui/animated-badge';
import Image from 'next/image';

export default function Home() {
  return (
    // <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    //   <AnimatedBadge
    //     text="Introducing Eldora ui"
    //     color="#22d3ee"
    //     href="/docs/components/animated-badge"
    //   />
    // </div>
    <div className=" w-full min-h-screen h-auto flex items-center justify-center">
      <AnimatedBadge
        text="DeepProjects"
        color="#22d3ee"
        href="https://deepprojectsv2.vercel.app"
      />
    </div>
  );
}
