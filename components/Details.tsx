

import { details } from '@/constants';
import Image from 'next/image';

const Details = () => {
	return (
		<div className="bg-gray-300 mt-12 ">
			<div id="details" className="px-4 md:px-10 lg:px-16 py-6 ">
				<h2 className="text-2xl font-light text-gray-900  mb-4 text-center sm:text-start">
					Why choose Easybank?
				</h2>
				<p className="text-sm  text-gray-600 font-light mb-8 text-center sm:text-start">
					We leverage Open Banking to turn your bank account into your financial
					hub. Control
				</p>
				<div className="grid gap-6 xs:gap-4 xs:grid-cols-2 md:grid-cols-4 ">
					{details.map((item) => (
						<div key="item.name" className="  rounded-sm overflow-hidden">
							<div>
								<Image
									width={40}
									height={40}
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
		</div>
	);
};

export default Details;
