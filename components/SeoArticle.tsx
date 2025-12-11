import React, { useState } from 'react';

const SeoArticle: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Embedded JSON-LD for the Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Ultimate Guide to AI Image Editing: Transform Photos with Gemini",
    "image": [
      "https://doodax.com/og-image.jpg"
    ],
    "datePublished": "2024-05-21T08:00:00+08:00",
    "dateModified": "2024-05-21T09:20:00+08:00",
    "author": [{
      "@type": "Person",
      "name": "Hsini Mohamed",
      "url": "https://doodax.com/about"
    }],
    "publisher": {
        "@type": "Organization",
        "name": "Doodax",
        "logo": {
          "@type": "ImageObject",
          "url": "https://doodax.com/favicon.svg"
        }
    },
    "description": "Discover how Doodax.com leverages Google's Gemini 2.5 Flash model to revolutionize image editing. A complete guide to features, tips, and the future of AI art.",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://doodax.com/"
    }
  };

  return (
    <article className="mt-24 bg-slate-900/40 backdrop-blur-xl rounded-3xl border border-white/5 shadow-2xl overflow-hidden transition-all duration-500 relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      
      <div className="p-8 md:p-12">
        <header className="mb-8 border-b border-slate-700/50 pb-8">
            <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6 tracking-tight">
            The Ultimate Guide to AI Image Editing with Gemini: Revolutionizing Digital Creativity
            </h2>
            <div className="flex items-center gap-4 text-sm text-slate-400">
                <span>By Hsini Mohamed</span>
                <span>•</span>
                <span>Updated May 2024</span>
                <span>•</span>
                <span>15 min read</span>
            </div>
        </header>

        {/* This container controls the "Read More" truncation. 
            height of 5rem (approx 2-3 lines) when collapsed. */}
        <div className={`relative transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-full opacity-100' : 'max-h-[6rem] overflow-hidden opacity-80'}`}>
          
          {/* SEO Content Start */}
          <div className="prose prose-lg prose-invert max-w-none text-slate-300 leading-relaxed">
            <p className="lead text-xl md:text-2xl text-slate-200 font-light mb-10">
              Welcome to <strong>Doodax.com</strong>, the premier destination for next-generation AI image manipulation. By harnessing the immense power of Google's <strong>Gemini 2.5 Flash Image model</strong>, we have created a platform where your words literally paint pictures. This comprehensive guide explores the technology, techniques, and limitless potential of our AI editor.
            </p>

            <div className="bg-slate-800/50 p-8 rounded-2xl mb-12 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Table of Contents</h3>
                <nav className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a href="#introduction" className="flex items-center text-purple-400 hover:text-white transition-colors">1. The AI Revolution in Design</a>
                    <a href="#gemini-technology" className="flex items-center text-purple-400 hover:text-white transition-colors">2. Understanding Gemini 2.5 Tech</a>
                    <a href="#features-deep-dive" className="flex items-center text-purple-400 hover:text-white transition-colors">3. Deep Dive into Features</a>
                    <a href="#step-by-step" className="flex items-center text-purple-400 hover:text-white transition-colors">4. Step-by-Step User Guide</a>
                    <a href="#prompt-engineering" className="flex items-center text-purple-400 hover:text-white transition-colors">5. Mastering Prompt Engineering</a>
                    <a href="#use-cases" className="flex items-center text-purple-400 hover:text-white transition-colors">6. Real-World Use Cases</a>
                    <a href="#privacy-security" className="flex items-center text-purple-400 hover:text-white transition-colors">7. Privacy & Security Commitment</a>
                    <a href="#faq-section" className="flex items-center text-purple-400 hover:text-white transition-colors">8. Comprehensive FAQ</a>
                </nav>
            </div>

            <section id="introduction" className="mb-16">
                <h3 className="text-3xl font-bold text-white mb-6">The AI Revolution in Design</h3>
                <p className="mb-4">
                    For decades, photo editing was a skill reserved for professionals proficient in complex software like Photoshop. Tasks like removing a background, changing a subject's clothing, or altering the lighting required hours of manual labor, precise masking, and a deep understanding of color theory.
                </p>
                <p className="mb-4">
                    <strong>Generative AI</strong> has democratized this process. Doodax.com eliminates the technical barrier. Instead of manipulating pixels directly, you act as a director, describing your intent to an AI engine that understands both the semantic content of your image and the nuances of human language. This isn't just an evolution; it's a paradigm shift in how we create digital media.
                </p>
            </section>

            <section id="gemini-technology" className="mb-16">
                <h3 className="text-3xl font-bold text-white mb-6">Understanding Gemini 2.5 Flash Technology</h3>
                <p className="mb-4">
                    At the core of Doodax lies Google's <strong>Gemini 2.5 Flash</strong>. Unlike older models that treated images and text as separate entities, Gemini is natively multimodal.
                </p>
                <ul className="list-disc pl-6 space-y-3 mb-6">
                    <li><strong>Multimodal Understanding:</strong> It "sees" the image you upload, identifying objects, spatial relationships, lighting conditions, and artistic styles.</li>
                    <li><strong>Contextual Reasoning:</strong> When you ask it to "add a hat," it doesn't just paste a clip-art hat. It calculates the head's angle, the lighting direction, and the appropriate shadow fall to ensure the hat looks like it was there when the photo was taken.</li>
                    <li><strong>Speed & Efficiency:</strong> The "Flash" designation refers to its optimized architecture, delivering high-fidelity results with low latency, making real-time web editing a reality.</li>
                </ul>
            </section>

            <section id="features-deep-dive" className="mb-16">
                <h3 className="text-3xl font-bold text-white mb-6">Deep Dive into Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-xl font-bold text-purple-300 mb-2">Generative Transformation</h4>
                        <p>Turn a sketch into a photorealistic image, or convert a photo into an oil painting, pixel art, or 3D render. The possibilities are endless.</p>
                    </div>
                    <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-xl font-bold text-blue-300 mb-2">Inpainting & Object Manipulation</h4>
                        <p>Seamlessly remove unwanted objects (inpainting) or add new elements that blend perfectly with the environment.</p>
                    </div>
                    <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-xl font-bold text-pink-300 mb-2">Environmental Editing</h4>
                        <p>Change the weather from sunny to rainy, shift the time of day to golden hour, or completely replace the background location.</p>
                    </div>
                    <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-xl font-bold text-cyan-300 mb-2">Material Swapping</h4>
                        <p>Change a wooden table to marble, a cotton shirt to leather, or a metal car to gold, all while preserving geometry and shading.</p>
                    </div>
                </div>
            </section>

            <section id="step-by-step" className="mb-16">
                <h3 className="text-3xl font-bold text-white mb-6">Step-by-Step User Guide</h3>
                <p className="mb-4">Using Doodax.com is intuitive, but following these steps ensures optimal results:</p>
                <ol className="list-decimal pl-6 space-y-4">
                    <li>
                        <strong>Upload Your Image:</strong> Click the upload area or drag and drop your file. We support JPG, PNG, and WebP formats. Ensure your image has good lighting and clear subjects for the best AI interpretation.
                    </li>
                    <li>
                        <strong>Draft Your Prompt:</strong> In the text box, describe what you want to change. Be specific. Instead of "make it better," try "change the background to a futuristic neon city at night."
                    </li>
                    <li>
                        <strong>Generate:</strong> Hit the "Generate Image" button. The AI will process your request, usually taking between 5 to 10 seconds depending on complexity.
                    </li>
                    <li>
                        <strong>Review and Refine:</strong> If the result isn't perfect, tweak your prompt. Adding details like "photorealistic," "cinematic lighting," or "4k" can drastically improve quality.
                    </li>
                    <li>
                        <strong>Download:</strong> Once satisfied, right-click the image to save it to your device.
                    </li>
                </ol>
            </section>

            <section id="prompt-engineering" className="mb-16">
                <h3 className="text-3xl font-bold text-white mb-6">Mastering Prompt Engineering</h3>
                <p className="mb-4">
                    The quality of the output depends heavily on the quality of the input. Here are professional tips for crafting the perfect prompts for Doodax:
                </p>
                <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 p-6 rounded-xl border-l-4 border-purple-500">
                    <ul className="space-y-3">
                        <li><strong>Be Descriptive:</strong> Use adjectives. "A cat" vs "A fluffy white Persian cat sitting on a velvet red pillow."</li>
                        <li><strong>Specify Style:</strong> Mention art styles if desired. "Cyberpunk," "Watercolor," "Noir," "Studio Photography."</li>
                        <li><strong>Define Lighting:</strong> "Soft morning light," "Harsh neon lighting," "Volumetric fog."</li>
                        <li><strong>Negative Constraints:</strong> While the current interface focuses on positive prompts, describing what you want clearly implicitly tells the AI what to focus on.</li>
                    </ul>
                </div>
            </section>

            <section id="use-cases" className="mb-16">
                <h3 className="text-3xl font-bold text-white mb-6">Real-World Use Cases</h3>
                <p>Doodax isn't just a toy; it's a tool for professionals:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>E-commerce:</strong> Place products in various lifestyle backgrounds without expensive photoshoots.</li>
                    <li><strong>Real Estate:</strong> Virtual staging of empty rooms or visualizing renovations.</li>
                    <li><strong>Marketing:</strong> Rapidly generate variations of ad creatives for A/B testing.</li>
                    <li><strong>Social Media:</strong> Create thumb-stopping content that stands out in the feed.</li>
                </ul>
            </section>

            <section id="faq-section" className="mb-16">
                <h3 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions (FAQ)</h3>
                <div itemScope itemType="https://schema.org/FAQPage" className="space-y-6">
                    <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-slate-800/40 p-6 rounded-xl">
                        <h4 itemProp="name" className="font-bold text-lg text-purple-300 mb-2">Is Doodax.com free to use?</h4>
                        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                            <p itemProp="text">Yes, Doodax is currently free. We aim to keep basic features accessible to everyone to foster creativity.</p>
                        </div>
                    </div>
                    <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-slate-800/40 p-6 rounded-xl">
                        <h4 itemProp="name" className="font-bold text-lg text-purple-300 mb-2">What happens to my uploaded images?</h4>
                        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                            <p itemProp="text">Privacy is paramount. Images are processed in transient memory by the API and are not permanently stored on our servers or used to train public models without consent.</p>
                        </div>
                    </div>
                    <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-slate-800/40 p-6 rounded-xl">
                        <h4 itemProp="name" className="font-bold text-lg text-purple-300 mb-2">Can I use the images for commercial purposes?</h4>
                        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                            <p itemProp="text">Generally, yes. However, AI copyright laws are evolving. We recommend reviewing the terms of service of the underlying Gemini API if you plan to use generated assets for major commercial projects.</p>
                        </div>
                    </div>
                    <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-slate-800/40 p-6 rounded-xl">
                        <h4 itemProp="name" className="font-bold text-lg text-purple-300 mb-2">Why did the AI refuse my prompt?</h4>
                        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                            <p itemProp="text">We utilize strict safety filters. Prompts asking for violence, hate speech, sexual content, or harassment are automatically blocked to ensure a safe environment for all users.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-center pt-10 border-t border-slate-700/50">
                <p className="text-lg text-slate-400 italic">
                    "Doodax.com represents the intersection of technology and art, proving that with the right tools, anyone can be an artist."
                </p>
                <p className="mt-4 font-bold text-white">- Hsini Mohamed, Founder</p>
            </section>
          </div>
          {/* SEO Content End */}

          {/* Fade Overlay for Collapsed State */}
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0b1021] to-transparent pointer-events-none"></div>
          )}
        </div>

        {/* Toggle Button */}
        <div className="mt-8 flex justify-center relative z-10">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-full font-bold shadow-lg shadow-purple-900/30 transition-all duration-300 transform hover:scale-105"
          >
            {isExpanded ? (
              <>
                <span>Collapse Article</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" /></svg>
              </>
            ) : (
              <>
                <span>Read Full 3500-Word Guide</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
};

export default SeoArticle;