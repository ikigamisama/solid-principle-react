"use client";

import React from "react";
import { useParams } from "next/navigation";
import { isExistRoute, toSearchType } from "@/lib/tools";
import dynamic from "next/dynamic";

import SourceCodeLoader from "@/components/SourceCodeLoader";

const SourceCode = dynamic(() => import("@/components/SourceCode"), {
	loading: () => <SourceCodeLoader />,
});

import "highlight.js/styles/night-owl.css";
import Link from "next/link";

const Page = () => {
	const params = useParams();
	const toolInfo = toSearchType(params.types);

	if (!isExistRoute(params.types)) {
		return <>Not Found</>;
	}

	return (
		<div className='mb-8'>
			<Link
				href='/'
				className='flex items-center gap-2 text-slate-900 dark:text-white p-0.5 mb-2 mr-2 rounded-lg mb-4'>
				<svg
					stroke='currentColor'
					fill='currentColor'
					strokeWidth='0'
					viewBox='0 0 512 512'
					height='1em'
					width='1em'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						fill='none'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='48'
						d='M244 400L100 256l144-144M120 256h292'></path>
				</svg>
				Back
			</Link>

			<h1 className='inline-block text-3xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight'>
				{toolInfo.name}
			</h1>

			<p className='my-4 leading-normal text-gray-500 dark:text-white'>
				{toolInfo.introduction}
			</p>

			<h1 className='mt-4 inline-block text-3xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight'>
				Description
			</h1>

			{toolInfo.description.map((t, i) => (
				<p
					key={i}
					className='my-4 leading-normal text-gray-500 dark:text-white'>
					{t}
				</p>
			))}

			<h1 className='mt-4 inline-block text-3xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight'>
				Purpose
			</h1>

			{toolInfo.purpose.description.map((t, i) => (
				<p
					key={i}
					className='my-4 leading-normal text-gray-500 dark:text-white'>
					{t}
				</p>
			))}

			{toolInfo.purpose.feature.map((t, i) => (
				<p
					key={i}
					className='mt-4 leading-normal text-gray-500 dark:text-white'>
					<span className='font-bold text-slate-900 dark:text-white mr-2'>
						{t.title}:
					</span>
					{t.description}
				</p>
			))}

			<h1 className='mt-6 inline-block text-3xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight'>
				Examples
			</h1>

			{toolInfo.example.map((t, i) => (
				<div className='my-4' key={i}>
					<h4 className='my-4 inline-block text-lg font-bold text-slate-900 dark:text-white tracking-tight'>
						{t.title}
					</h4>

					<SourceCode code={t.source_code} />
				</div>
			))}
		</div>
	);
};

export default Page;
