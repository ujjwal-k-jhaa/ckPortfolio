import { motion } from 'motion/react';
import { Play, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function App() {
  const videoEdits = [
    { id: 1, title: 'BALI THROUGH AN INDIAN LENS : CINEMATIC VIDEO | TRAVELING MONDAYS', youtubeId: 'ikY-A7JDeiU' },
    { id: 2, title: 'Majuli, Assam ( World’s Largest River Island ) – Beautiful Village Life & Missing Tribe Culture', youtubeId: 'eUP0EOqcB-U' },
    { id: 3, title: 'Life as a Software Engineer at Google - Fun Edition | Goodies, Year-end Party, Trip to Goa 🎄', youtubeId: 'Ne2MdoqVFWQ' },
    { id: 4, title: '12 day  road trip across Tanzania & Kenya (Raw and offbeat)', youtubeId: 's01_UQuLjBU' },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white/30">
      {/* Premium Floating Navigation */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4">
        <div className="flex items-center gap-8 px-8 py-4 bg-black/50 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl">
          <span className="text-sm font-medium tracking-[0.2em] text-white uppercase">CK JHA</span>
          <div className="w-px h-4 bg-white/20"></div>
          <div className="flex gap-6 text-[11px] font-medium tracking-[0.15em] text-neutral-400 uppercase">
            <a href="#videos" className="hover:text-white transition-colors">Work</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Luxury Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Atmospheric glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-6 w-full text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 text-neutral-400 text-[10px] tracking-[0.2em] uppercase mb-12 backdrop-blur-sm">
              <MapPin size={12} className="text-white" />
              New Delhi, India
            </div>
            
            <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-light tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 leading-[0.85]">
              CK JHA
            </h1>
            
            <p className="text-lg md:text-2xl font-light text-neutral-400 mb-16 max-w-2xl mx-auto leading-relaxed tracking-wide">
              Crafting cinematic narratives. <br className="hidden md:block"/>
              <span className="text-white font-normal">Video Editor</span> <span className="text-neutral-600">&</span> <span className="text-white font-normal">Graphic Designer</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="#videos" className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full text-xs font-semibold tracking-[0.15em] uppercase transition-all hover:scale-105">
                <Play size={14} className="fill-black" /> View Reel
              </a>
              <a href="#contact" className="group flex items-center gap-3 px-8 py-4 bg-transparent text-white border border-white/20 rounded-full text-xs font-semibold tracking-[0.15em] uppercase transition-all hover:bg-white/10">
                Let's Talk <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Edits Section (Portfolio) */}
      <section id="videos" className="py-32 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8"
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-white">Selected Work</h2>
            </div>
            <p className="text-neutral-500 text-sm tracking-[0.1em] uppercase">01 / Video Editing</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {videoEdits.map((video) => (
              <motion.div 
                key={video.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col w-full"
              >
                <div className="p-2 sm:p-3 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)] hover:scale-[1.02] hover:bg-white/[0.05] transition-all duration-500 ease-out">
                  <div 
                    className="w-full relative aspect-video bg-black overflow-hidden rounded-[1.25rem] border border-white/10"
                  >
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full absolute inset-0 z-10"
                    ></iframe>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 bg-black relative overflow-hidden border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-5xl md:text-8xl font-light tracking-tighter mb-8 text-white">Let's work together.</h2>
            <p className="text-xl text-neutral-400 mb-16 font-light tracking-wide max-w-2xl mx-auto">
              Have a project in mind? Looking for a video editor or graphic designer to bring your vision to life?
            </p>
            
            <a 
              href="mailto:ckjhaedits@gmail.com" 
              className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black rounded-full text-sm font-bold tracking-[0.2em] uppercase transition-all hover:scale-105 hover:bg-neutral-200"
            >
              <Mail size={18} />
              ckjhaedits@gmail.com
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center bg-black border-t border-white/10">
        <p className="text-neutral-600 text-[10px] tracking-[0.2em] uppercase">
          © {new Date().getFullYear()} CK Jha. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
