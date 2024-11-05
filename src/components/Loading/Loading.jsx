import { PulseLoader } from 'react-spinners';

export default function Loading() {
  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <PulseLoader color="#2D3A4B" size={20} speedMultiplier={0.8} />
    </div>
  );
}
