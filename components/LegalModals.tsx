import React from 'react';

type ModalType = 'about' | 'contact' | 'guide' | 'privacy' | 'terms' | 'dmca' | null;

interface LegalModalsProps {
  activeModal: ModalType;
  onClose: () => void;
}

const LegalModals: React.FC<LegalModalsProps> = ({ activeModal, onClose }) => {
  if (!activeModal) return null;

  const getTitle = () => {
    switch (activeModal) {
      case 'about': return 'About Doodax';
      case 'contact': return 'Contact Us';
      case 'guide': return 'User Guide';
      case 'privacy': return 'Privacy Policy';
      case 'terms': return 'Terms of Service';
      case 'dmca': return 'DMCA Policy';
      default: return '';
    }
  };

  const getContent = () => {
    switch (activeModal) {
      case 'about':
        return (
          <div className="space-y-4">
            <p>Welcome to <strong>doodax.com</strong>.</p>
            <p>We are dedicated to providing the most advanced AI image editing tools on the web. Powered by Google's Gemini technology, we empower creators to realize their vision instantly.</p>
          </div>
        );
      case 'contact':
        return (
          <div className="space-y-4">
            <p>We'd love to hear from you.</p>
            <p><strong>Website:</strong> doodax.com</p>
            <p><strong>Email:</strong> <a href="mailto:hsini.web@gmail.com" className="text-blue-400 hover:underline">hsini.web@gmail.com</a></p>
            <p className="text-sm text-slate-400 mt-4 border-t border-slate-700 pt-4">For business inquiries, API access, or support, please reach out via email.</p>
          </div>
        );
      case 'guide':
        return (
          <div className="space-y-4">
             <ol className="list-decimal pl-5 space-y-2">
               <li><strong>Upload:</strong> Drag and drop your image or click to select a file.</li>
               <li><strong>Prompt:</strong> Write a clear instruction (e.g., "Change the background to a forest").</li>
               <li><strong>Generate:</strong> Click the button and wait for the AI to process your request.</li>
               <li><strong>Download:</strong> Right-click the result to save your edited image.</li>
             </ol>
          </div>
        );
      case 'privacy':
        return (
          <div className="space-y-4 text-sm">
            <p><strong>Effective Date:</strong> May 20, 2024</p>
            <p>At doodax.com, we respect your privacy. This policy outlines how we handle your data.</p>
            <h4 className="font-bold text-white">1. Information Collection</h4>
            <p>We do not permanently store uploaded images. Images are processed transiently for the purpose of editing.</p>
            <h4 className="font-bold text-white">2. Third-Party Services</h4>
            <p>We use Google Gemini API for image processing. Please refer to Google's Privacy Policy for details on how they handle API data.</p>
            <h4 className="font-bold text-white">3. Cookies</h4>
            <p>We may use local storage to enhance user experience.</p>
          </div>
        );
      case 'terms':
        return (
           <div className="space-y-4 text-sm">
            <p>By using doodax.com, you agree to these terms.</p>
            <h4 className="font-bold text-white">1. Usage</h4>
            <p>You may not use this service for illegal purposes or to generate harmful content.</p>
            <h4 className="font-bold text-white">2. Disclaimer</h4>
            <p>The service is provided "as is" without warranties of any kind.</p>
           </div>
        );
      case 'dmca':
         return (
           <div className="space-y-4 text-sm">
            <p>We respect intellectual property rights.</p>
            <p>If you believe your copyrighted work has been infringed, please contact us at <strong>hsini.web@gmail.com</strong> with the subject line "DMCA Notice".</p>
            <p>Please provide:</p>
            <ul className="list-disc pl-5">
              <li>Description of the copyrighted work.</li>
              <li>Location of the infringing material on our site.</li>
              <li>Your contact information.</li>
            </ul>
           </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onClick={onClose}>
      <div 
        className="bg-slate-900/90 border border-slate-600 rounded-2xl shadow-2xl max-w-xl w-full max-h-[85vh] flex flex-col animate-fadeIn overflow-hidden" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-slate-700 bg-slate-800/50">
          <h3 className="text-xl font-bold text-white">{getTitle()}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-700 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto custom-scrollbar text-slate-300 leading-relaxed">
          {getContent()}
          
          <div className="mt-8 p-6 bg-red-950/40 border-l-4 border-red-600 rounded-r-lg">
            <div className="flex items-start gap-3">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
               </svg>
               <div>
                  <h4 className="font-bold text-red-200 text-sm uppercase tracking-wide mb-1">Important Safety & Policy Notice</h4>
                  <p className="text-sm text-red-200/90">
                     Doodax.com strictly adheres to Google's Generative AI Prohibited Use Policy. 
                     <strong> Do not attempt to generate sexual, violent, hateful, or illegal content.</strong> 
                     Such actions are monitored, will result in immediate request blocking, and may be reported to relevant authorities. 
                     Please use this tool responsibly for creative and constructive purposes only.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalModals;