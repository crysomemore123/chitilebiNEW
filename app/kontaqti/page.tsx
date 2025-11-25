'use client';

import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('../_components/MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[450px] bg-gray-200 flex items-center justify-center">
      <p>რუკის ჩატვირთვა...</p>
    </div>
  ),
});

function Page() {
  return (
    <div className="flex flex-col items-center justify-center p-5">
      <h1 className="text-2xl font-bold mb-4">კონტაქტი</h1>
      <div className="w-full max-w-4xl">
        <MapComponent />
      </div>
    </div>
  );
}

export default Page;