export default function LoadingSpinner() {
	return (
		<div className='flex space-x-2 bg-transparent pl-2' data-testid='spinner'>
			<div
				className='h-3 w-3 bg-primary rounded-full animate-bounce'
				style={{ animationDelay: "-0.3s" }}></div>
			<div
				className='h-3 w-3 bg-primary rounded-full animate-bounce'
				style={{ animationDelay: "-0.15s" }}></div>
			<div className='h-3 w-3 bg-primary rounded-full animate-bounce'></div>
		</div>
	);
}
