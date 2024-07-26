import { Footer } from '@/components/component/footer';
import { Navigation } from '@/components/component/navigation';
import Details from '@/components/Details';
import Features from '@/components/Features';
import Hero from '@/components/Hero';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col ">
			<Navigation />
			<Hero />
			<Details />
			<Features />
			<Footer />
		</main>
	);
}
