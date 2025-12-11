
import React from 'react';
import LoadingSpinner from './LoadingSpinner';

interface ImageDisplayProps {
  title: string;
  imageDataUrl: string | null;
  isLoading?: boolean;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ title, imageDataUrl, isLoading = false }) => {
  return (
    <div className="bg-slate-800/50 p-4 rounded-2xl shadow-lg border border-slate-700 flex flex-col">
      <h3 className="text-lg font-semibold text-slate-300 mb-4 text-center">{title}</h3>
      <div className="flex-grow aspect-square bg-slate-900 rounded-lg flex items-center justify-center overflow-hidden">
        {isLoading ? (
          <div className="flex flex-col items-center gap-2 text-slate-400">
            <LoadingSpinner />
            <span>Generating...</span>
          </div>
        ) : imageDataUrl ? (
          <img src={imageDataUrl} alt={title} className="w-full h-full object-contain" />
        ) : (
          <div className="text-slate-500 text-center p-4">
             <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-16 w-16 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            <p className="mt-2">{title === 'Original Image' ? 'Upload an image to see it here' : 'Your edited image will appear here'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageDisplay;
