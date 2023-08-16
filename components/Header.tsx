"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import ThemeSwitcher from "./TeamSwitcher";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<nav className='fixed top-0 left-0 navbar w-full z-50'>
			<div className='max-w-screen-xl mx-auto'>
				<div className='flex items-center'>
					<div className='flex-1 flex align-center '>
						{mounted === true ? (
							<Link href='/' className='gap-4 flex items-center'>
								{theme === "light" ? (
									<Image
										src='/img/react-logo-light.png'
										alt='light-logo'
										width='40'
										height='40'
									/>
								) : (
									<Image
										src='/img/react-logo-dark.png'
										alt='dark-logo'
										width='40'
										height='40'
									/>
								)}

								<p className='font-bold text-lg text-slate-900 dark:text-white'>
									React SOLID Principle
								</p>
							</Link>
						) : null}
					</div>
					<div className='flex items-center justify-center'>
						<ThemeSwitcher />
					</div>
				</div>
			</div>
		</nav>
	);
};
export default Header;
