
import React from 'react';
import type { Hypothesis } from '../types';
import { Icon, Clock, BarChart } from './icons';

interface HypothesisCardProps {
  hypothesis: Hypothesis;
  onSelect: () => void;
}

const HypothesisCard: React.FC<HypothesisCardProps> = ({ hypothesis, onSelect }) => {
  const { id, title, icon, hexColor, initialConfidence, decisionPoint } = hypothesis;

  return (
    <div
      onClick={onSelect}
      className="bg-white rounded-lg shadow-md border border-slate-200 hover:shadow-xl hover:border-indigo-400 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: hexColor }}>
              <Icon name={icon} className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-500">{id}</p>
              <h3 className="text-lg font-bold text-slate-800">{title}</h3>
            </div>
          </div>
        </div>
        
        <div className="mt-4">
            <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-slate-600">Confianza Inicial</span>
                <span className="text-sm font-bold" style={{color: hexColor}}>{initialConfidence}%</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2.5">
                <div className="h-2.5 rounded-full" style={{ width: `${initialConfidence}%`, backgroundColor: hexColor }}></div>
            </div>
        </div>
      </div>
      <div className="bg-slate-50 px-5 py-3 border-t border-slate-200 flex justify-between text-sm text-slate-600">
         <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-slate-400"/>
            <span>Decision Point: <strong>Semana {decisionPoint}</strong></span>
        </div>
      </div>
    </div>
  );
};

export default HypothesisCard;
