'use client';

import Image from 'next/image';
import hero from '@/public/images/bg-intro-mobile.svg';
import heroD from '@/public/images/bg-intro-desktop.svg';
import mockUp from '@/public/images/image-mockups.png';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

const Hero = () => {
	const [bg, setBg] = useState('');

	useEffect(() => {
		function callback() {
			const width = window.innerWidth;

			if (width < 500) {
				setBg(hero);
			} else {
				setBg(heroD);
			}
		}

		callback();

		window.addEventListener('resize', callback);

		return () => {
			window.removeEventListener('resize', callback);
		};
	}, []);

	return (
		<div
			className="relative mt-24 px-4 md:px-0 md:pl-10 lg:pl-16 py-6 my-12 grid md:grid-cols-2 gap-5 overflow-visible"
			id="hero"
		>
			<div className="md:col-start-2 relative w-full h-full overflow-visible">
				{bg && (
					<Image
						src={bg}
						alt="hero"
						layout="fill"
						objectFit="cover"
						className="absolute object-center inset-0 z-0"
					/>
				)}
				<Image
					src={mockUp}
					alt="hero"
					className="relative z-10 bg-transparent w-full h-auto"
				/>
			</div>
			<div className="md:flex md:items-center md:justify-center md:col-start-1 md:row-start-1 flex-col">
				<div className="text-center   md:text-start py-6 ">
					<h2 className="text-2xl text-gray-950 mb-6">
						Next generation digital banking
					</h2>
					<p className=" text-sm text-gray-600 mb-9">
						Take your financial life online. Your Easybank account will be a
						one-stop-shop for spending, saving, budgeting, investing, and much
						more.
					</p>
					<Button className="bg-gradient-to-r from-[#33d35e] to-[#2ab6d9] text-white px-6 py-2 rounded-full">
						Request Invite
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
