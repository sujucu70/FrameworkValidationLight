
import React, { useState } from 'react';

const Timeline: React.FC = () => {
  const weeks = Array.from({ length: 6 }, (_, i) => i + 1);
  const decisionPoints = [4, 5, 6];
  const [completedWeeks, setCompletedWeeks] = useState<boolean[]>(Array(6).fill(false));

  const toggleWeek = (index: number) => {
    const newCompletedWeeks = [...completedWeeks];
    newCompletedWeeks[index] = !newCompletedWeeks[index];
    setCompletedWeeks(newCompletedWeeks);
  };


  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-slate-200">
      <h3 className="text-lg font-bold text-slate-700 mb-3 text-center">Timeline: 6 Semanas de Foco</h3>
      <div className="flex justify-between items-end gap-1">
        {weeks.map((week, index) => (
          <div key={week} className="flex-1 flex flex-col items-center group">
            <div 
              className="w-8 h-8 mb-1 flex items-center justify-center border-2 rounded-full cursor-pointer transition-all"
              onClick={() => toggleWeek(index)}
              style={{
                borderColor: completedWeeks[index] ? '#4F46E5' : '#cbd5e1',
                backgroundColor: completedWeeks[index] ? '#EEF2FF' : 'white'
              }}
            >
              {completedWeeks[index] && <span className="text-indigo-600 font-bold">✓</span>}
            </div>
            <div className="relative w-full h-8 flex items-center justify-center">
               <div className={`w-full h-2 ${decisionPoints.includes(week) ? 'bg-indigo-400' : 'bg-slate-200'}`}></div>
               {decisionPoints.includes(week) && (
                 <div className="absolute -top-3 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg z-10" title={`Decision Point: Semana ${week}`}>
                   {week}
                 </div>
               )}
            </div>
            <span className={`mt-2 text-xs ${decisionPoints.includes(week) ? 'text-indigo-600 font-bold' : 'text-slate-500'}`}>
              S{week}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
