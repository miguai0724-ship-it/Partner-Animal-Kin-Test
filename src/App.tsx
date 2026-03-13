import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QUESTIONS, ANIMALS, DIMENSION_DESCRIPTIONS } from './data';
import { Score, AnimalTemplate, QuizResult, MatchResult } from './types';
import { normalizeScore, findTopMatches } from './utils/matching';
import { generateDetailedAnalysis } from './utils/analysis';
import RadarChart from './components/RadarChart';
import { ChevronRight, RefreshCw, Sparkles, Info, AlertCircle, Layers } from 'lucide-react';

const INITIAL_SCORE: Score = {
  expression: 0,
  attachment: 0,
  security: 0,
  dominance: 0,
  rational: 0,
  adventure: 0,
  loyalty: 0,
  emotionality: 0,
};

const Tooltip = ({ content, children }: { content: string; children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative inline-block" 
      onMouseEnter={() => setIsVisible(true)} 
      onMouseLeave={() => setIsVisible(false)}
      onTouchStart={() => setIsVisible(true)}
      onTouchEnd={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-4 bg-[#1a1a19] border border-white/10 rounded-2xl shadow-2xl z-50 pointer-events-none"
          >
            <p className="text-[12px] text-white/90 leading-relaxed font-light">
              {content}
            </p>
            <div className="mt-2 pt-2 border-t border-white/5">
              <p className="text-[10px] text-[#ff4e00]/60 italic">
                * 此维度通过多维相似度算法贡献于最终匹配。
              </p>
            </div>
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#1a1a19]" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [step, setStep] = useState<'start' | 'quiz' | 'result'>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(Score | null)[]>(new Array(QUESTIONS.length).fill(null));

  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleStart = () => {
    setStep('quiz');
    setCurrentQuestionIndex(0);
    setAnswers(new Array(QUESTIONS.length).fill(null));
    setIsTransitioning(false);
  };

  const handleAnswer = (optionScore: Score) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = optionScore;
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestionIndex < QUESTIONS.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setIsTransitioning(false);
      } else {
        setStep('result');
        setIsTransitioning(false);
      }
    }, 600);
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUESTIONS.length - 1 && answers[currentQuestionIndex]) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else if (currentQuestionIndex === QUESTIONS.length - 1 && answers[currentQuestionIndex]) {
      setStep('result');
    }
  };

  const userRawScore = useMemo(() => {
    return answers.reduce((acc, curr) => {
      if (!curr) return acc;
      return {
        expression: acc.expression + curr.expression,
        attachment: acc.attachment + curr.attachment,
        security: acc.security + curr.security,
        dominance: acc.dominance + curr.dominance,
        rational: acc.rational + curr.rational,
        adventure: acc.adventure + curr.adventure,
        loyalty: acc.loyalty + curr.loyalty,
        emotionality: acc.emotionality + curr.emotionality,
      };
    }, INITIAL_SCORE);
  }, [answers]);

  const resultData = useMemo(() => {
    if (step !== 'result') return null;
    // Theoretical max: 50 questions, each dimension can be triggered ~19 times with +2
    // Let's assume a safe theoretical max of 40 for normalization
    const normalized = normalizeScore(userRawScore, 40);
    const matches = findTopMatches(normalized, ANIMALS);
    const analysis = generateDetailedAnalysis(normalized, matches.topMatches);
    
    return {
      ...matches,
      analysis,
      normalizedScore: normalized
    };
  }, [step, userRawScore]);

  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / QUESTIONS.length) * 100;

  return (
    <div className="min-h-screen bg-[#0a0502] text-white font-sans selection:bg-[#ff4e00]/30 overflow-x-hidden">
      {/* Immersive Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div 
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#3a1510] blur-[120px] opacity-40 animate-pulse"
          style={{ animationDuration: '8s' }}
        />
        <div 
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#ff4e00] blur-[100px] opacity-20 animate-pulse"
          style={{ animationDuration: '12s' }}
        />
      </div>

      <main className="relative z-10 container mx-auto px-4 py-12 min-h-screen flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {step === 'start' && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center max-w-2xl"
            >
              <h1 className="text-6xl md:text-8xl font-serif font-light mb-6 tracking-tighter">
                灵境<span className="text-[#ff4e00]">深处</span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 mb-12 leading-relaxed font-light italic">
                “在50个意象的交织中，寻找你灵魂深处的图腾。”
              </p>
              <button
                onClick={handleStart}
                className="group relative px-12 py-4 bg-transparent border border-white/20 rounded-full overflow-hidden transition-all hover:border-[#ff4e00]/50"
              >
                <div className="absolute inset-0 bg-[#ff4e00] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10 text-lg tracking-[0.2em] font-medium flex items-center gap-2">
                  开启旅程 <ChevronRight className="w-5 h-5" />
                </span>
              </button>
            </motion.div>
          )}

          {step === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="w-full max-w-3xl"
            >
              <div className="mb-12">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-xs font-mono tracking-widest text-white/40 uppercase">
                    Scene {currentQuestionIndex + 1} / {QUESTIONS.length}
                  </span>
                  <span className="text-xs font-mono text-[#ff4e00]">
                    {Math.round(progress)}%
                  </span>
                </div>
                <div className="h-[1px] w-full bg-white/10 overflow-hidden">
                  <motion.div 
                    className="h-full bg-[#ff4e00]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-light leading-snug text-white/90">
                  {currentQuestion.scene}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = JSON.stringify(answers[currentQuestionIndex]) === JSON.stringify(option.scores);
                  return (
                    <motion.button
                      key={idx}
                      initial={false}
                      animate={isSelected ? { 
                        scale: [1, 1.03, 1],
                        backgroundColor: "rgba(255, 78, 0, 0.25)",
                        borderColor: "#ff4e00",
                        boxShadow: "0 0 30px rgba(255, 78, 0, 0.2)"
                      } : {
                        scale: 1,
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderColor: "rgba(255, 255, 255, 0.1)",
                        boxShadow: "0 0 0px rgba(255, 78, 0, 0)"
                      }}
                      transition={{ 
                        duration: 0.4,
                        ease: "easeOut"
                      }}
                      whileHover={!isTransitioning ? { scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.1)" } : {}}
                      whileTap={!isTransitioning ? { scale: 0.98 } : {}}
                      onClick={() => handleAnswer(option.scores)}
                      disabled={isTransitioning}
                      className={`p-6 text-left border rounded-2xl transition-all group relative overflow-hidden ${
                        isSelected 
                          ? 'border-[#ff4e00]' 
                          : 'border-white/10'
                      } ${isTransitioning && !isSelected ? 'opacity-50' : 'opacity-100'}`}
                    >
                      <AnimatePresence>
                        {isSelected && (
                          <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{ duration: 0.6, ease: "linear" }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
                          />
                        )}
                      </AnimatePresence>
                      <span className={`text-lg transition-colors relative z-10 ${isSelected ? 'text-white font-medium' : 'text-white/70 group-hover:text-white'}`}>
                        {option.text}
                      </span>
                      {isSelected && (
                        <motion.div 
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="absolute top-4 right-4"
                        >
                          <div className="w-2 h-2 rounded-full bg-[#ff4e00] shadow-[0_0_10px_#ff4e00]" />
                        </motion.div>
                      )}
                    </motion.button>
                  );
                })}
              </div>

              <div className="flex justify-between items-center pt-8 border-t border-white/5">
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className={`px-8 py-3 rounded-full border transition-all flex items-center gap-2 ${
                    currentQuestionIndex === 0 
                      ? 'opacity-0 pointer-events-none' 
                      : 'border-white/10 text-white/40 hover:text-white hover:border-white/30'
                  }`}
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                  <span className="text-xs font-mono tracking-widest uppercase">Previous</span>
                </button>

                <button
                  onClick={handleNext}
                  disabled={!answers[currentQuestionIndex]}
                  className={`px-8 py-3 rounded-full border transition-all flex items-center gap-2 ${
                    !answers[currentQuestionIndex]
                      ? 'border-white/5 text-white/10 cursor-not-allowed'
                      : 'border-[#ff4e00]/30 text-[#ff4e00] hover:bg-[#ff4e00] hover:text-white'
                  }`}
                >
                  <span className="text-xs font-mono tracking-widest uppercase">
                    {currentQuestionIndex === QUESTIONS.length - 1 ? 'Finish' : 'Next'}
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 'result' && resultData && (
            <motion.div
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full max-w-6xl flex flex-col gap-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="relative">
                    <h3 className="text-sm font-mono tracking-[0.3em] text-[#ff4e00] uppercase mb-2 flex items-center gap-2">
                      {resultData.isHybrid ? <Layers className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                      {resultData.isHybrid ? 'Hybrid Totem' : 'Primary Totem'}
                    </h3>
                    <h2 className="text-6xl md:text-7xl font-serif font-light tracking-tight">
                      {resultData.topMatches[0].animal.name}
                    </h2>
                    <div className="mt-2 text-sm font-mono text-white/40">
                      Match Accuracy: {Math.round(resultData.topMatches[0].similarity * 100)}%
                    </div>
                  </div>
                  
                  <p className="text-xl text-white/70 leading-relaxed font-light italic border-l-2 border-[#ff4e00]/30 pl-6 py-2">
                    {resultData.topMatches[0].animal.description}
                  </p>

                  {resultData.isBalanced && (
                    <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-medium text-emerald-500 mb-1">平衡型人格 (Balanced Persona)</h4>
                        <p className="text-xs text-white/60 leading-relaxed">
                          你的各项维度非常均衡，展现出极强的适应性与心理韧性。你能在不同环境下灵活切换角色。
                        </p>
                      </div>
                    </div>
                  )}

                  {resultData.isHybrid && (
                    <div className="p-4 bg-[#ff4e00]/10 border border-[#ff4e00]/20 rounded-2xl flex items-start gap-3">
                      <Layers className="w-5 h-5 text-[#ff4e00] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-medium text-[#ff4e00] mb-1">混合型特质 (Hybrid Nature)</h4>
                        <p className="text-xs text-white/60 leading-relaxed">
                          你同时拥有 {resultData.topMatches[0].animal.name.split(' ')[0]} 与 {resultData.topMatches[1].animal.name.split(' ')[0]} 的深度特质，这使你的性格极具层次感。
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="pt-4">
                    <h4 className="text-xs font-mono tracking-widest text-white/30 uppercase mb-4">Other Strong Affinities</h4>
                    <div className="space-y-3">
                      {resultData.topMatches.slice(1).map((match, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                          <span className="text-sm text-white/80">{match.animal.name}</span>
                          <div className="flex items-center gap-3">
                            <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full bg-[#ff4e00]/60" style={{ width: `${match.similarity * 100}%` }} />
                            </div>
                            <span className="text-[10px] font-mono text-white/40">{Math.round(match.similarity * 100)}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8">
                    <button
                      onClick={handleStart}
                      className="flex items-center gap-2 text-white/40 hover:text-white transition-colors group"
                    >
                      <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-700" />
                      <span className="text-xs font-mono tracking-widest uppercase">Restart Journey</span>
                    </button>
                  </div>
                </div>

                <div className="relative flex flex-col items-center">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#ff4e00]/10 to-transparent blur-3xl rounded-full -z-10" />
                  <RadarChart 
                    datasets={[
                      {
                        data: resultData.normalizedScore,
                        label: 'Your Profile',
                        color: '#ff4e00',
                        fillColor: 'rgba(255, 78, 0, 0.2)'
                      },
                      {
                        data: Object.entries(resultData.topMatches[0].animal.dimensions).reduce((acc, [key, val]) => ({
                          ...acc,
                          [key]: (val as number) / 100
                        }), {} as Score),
                        label: resultData.topMatches[0].animal.name.split(' ')[0],
                        color: 'rgba(255, 255, 255, 0.4)',
                        fillColor: 'rgba(255, 255, 255, 0.05)'
                      }
                    ]}
                    labels={[
                      '表现力', '依恋感', '安全感', '支配欲', 
                      '理性度', '冒险精神', '忠诚度', '情绪化'
                    ]} 
                  />
                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    {Object.entries(resultData.normalizedScore).map(([key, val]) => (
                      <div key={key}>
                        <Tooltip content={DIMENSION_DESCRIPTIONS[key]?.description || ''}>
                          <div className="flex flex-col items-center px-4 py-2 bg-white/5 rounded-xl border border-white/5 hover:border-[#ff4e00]/30 hover:bg-white/10 transition-all cursor-help group/item">
                            <div className="flex items-center gap-1 mb-1">
                              <span className="text-[10px] font-mono text-white/40 uppercase tracking-tighter group-hover/item:text-white/60 transition-colors">
                                {DIMENSION_DESCRIPTIONS[key]?.label || key}
                              </span>
                              <Info className="w-2.5 h-2.5 text-white/20 group-hover/item:text-[#ff4e00]/50 transition-colors" />
                            </div>
                            <span className="text-lg font-mono text-[#ff4e00]">{Math.round((val as number) * 100)}%</span>
                          </div>
                        </Tooltip>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Deep Analysis Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white/5 border border-white/10 rounded-3xl"
                >
                  <h3 className="text-xs font-mono tracking-[0.3em] text-[#ff4e00] uppercase mb-6 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" /> Core Personality
                  </h3>
                  <p className="text-white/80 leading-relaxed font-light">
                    {resultData.analysis.corePersonality}
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white/5 border border-white/10 rounded-3xl"
                >
                  <h3 className="text-xs font-mono tracking-[0.3em] text-[#ff4e00] uppercase mb-6 flex items-center gap-2">
                    <Info className="w-4 h-4" /> Totem Symbolism
                  </h3>
                  <p className="text-white/80 leading-relaxed font-light">
                    {resultData.analysis.animalSymbolism}
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white/5 border border-white/10 rounded-3xl"
                >
                  <h3 className="text-xs font-mono tracking-[0.3em] text-[#ff4e00] uppercase mb-6 flex items-center gap-2">
                    <Layers className="w-4 h-4" /> Relationship Pattern
                  </h3>
                  <p className="text-white/80 leading-relaxed font-light">
                    {resultData.analysis.relationshipPattern}
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white/5 border border-white/10 rounded-3xl"
                >
                  <h3 className="text-xs font-mono tracking-[0.3em] text-[#ff4e00] uppercase mb-6 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" /> Potential Conflicts
                  </h3>
                  <p className="text-white/80 leading-relaxed font-light">
                    {resultData.analysis.potentialConflicts}
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white/5 border border-white/10 rounded-3xl md:col-span-2"
                >
                  <h3 className="text-xs font-mono tracking-[0.3em] text-[#ff4e00] uppercase mb-6 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" /> Ideal Partner & Growth
                  </h3>
                  <p className="text-white/80 leading-relaxed font-light">
                    {resultData.analysis.idealPartnerStructure}
                  </p>
                  <div className="mt-6 pt-6 border-t border-white/5 text-sm text-white/40 italic">
                    {resultData.analysis.similarAnimalComparison}
                  </div>
                </motion.div>
              </div>

              {/* Animal Encyclopedia */}
              <div className="mt-24 pt-24 border-t border-white/10">
                <div className="text-center mb-16">
                  <h3 className="text-xs font-mono tracking-[0.5em] text-[#ff4e00] uppercase mb-4">Spirit Realm Encyclopedia</h3>
                  <h2 className="text-4xl md:text-5xl font-serif font-light">灵境图鉴</h2>
                  <p className="mt-4 text-white/40 font-light italic">“众生皆有灵，万物皆有性。”</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {ANIMALS.map((animal, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="group p-6 bg-white/5 border border-white/10 rounded-3xl hover:border-[#ff4e00]/30 hover:bg-white/10 transition-all"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-serif text-white/90 group-hover:text-[#ff4e00] transition-colors">
                          {animal.name}
                        </h4>
                        <div className="w-8 h-8 rounded-full bg-[#ff4e00]/10 flex items-center justify-center">
                          <Sparkles className="w-4 h-4 text-[#ff4e00]/40" />
                        </div>
                      </div>
                      <p className="text-sm text-white/50 leading-relaxed font-light mb-6 line-clamp-3 group-hover:line-clamp-none transition-all">
                        {animal.description}
                      </p>
                      <div className="grid grid-cols-4 gap-2">
                        {Object.entries(animal.dimensions).slice(0, 4).map(([key, val]) => (
                          <div key={key} className="flex flex-col items-center">
                            <span className="text-[8px] font-mono text-white/20 uppercase mb-1">
                              {DIMENSION_DESCRIPTIONS[key]?.label.slice(0, 2)}
                            </span>
                            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                              <div className="h-full bg-[#ff4e00]/40" style={{ width: `${val}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Decoration */}
      <footer className="fixed bottom-8 left-0 right-0 z-10 pointer-events-none">
        <div className="container mx-auto px-8 flex justify-between items-center opacity-20">
          <div className="text-[10px] font-mono tracking-[0.5em] uppercase">Soul Mapping Project</div>
          <div className="flex gap-4">
            <Sparkles className="w-4 h-4" />
          </div>
        </div>
      </footer>
    </div>
  );
}
