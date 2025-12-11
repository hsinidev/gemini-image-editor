import React, { useState, useCallback } from 'react';
import { editImageWithPrompt } from './services/geminiService';
import { ImageFile } from './types';
import ImageUpload from './components/ImageUpload';
import ImageDisplay from './components/ImageDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import LegalModals from './components/LegalModals';
import SeoArticle from './components/SeoArticle';

type ModalType = 'about' | 'contact' | 'guide' | 'privacy' | 'terms' | 'dmca' | null;

const App: React.FC = () => {
  const [originalImage, setOriginalImage] = useState<ImageFile | null>(null);
  const [editedImage, setEditedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setOriginalImage({
        file: file,
        base64: reader.result as string,
      });
      setEditedImage(null);
    };
    reader.onerror = () => {
        setError('Failed to read the image file.');
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = useCallback(async () => {
    if (!originalImage || !prompt) {
      setError('Please upload an image and provide an editing prompt.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setEditedImage(null);

    try {
      const base64Data = originalImage.base64.split(',')[1];
      const mimeType = originalImage.file.type;
      
      const newImageBase64 = await editImageWithPrompt(base64Data, mimeType, prompt);
      
      setEditedImage(`data:${mimeType};base64,${newImageBase64}`);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [originalImage, prompt]);

  return (
    <div className="relative min-h-screen text-slate-100 font-sans overflow-hidden">
      
      {/* --- Galaxy Background Start --- */}
      <div className="fixed inset-0 z-0 bg-[#020617]">
        {/* Nebulas */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/30 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[4000ms]"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[7000ms]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/20 rounded-full blur-[100px] mix-blend-screen"></div>
        
        {/* Stars CSS generation */}
        <style>{`
          .stars-container {
             width: 100%; height: 100%; overflow: hidden; position: absolute;
          }
          .star {
            position: absolute;
            background: white;
            border-radius: 50%;
            animation: twinkle var(--duration) ease-in-out infinite;
            opacity: var(--opacity);
          }
          @keyframes twinkle {
            0%, 100% { opacity: 0.2; transform: scale(0.8); }
            50% { opacity: 1; transform: scale(1.2); }
          }
        `}</style>
        
        <div className="stars-container">
           {/* Generating a few random stars inline for effect */}
           {[...Array(50)].map((_, i) => (
             <div 
               key={i} 
               className="star" 
               style={{
                 left: `${Math.random() * 100}%`,
                 top: `${Math.random() * 100}%`,
                 width: `${Math.random() * 3 + 1}px`,
                 height: `${Math.random() * 3 + 1}px`,
                 '--duration': `${Math.random() * 3 + 2}s`,
                 '--opacity': Math.random()
               } as React.CSSProperties} 
             />
           ))}
        </div>
      </div>
      {/* --- Galaxy Background End --- */}

      <div className="relative z-10 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 flex flex-col min-h-screen">
        
        <header className="text-center mb-10 py-6">
          <div className="inline-block relative">
            <h1 className="text-5xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 drop-shadow-2xl tracking-tight">
              Gemini Editor
            </h1>
            <span className="absolute -top-4 -right-8 bg-gradient-to-r from-purple-600 to-blue-600 text-xs font-bold px-2 py-1 rounded-full shadow-lg border border-white/20">v2.5 AI</span>
          </div>
          <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Unleash cosmic creativity. Upload an image, describe your vision, and let the AI reshape reality.
          </p>
        </header>

        <main className="flex-grow w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* Controls Section - Glassmorphism */}
            <div className="bg-slate-800/40 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/10 flex flex-col gap-8 transition-all hover:border-purple-500/30">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                   <label className="text-lg font-semibold text-slate-200 flex items-center gap-2">
                     <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600/80 text-sm">1</span>
                     Upload Image
                   </label>
                </div>
                <ImageUpload onImageUpload={handleImageUpload} />
              </div>
              
              <div className="space-y-4">
                <label htmlFor="prompt" className="text-lg font-semibold text-slate-200 flex items-center gap-2">
                   <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600/80 text-sm">2</span>
                   Describe Changes
                </label>
                <div className="relative">
                  <textarea
                    id="prompt"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe your imagination... e.g., 'Turn this into a cyberpunk city', 'Add a dragon in the sky'"
                    className="w-full h-36 p-4 bg-slate-900/60 border border-slate-600/50 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none placeholder:text-slate-500 text-slate-200 shadow-inner"
                    disabled={isLoading}
                  />
                  <div className="absolute bottom-3 right-3 text-xs text-slate-500">
                    {prompt.length} chars
                  </div>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isLoading || !originalImage || !prompt}
                className="group relative w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-xl shadow-lg shadow-purple-900/20 hover:shadow-purple-600/40 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-lg">
                  {isLoading ? (
                    <>
                      <LoadingSpinner />
                      Generating Magic...
                    </>
                  ) : (
                    <>
                      Generate Image
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </>
                  )}
                </span>
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
              </button>
              
              {error && <ErrorMessage message={error} />}
            </div>

            {/* Display Section - Glassmorphism */}
            <div className="flex flex-col gap-6 lg:sticky lg:top-8">
              <ImageDisplay title="Original" imageDataUrl={originalImage?.base64 || null} />
              <ImageDisplay title="Generated Result" imageDataUrl={editedImage} isLoading={isLoading} />
            </div>
          </div>

          <SeoArticle />

        </main>

        <footer className="mt-20 border-t border-slate-800/50 pt-10 pb-6 text-center text-slate-400 bg-slate-900/30 backdrop-blur-sm rounded-t-3xl mx-[-1rem] sm:mx-[-1.5rem] lg:mx-[-2rem] px-8">
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-medium">
            <button onClick={() => setActiveModal('about')} className="hover:text-purple-400 transition-colors">About</button>
            <button onClick={() => setActiveModal('contact')} className="hover:text-purple-400 transition-colors">Contact</button>
            <button onClick={() => setActiveModal('guide')} className="hover:text-purple-400 transition-colors">Guide</button>
            <button onClick={() => setActiveModal('privacy')} className="hover:text-purple-400 transition-colors">Privacy Policy</button>
            <button onClick={() => setActiveModal('terms')} className="hover:text-purple-400 transition-colors">Terms of Service</button>
            <button onClick={() => setActiveModal('dmca')} className="hover:text-purple-400 transition-colors">DMCA</button>
          </div>

          <div className="mb-4">
             <p className="text-slate-500 text-xs">
               &copy; {new Date().getFullYear()} Doodax.com. All rights reserved. 
               Disclaimer: Images are processed by Google Gemini API.
             </p>
          </div>
          
          <div className="mt-6 p-4 rounded-xl bg-slate-800/30 inline-block border border-slate-700/50 hover:border-purple-500/30 transition-colors">
            <p className="font-semibold text-slate-300">
              Powered by <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 hover:from-purple-300 hover:to-cyan-300 font-bold ml-1">HSINI MOHAMED</a>
            </p>
          </div>
        </footer>
      </div>

      <LegalModals activeModal={activeModal} onClose={() => setActiveModal(null)} />
    </div>
  );
};

export default App;