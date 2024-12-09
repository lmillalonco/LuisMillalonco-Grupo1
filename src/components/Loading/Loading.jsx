import { HashLoader  } from 'react-spinners';

export default function Loading() {
  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      < HashLoader color="#451010" size={40} speedMultiplier={0.8} />
    </div>
  );
};
