import React, { useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { Heart, HeartCrack, Sparkles, Shield, Lock, ArrowRight, Mail, CloudRain, HelpCircle, Scale, AlertTriangle, Watch, Gem, Footprints, Camera, CheckCircle, Shirt, Gamepad2, Wallet, Plane, Smartphone, Headphones, Utensils, Send } from "lucide-react";

// --- Components ---

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [...prev, Date.now()].slice(-20));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((id) => (
        <div
          key={id}
          className="heart-particle text-red-500"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: "-20px",
            fontSize: `${Math.random() * 20 + 10}px`,
            animationDuration: `${Math.random() * 3 + 3}s`,
            animationDelay: "0s",
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

// New Envelope Screen Component
const EnvelopeScreen = ({ onOpen }: { onOpen: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    setTimeout(() => {
      onOpen();
    }, 6000);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black -z-10"></div>
      
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-3xl font-handwriting text-gray-400 mb-2">Pour Khady</h1>
        <p className="text-xs uppercase tracking-[0.3em] text-red-800">j'ai UN message important pour toi !</p>
      </div>

      <div className="envelope-container animate-slide-up" onClick={handleOpen}>
        <div className={`envelope ${isOpen ? 'open' : ''}`}>
          <div className="letter">
            <div className="text-center space-y-2">
              <p className="font-handwriting text-xl text-gray-800">Ma Khady...</p>
              <div className="h-px bg-gray-300 w-16 mx-auto"></div>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 leading-relaxed">
                Il y a des mots<br/>qui pèsent<br/>plus lourd<br/>que le silence.
              </p>
            </div>
          </div>
          <div className="envelope-pocket"></div>
          <div className="envelope-pocket-overlay"></div>
          <div className="envelope-flap"></div>
          <div className="seal">
            <span className="text-white font-serif font-bold text-lg">M</span>
          </div>
        </div>
      </div>

      <div className={`mt-16 transition-opacity duration-1000 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
        <p className="text-gray-600 text-sm animate-pulse">Appuie sur l'enveloppe pour ouvrir</p>
      </div>
    </div>
  );
};

const IntroScreen = ({ onNext }: { onNext: () => void }) => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center transition-colors duration-1000 animate-fade-in relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-950/30 via-black to-black -z-10"></div>
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/black-felt.png')] -z-10"></div>
      
      <div className="max-w-xl w-full space-y-10 relative z-10 border-y border-red-900/20 py-12 px-4 backdrop-blur-sm bg-black/20">
        
        <div className="flex flex-col items-center gap-6">
          <div className="relative">
            <HeartCrack size={90} className="text-red-800 drop-shadow-[0_0_35px_rgba(153,27,27,0.6)] animate-pulse" />
            <div className="absolute inset-0 bg-red-600 blur-3xl opacity-10 animate-pulse"></div>
          </div>
          
          <h1 className="text-6xl font-handwriting text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-400 mb-2 drop-shadow-lg">
            Khady...
          </h1>
        </div>
        
        <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-[0.2em] text-red-700 uppercase mb-4 animate-shine" style={{ backgroundSize: '200% auto' }}>
              J'ai été dévasté
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-red-900 to-transparent mx-auto"></div>
        </div>
        
        <div className="space-y-8 text-gray-300 text-lg leading-relaxed font-light tracking-wide">
          <p>
            Cela fait <span className="text-red-500 font-bold text-2xl font-serif">quelques jours</span>.
          </p>
          
          <div className="relative p-6 border-l-2 border-red-900/50 bg-gradient-to-r from-red-950/10 to-transparent">
             <p className="italic text-gray-400 text-base">
                "Quelques jours que tu me supplies, que tu espères un signe. Quelques jours que je t'impose ce silence glacial."
             </p>
          </div>

          <p>
            J'ai eu mal, <span className="text-red-500 font-semibold border-b border-red-900">atrocement mal</span>. <br/>
            Mon cœur a saigné, mais mon esprit est resté debout.
          </p>
          
          <div className="mt-12 relative py-8">
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-900/20 to-transparent blur-md"></div>
             
             <p className="text-sm uppercase tracking-[0.5em] text-red-500 font-bold mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] animate-pulse">Je suis</p>
             
             <h3 className="text-7xl md:text-8xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-100 to-gray-500 font-serif drop-shadow-[0_10px_10px_rgba(0,0,0,1)] transform scale-y-110 mb-8" style={{textShadow: '0 0 30px rgba(220, 38, 38, 0.4)'}}>
                MEDHI
             </h3>
             
             <div className="bg-neutral-900/80 inline-block px-8 py-4 border-y border-red-900/50 shadow-[0_0_20px_rgba(0,0,0,0.8)] backdrop-blur-md">
                <p className="text-xl md:text-2xl text-white font-bold tracking-wider drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                   JE NE SUIS PAS CELUI QU'ON TRAHIT.
                </p>
             </div>
          </div>
        </div>

        <button
          onClick={onNext}
          className="group mt-12 px-10 py-4 bg-transparent border border-red-900/40 hover:border-red-600 hover:bg-red-950/30 text-gray-400 hover:text-white uppercase tracking-[0.25em] text-xs transition-all duration-700 flex items-center justify-center gap-4 mx-auto shadow-[0_0_10px_rgba(0,0,0,0.8)] hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]"
        >
          Voir ma vérité
          <ArrowRight className="group-hover:translate-x-1 transition-transform text-red-800 group-hover:text-red-500" size={16} />
        </button>
      </div>
    </div>
  );
};

const StrengthScreen = ({ onNext }: { onNext: () => void }) => {
  const [step, setStep] = useState(0);

  const messages = [
    {
      icon: <CloudRain size={60} className="text-gray-400" />,
      title: "L'Obscurité",
      text: "Ces quelques jours ont été une éternité. J'ai marché seul, hanté par ta trahison. Je n'ai trouvé que le vide là où il y avait ton amour."
    },
    {
      icon: <HelpCircle size={60} className="text-red-600" />,
      title: "Le Doute",
      text: "Tu me supplies, mais les mots ne suffisent plus. La confiance est un miroir : une fois brisé, il ne reflète que des cicatrices."
    },
    {
      icon: <Scale size={60} className="text-white" />,
      title: "Le Verdict",
      text: "Je ne suis plus celui que tu as connu. La douleur m'a transformé. Ce qui va se passer maintenant ne dépend plus de toi."
    }
  ];

  const handleNext = () => {
    if (step < messages.length - 1) {
      setStep(step + 1);
    } else {
      onNext();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 text-center transition-all duration-700">
      <div className="max-w-xl w-full flex flex-col items-center">
        
        <div className="w-full flex gap-2 mb-12 opacity-50">
          {messages.map((_, i) => (
            <div key={i} className={`h-1 flex-1 rounded-full transition-all duration-500 ${i <= step ? 'bg-white' : 'bg-gray-800'}`}></div>
          ))}
        </div>

        <div key={step} className="animate-fade-in flex flex-col items-center min-h-[300px]">
          <div className="mb-8 p-6 rounded-full bg-white/5 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            {messages[step].icon}
          </div>
          
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
            {messages[step].title}
          </h2>
          
          <p className="text-xl text-gray-400 font-light leading-relaxed max-w-lg">
            "{messages[step].text}"
          </p>
        </div>

        <button
          onClick={handleNext}
          className="mt-12 px-10 py-4 bg-white text-black hover:bg-gray-200 font-bold uppercase tracking-widest text-sm transition-all duration-300 rounded-sm hover:scale-105"
        >
          {step === messages.length - 1 ? "Voir le jugement" : "Je comprends"}
        </button>
      </div>
    </div>
  );
};

const WheelGame = ({ onWin }: { onWin: () => void }) => {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [stressMode, setStressMode] = useState(false);
  
  const segments = [
    { text: "PARDON ABSOLU", color: "#991b1b", textCol: "white" },
    { text: "ADIEU", color: "#000000", textCol: "#6b7280" },
    { text: "DERNIÈRE CHANCE", color: "#831843", textCol: "white" },
    { text: "C'EST FINI", color: "#111827", textCol: "#6b7280" },
    { text: "AMOUR ÉTERNEL", color: "#991b1b", textCol: "white" },
    { text: "JAMAIS", color: "#000000", textCol: "#6b7280" },
  ];

  const spinWheel = () => {
    if (spinning) return;
    setSpinning(true);
    setStressMode(true);

    if (navigator.vibrate) navigator.vibrate([200, 100, 200]);

    const targetRotation = 360 * 12 + 30;

    setRotation(targetRotation);

    setTimeout(() => {
        setStressMode(false);
        if (navigator.vibrate) navigator.vibrate(500);
        onWin();
    }, 8000);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center overflow-hidden relative transition-colors duration-1000 ${stressMode ? 'bg-red-950/30' : 'bg-neutral-900'}`}>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 bg-[radial-gradient(circle,_transparent_20%,_#000000_120%)] z-0 ${stressMode ? 'opacity-100' : 'opacity-60'}`}></div>
      
      {stressMode && (
         <div className="absolute inset-0 pointer-events-none bg-red-900/10 animate-pulse z-0"></div>
      )}

      <div className={`z-10 text-center transition-all duration-500 ${stressMode ? 'scale-95 opacity-80 blur-[1px]' : 'scale-100 opacity-100'}`}>
         <h2 className="text-4xl text-white font-handwriting mb-2">Le Jugement</h2>
         <div className="flex items-center justify-center gap-2 mb-8 px-4 text-center">
            <Sparkles className="text-yellow-500/80 animate-pulse shrink-0" size={16} />
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] animate-shine">
               Maintenant tu vas accepter ma décision que ça TE plaise ou non !
            </p>
            <Sparkles className="text-yellow-500/80 animate-pulse shrink-0" size={16} />
         </div>
      </div>
      
      <div className={`relative z-20 flex flex-col items-center ${stressMode ? 'animate-shake' : ''}`}>
          <div className="absolute top-[-10px] z-30 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
            <div className="w-0 h-0 border-l-[15px] border-l-transparent border-t-[35px] border-t-yellow-500 border-r-[15px] border-r-transparent filter drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]"></div>
          </div>

          <div className="relative p-2 rounded-full bg-gradient-to-b from-gray-700 to-gray-900 shadow-[0_20px_50px_rgba(0,0,0,0.9),inset_0_2px_10px_rgba(255,255,255,0.1)] border border-gray-800">
             <div className="absolute inset-0 rounded-full border-[4px] border-dashed border-yellow-500/20 m-1 z-20"></div>

            <div 
                className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-[inset_0_0_40px_rgba(0,0,0,1)] border-[8px] border-gray-900"
                style={{ 
                    transform: `rotate(-${rotation}deg)`,
                    transition: spinning ? 'transform 8000ms cubic-bezier(0.1, 0, 0.1, 1)' : 'none'
                }}
            >
                <div 
                    className="absolute inset-0 w-full h-full rounded-full"
                    style={{
                        background: `conic-gradient(
                            ${segments[0].color} 0deg 60deg,
                            ${segments[1].color} 60deg 120deg,
                            ${segments[2].color} 120deg 180deg,
                            ${segments[3].color} 180deg 240deg,
                            ${segments[4].color} 240deg 300deg,
                            ${segments[5].color} 300deg 360deg
                        )`
                    }}
                />

                <div className="absolute inset-0 rounded-full bg-[radial-gradient(transparent_40%,rgba(0,0,0,0.8)_100%)] pointer-events-none"></div>

                {segments.map((seg, i) => {
                    const angle = 360 / segments.length;
                    const rotation = i * angle + angle / 2;
                    return (
                        <div
                            key={i}
                            className="absolute top-0 left-1/2 h-1/2 w-[2px] origin-bottom flex justify-center pt-6"
                            style={{ transform: `rotate(${rotation}deg) translateX(-50%)` }}
                        >
                            <span 
                                className="whitespace-nowrap font-bold text-[10px] sm:text-xs uppercase tracking-widest drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
                                style={{ color: seg.textCol, writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                            >
                                {seg.text}
                            </span>
                        </div>
                    )
                })}

                <div className="absolute inset-0 m-auto w-20 h-20 bg-gradient-to-br from-gray-800 to-black rounded-full shadow-[0_0_15px_rgba(0,0,0,1)] flex items-center justify-center z-30 border-4 border-gray-700">
                    <div className="w-16 h-16 rounded-full bg-neutral-900 flex items-center justify-center border border-white/10">
                        <span className="text-red-700 font-serif font-bold text-2xl drop-shadow-md">M</span>
                    </div>
                </div>
            </div>
          </div>
      </div>

      <div className="mt-16 z-30 text-center space-y-6">
        <button
          onClick={spinWheel}
          disabled={spinning}
          className={`relative px-16 py-5 rounded-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 transform border overflow-hidden group ${
            spinning 
            ? "bg-black text-red-700 border-red-900 cursor-not-allowed scale-105 animate-pulse" 
            : "bg-red-800 text-white hover:bg-red-700 border-red-600 hover:scale-105 shadow-[0_0_30px_rgba(220,38,38,0.3)]"
          }`}
        >
          <span className="relative z-10 flex items-center gap-3">
             {spinning && <AlertTriangle size={18} className="animate-bounce" />}
             {spinning ? "LE SORT EST SCELLÉ..." : "ACCEPTER L'ULTIMATUM"}
          </span>
          
          {!spinning && <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>}
        </button>
        
        {!spinning && (
            <p className="text-gray-500 text-[10px] uppercase tracking-widest animate-pulse">
                Attention : Décision irréversible
            </p>
        )}
      </div>
    </div>
  );
};

const SuccessScreen = ({ onNext }: { onNext: () => void }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-rose-900 to-black flex flex-col items-center justify-center text-center p-6 animate-fade-in relative overflow-hidden">
      <FloatingHearts />
      
      <div className="z-10 bg-black/40 backdrop-blur-md p-8 md:p-12 rounded-sm shadow-2xl border-t border-white/10 max-w-lg mx-auto transform animate-slide-up">
        
        <h1 className="text-6xl font-handwriting text-red-500 mb-2 drop-shadow-lg">
          Khady
        </h1>
        
        <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50"></div>
        
        <h2 className="text-4xl text-white font-light tracking-wide mb-6">
          Je te pardonne.
        </h2>
        
        <div className="space-y-6 text-gray-300 text-lg font-light">
          <p>
            Mon esprit est fort, mais mon cœur a choisi.<br />
            <span className="font-bold text-white block mt-2 text-xl">Ne vois pas cela comme une chance gratuite</span>, mais comme une preuve de ma grandeur d'âme.
          </p>
          
          <div className="relative inline-block mt-4 py-4">
             <Sparkles className="absolute top-0 left-0 text-yellow-400 animate-pulse" size={20} />
             <p className="italic text-2xl font-bold text-sparkle-rainbow px-2 leading-relaxed">
                Saisis ma main, et ne la lâche plus jamais.
             </p>
             <Sparkles className="absolute bottom-0 right-0 text-blue-400 animate-pulse" size={20} />
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-red-400 mb-6 uppercase tracking-widest">Mais attention, le pardon a un prix.</p>
            <button
              onClick={onNext}
              className="px-8 py-4 bg-transparent border border-white/30 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 uppercase tracking-[0.3em] text-xs font-bold"
            >
              Payer la dette
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// New Gift Selection Screen
const GiftSelectionScreen = ({ onSelect }: { onSelect: (gift: any) => void }) => {
    const gifts = [
        {
            id: 'watch',
            label: "Montre de Prestige",
            icon: <Watch size={32} />,
            desc: "Le temps est précieux. Ne le gaspille plus."
        },
        {
            id: 'sneakers',
            label: "Sneakers Collector",
            icon: <Footprints size={32} />,
            desc: "Pour marcher droit, sans faire de faux pas."
        },
        {
            id: 'gaming',
            label: "Setup Gaming / PS5",
            icon: <Gamepad2 size={32} />,
            desc: "J'ai besoin de me détendre. Tu vas y contribuer."
        },
        {
            id: 'tech',
            label: "iPhone / MacBook",
            icon: <Smartphone size={32} />,
            desc: "De la tech durable. Pour répondre instantanément."
        },
        {
            id: 'drone',
            label: "Drone / Caméra 4K",
            icon: <Camera size={32} />,
            desc: "Technologie de pointe pour capturer l'horizon. Haute valeur exigée."
        },
        {
            id: 'jewelry',
            label: "Chaine / Bracelet Or",
            icon: <Gem size={32} />,
            desc: "Un pacte en métal précieux. Inaltérable."
        },
        {
            id: 'clothing',
            label: "3 Ensembles Complets",
            icon: <Shirt size={32} />,
            desc: "Pas un seul. Trois. Pour refaire ma garde-robe à ton image."
        },
        {
            id: 'restaurant',
            label: "Resto + Sortie Détente",
            icon: <Utensils size={32} />,
            desc: "Je choisis le menu, le lieu et l'activité qui suit. Tu règles l'addition complète."
        },
        {
            id: 'audio',
            label: "Casque / Enceinte Pro",
            icon: <Headphones size={32} />,
            desc: "Pour écouter la vérité, même quand elle fait mal."
        },
        {
            id: 'travel',
            label: "Voyage à l'Étranger",
            icon: <Plane size={32} />,
            desc: "Emmène-moi loin. Construisons de nouveaux souvenirs."
        }
    ];

    return (
        <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-6 animate-fade-in">
            <div className="max-w-5xl w-full">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-handwriting text-red-500 mb-4">L'Offrande de Réconciliation</h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
                        Le pardon est accordé, mais la mémoire reste. Choisis l'offrande qui scellera notre nouveau départ.
                        Ce n'est pas le prix qui compte, c'est la valeur du sacrifice.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {gifts.map((gift) => (
                        <div 
                            key={gift.id}
                            onClick={() => onSelect(gift)}
                            className="group relative bg-neutral-900 border border-neutral-800 p-6 rounded-sm cursor-pointer hover:border-red-700 hover:bg-neutral-800 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
                        >
                            <div className="text-gray-400 group-hover:text-red-500 transition-colors mb-4 transform group-hover:scale-110 duration-300">
                                {gift.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-gray-200 group-hover:text-white">{gift.label}</h3>
                            <p className="text-[10px] text-gray-500 uppercase tracking-wider group-hover:text-gray-400 leading-tight">{gift.desc}</p>
                            
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowRight size={16} className="text-red-500" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Final Proof Screen
const FinalProofScreen = ({ gift }: { gift: any }) => {
    const [hasCaptured, setHasCaptured] = useState(false);

    const handleSend = () => {
        const text = `Khady a choisi : ${gift.label} - "${gift.desc}". C'est le prix du pardon.`;
        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/2250798459948?text=${encodedText}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-center animate-fade-in">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black -z-10"></div>
            
            <div className="max-w-md w-full border border-red-900/30 p-8 rounded-lg bg-neutral-900/50 backdrop-blur-sm relative overflow-hidden transition-all duration-500">
                 {/* Success Tick Background */}
                 <CheckCircle className="absolute -right-10 -top-10 text-neutral-800/50 w-64 h-64" />

                <div className="relative z-10">
                    <p className="text-xs text-red-500 uppercase tracking-[0.3em] mb-6">Choix Enregistré</p>
                    
                    <div className="bg-black/50 p-6 rounded border border-neutral-700 mb-8 transform transition-all duration-500 hover:scale-105">
                        <div className="flex justify-center mb-4 text-white">
                            {gift.icon}
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">{gift.label}</h2>
                        <p className="text-xs text-gray-500 italic">"{gift.desc}"</p>
                    </div>

                    <div className="space-y-6">
                        {!hasCaptured ? (
                            <div className="flex flex-col items-center gap-4 animate-fade-in">
                                <div className="flex flex-col items-center gap-2 text-gray-300">
                                    <Camera className="animate-pulse text-red-500" size={32} />
                                    <p className="font-bold text-lg uppercase">Prends ta capture d'écran</p>
                                </div>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    Cette image est ta promesse. Capture-la avant de passer à l'étape suivante.
                                </p>
                                <button 
                                    onClick={() => setHasCaptured(true)}
                                    className="mt-4 px-8 py-3 bg-white text-black font-bold uppercase tracking-widest text-xs rounded hover:bg-gray-200 transition-colors flex items-center gap-2"
                                >
                                    <Camera size={16} />
                                    J'ai fait la capture
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center gap-4 animate-fade-in">
                                <div className="flex flex-col items-center gap-2 text-gray-300">
                                    <Send className="animate-bounce text-red-500" size={32} />
                                    <p className="font-bold text-lg uppercase">Envoie la preuve</p>
                                </div>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    Ne recule pas maintenant. Envoie-moi cette preuve immédiatement.
                                </p>
                                <button 
                                    onClick={handleSend}
                                    className="mt-4 px-8 py-3 bg-red-800 text-white font-bold uppercase tracking-widest text-xs rounded hover:bg-red-700 transition-colors shadow-[0_0_20px_rgba(220,38,38,0.5)] flex items-center gap-2"
                                >
                                    <Send size={16} />
                                    Envoyer maintenant à Medhi
                                </button>
                            </div>
                        )}

                        <div className="pt-8 mt-8 border-t border-neutral-800">
                            <p className="font-handwriting text-3xl text-gray-500">Medhi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Main App ---

export default function App() {
  const [stage, setStage] = useState<"envelope" | "intro" | "strength" | "game" | "success" | "gift" | "final">("envelope");
  const [selectedGift, setSelectedGift] = useState<any>(null);

  const handleGiftSelect = (gift: any) => {
      setSelectedGift(gift);
      setStage("final");
  };

  return (
    <>
      {stage === "envelope" && <EnvelopeScreen onOpen={() => setStage("intro")} />}
      {stage === "intro" && <IntroScreen onNext={() => setStage("strength")} />}
      {stage === "strength" && <StrengthScreen onNext={() => setStage("game")} />}
      {stage === "game" && <WheelGame onWin={() => setStage("success")} />}
      {stage === "success" && <SuccessScreen onNext={() => setStage("gift")} />}
      {stage === "gift" && <GiftSelectionScreen onSelect={handleGiftSelect} />}
      {stage === "final" && selectedGift && <FinalProofScreen gift={selectedGift} />}
    </>
  );
}

const root = createRoot(document.getElementById("root")!);
root.render(<App />);