export default function Test() {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-500">
      <div className="relative h-screen">
        <div className="absolute inset-0 flex items-center justify-center"></div>
        <div className="absolute inset-0">
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative w-4 h-4 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
