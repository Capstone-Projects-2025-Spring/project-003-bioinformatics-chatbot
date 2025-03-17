export default function LoadingSpinner() {
  return (
    <div className="flex space-x-2 justify-left items-end bg-gray-800 pl-3" data-testid="spinner">
      <span className="sr-only">Loading...</span>
      <div className="h-3 w-3 bg-gray-200 rounded-full animate-bounce" style={{ animationDelay: "-0.3s" }}></div>
      <div className="h-3 w-3 bg-gray-200 rounded-full animate-bounce" style={{ animationDelay: "-0.15s" }}></div>
      <div className="h-3 w-3 bg-gray-200 rounded-full animate-bounce"></div>
    </div>
  );
}
