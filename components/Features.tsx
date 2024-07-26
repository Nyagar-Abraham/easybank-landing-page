import { articles } from '@/constants';
import Image from 'next/image';

const Features = () => {
	return (
		<div id="features" className="px-4 md:px-10 lg:px-16 py-6 my-12">
			<h2 className="text-2xl font-light text-gray-900 text-center mb-6">
				Latest articles
			</h2>
			<div className="grid gap-6 xs:gap-4 xs:grid-cols-2 md:grid-cols-4 ">
				{articles.map((item) => (
					<div
						key="item.name"
						className="bg-white shadow-md rounded-sm overflow-hidden"
					>
						<div>
							<Image
								src={item.icon}
								alt="icon"
								className="hover:scale-[1.05] transition-transform duration-300"
							/>
						</div>
						<div className="py-6 px-3">
							<p className="text-[16px] font-semibold mb-4">{item.name}</p>
							<p className="text-[14px]  text-gray-500  pr-3">{item.text}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Features;
