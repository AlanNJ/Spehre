import React from "react";

interface IDevList {
	item: {
		title: string;
		members: number;
		img: string;
	};
}

const DevList: React.FC<IDevList> = ({ item }) => {
	const imgUrl = new URL(`../../assets/images/${item.img}`, import.meta.url)
		.href;
	return (
		<div className="w-full flex gap-2 items-center">
			<div
				className={`h-10 w-10 rounded-full bg-[url('/public/images/${item.img}')] bg-center bg-cover`}
			>
				<img src={imgUrl} className="rounded-full max-h-10 min-w-full" />
			</div>
			<div>
				<h2 className="">{item.title}</h2>
				<span className="text-gray-500 ">{item.members} Members</span>
			</div>
		</div>
	);
};

export default DevList;
