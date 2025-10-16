
import React from 'react';
import type { Hypothesis } from '../types';
import { Icon, X, Check, AlertTriangle } from './icons';

interface HypothesisDetailModalProps {
  hypothesis: Hypothesis;
  onClose: () => void;
}

const HypothesisDetailModal: React.FC<HypothesisDetailModalProps> = ({ hypothesis, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white p-5 border-b border-slate-200 flex justify-between items-start z-10" style={{ borderTopColor: hypothesis.hexColor, borderTopWidth: '4px' }}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: hypothesis.hexColor }}>
              <Icon name={hypothesis.icon} className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-500">{hypothesis.id}</p>
              <h2 className="text-2xl font-bold text-slate-800">{hypothesis.title}</h2>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
            <X className="w-7 h-7" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <div className="mb-6 bg-slate-50 p-4 rounded-lg border border-slate-200">
            <p className="text-sm font-semibold text-slate-500 mb-1">Hipótesis:</p>
            <p className="text-lg text-slate-700 italic">"{hypothesis.hypothesis}"</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-sm font-semibold text-slate-500 mb-1">Por qué crítica:</p>
              <p className="text-slate-600">{hypothesis.criticality}</p>
            </div>
            <div className="bg-red-50 p-3 rounded-lg border border-red-200">
              <p className="text-sm font-semibold text-red-800 mb-1 flex items-center gap-1.5"><AlertTriangle className="w-4 h-4" /> Checkpoint de Fracaso:</p>
              <p className="text-sm text-red-700">{hypothesis.failureCheckpoints}</p>
            </div>
          </div>


          {/* Experiments */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-slate-700 mb-3">Experimentos para Validar</h3>
            <div className="space-y-4">
              {hypothesis.experiments.map((exp, index) => (
                <div key={index} className="p-4 border border-slate-200 rounded-lg bg-white">
                  <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                    <h4 className="font-bold text-slate-800">{exp.title}</h4>
                    <div className="flex gap-4 text-sm flex-shrink-0">
                      <span className="font-semibold text-slate-600">{exp.cost}</span>
                      <span className="text-slate-500">{exp.duration}</span>
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-slate-600 space-y-1 mb-2">
                    {exp.details.map((detail, i) => <li key={i}>{detail}</li>)}
                  </ul>
                  <p className="text-sm font-semibold text-teal-700 bg-teal-50 p-2 rounded-md">
                    Éxito: <span className="font-normal">{exp.successCriteria}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Decision Point */}
          <div>
            <h3 className="text-xl font-bold text-slate-700 mb-3">Decisión en Semana {hypothesis.decisionPoint}</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-green-800">Si se Valida</p>
                  <p className="text-green-700">{hypothesis.decisionOutcomes.validated}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-yellow-800">Si es Parcial</p>
                  <p className="text-yellow-700">{hypothesis.decisionOutcomes.partial}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                <X className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-red-800">Si se Invalida</p>
                  <p className="text-red-700">{hypothesis.decisionOutcomes.invalidated}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HypothesisDetailModal;
