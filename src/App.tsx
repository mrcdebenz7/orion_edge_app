function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
            Tailwind CSS Setup Complete
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Utility Classes Working
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <code className="text-sm bg-gray-100 px-2 py-1 rounded">mx-auto</code>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <code className="text-sm bg-gray-100 px-2 py-1 rounded">grid</code>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <code className="text-sm bg-gray-100 px-2 py-1 rounded">gap-x-6</code>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
                Text Utilities
              </h2>
              <p className="text-lg text-gray-800 mb-2">Large text</p>
              <p className="text-base text-gray-600 mb-2">Base text</p>
              <p className="text-sm text-gray-500 mb-2">Small text</p>
              <p className="text-xs text-gray-400">Extra small text</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg">
              🎉 All Tailwind utility classes are producing visible styles!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
