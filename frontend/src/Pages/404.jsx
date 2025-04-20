/**
 * @module 404
 */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Changed from "react-router" to "react-router-dom"

/**
 * A beautifully styled 404 "Page Not Found" component with animated background.
 *
 * @component
 * @returns {JSX.Element}
 */
export default function PageNotFound() {
	const [position, setPosition] = useState({ x: 50, y: 50 });

	useEffect(() => {
		const handleMouseMove = (e) => {
			const x = (e.clientX / window.innerWidth) * 100;
			const y = (e.clientY / window.innerHeight) * 100;
			setPosition({ x, y });
		};
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	const gradient = `radial-gradient(
		2500px circle at ${position.x}% ${position.y}%,
		color-mix(in oklab, var(--color-primary) 20%, transparent) 0%,
		color-mix(in oklab, var(--color-accent) 10%, transparent) 50%,
		var(--color-bgLight) 100%
	)`;

	return (
		<main
			className='grid h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 flex flex-col h-screen overflow-hidden transition duration-300'
			style={{ background: gradient }}>
			<div className='text-center'>
				<p className='text-xl font-semibold text-accent'>404</p>
				<h1 className='mt-4 text-5xl font-semibold tracking-tight text-balance text-primary sm:text-7xl'>
					Page not found
				</h1>
				<p className='mt-6 text-lg text-pretty text-primary sm:text-xl/8'>
					Sorry, we couldn&apos;t find the page you&apos;re looking for.
				</p>
				<div className='mt-10 flex items-center justify-center gap-x-6'>
					<Link
						to='/'
						className='rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-accent'>
						Go back home
					</Link>
				</div>
			</div>
		</main>
	);
}
