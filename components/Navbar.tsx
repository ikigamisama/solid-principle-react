"use client";

import Link from "next/link";
import React from "react";
import { useParams, usePathname } from "next/navigation";
import { links } from "@/lib/tools";

const Navbar = () => {
	const params = useParams();
	const path = usePathname();

	return (
		<aside className='hidden xl:block w-[18rem] fixed top-[95px] navbar-tool-list'>
			<div className='mb-4'>
				<h5 className='mb-8 lg:mb-4 font-semibold text-xl text-slate-900 dark:text-white'>
					Getting Started
				</h5>
				<ul className='space-y-6 lg:space-y-2 border-l-2 border-sky-100 dark:border-[#16181A]'>
					<li>
						<Link
							href='/'
							className={`${
								path === "/"
									? 'block border-l-4 pl-4 -ml-[3px] border-current font-semibold text-slate-800 dark:text-sky-500 border-sky-500 dark:border-gray-500"'
									: "block border-l-4 pl-4 -ml-[3px] border-transparent font-normal hover:border-sky-500 text-slate-600 dark:text-slate-400"
							} `}>
							Introduction
						</Link>
					</li>
				</ul>
			</div>
			<div className='mb-4'>
				<h5 className='mb-8 lg:mb-4 font-semibold text-xl text-slate-900 dark:text-white'>
					Types
				</h5>
				<ul className='space-y-6 lg:space-y-2 border-l-2 border-sky-100 dark:border-[#16181A]'>
					{links.map((l, i) => (
						<li key={i}>
							<Link
								href={l.link}
								className={`${
									params.types === l.slug
										? 'block border-l-4 pl-4 -ml-[3px] border-current font-semibold text-slate-800 dark:text-sky-500 border-sky-500 dark:border-gray-500"'
										: "block border-l-4 pl-4 -ml-[3px] border-transparent font-normal hover:border-sky-500 text-slate-600 dark:text-slate-400"
								} `}>
								{l.name}
							</Link>
						</li>
					))}
				</ul>
			</div>

			<div>
				<p className='text-xs text-slate-800 dark:text-white'>
					Power By: ChatGPT
				</p>
				<p className='text-xs text-slate-800 dark:text-white'>
					Created By:
					<Link href='https://ikigami-devs.vercel.app'> Ikigami</Link>
				</p>
			</div>
		</aside>
	);
};

export default Navbar;
