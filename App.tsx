
import React, { useState } from 'react';
import Header from './components/Header';
import Timeline from './components/Timeline';
import HypothesisCard from './components/HypothesisCard';
import HypothesisDetailModal from './components/HypothesisDetailModal';
import WeeklyPlan from './components/WeeklyPlan';
import { hypotheses } from './data/frameworkData';
import type { Hypothesis } from './types';

const App: React.FC = () => {
  const [selectedHypothesis, setSelectedHypothesis] = useState<Hypothesis | null>(null);

  const handleSelectHypothesis = (hypothesis: Hypothesis) => {
    setSelectedHypothesis(hypothesis);
  };

  const handleCloseModal = () => {
    setSelectedHypothesis(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <Header />
        <Timeline />
        
        <main className="mt-8">
          <h2 className="text-2xl font-bold text-slate-700 mb-4 tracking-tight">
            Las 3 Hipótesis Críticas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hypotheses.map((hypo) => (
              <HypothesisCard
                key={hypo.id}
                hypothesis={hypo}
                onSelect={() => handleSelectHypothesis(hypo)}
              />
            ))}
          </div>

          <WeeklyPlan />
        </main>

        <footer className="text-center mt-12 text-slate-500 text-sm">
          <p>BeyondCX "Learn While You Sell" Framework</p>
        </footer>
      </div>

      {selectedHypothesis && (
        <HypothesisDetailModal
          hypothesis={selectedHypothesis}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default App;
