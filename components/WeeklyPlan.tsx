
import React, { useState } from 'react';
import { ChevronDown } from './icons';

const planData = [
  {
    week: 1,
    title: 'Preparación y Outreach (H1)',
    tasks: [
      { day: 'Lunes', task: 'Setup herramientas (LinkedIn Sales Nav, Email, CRM)', hours: '3h' },
      { day: 'Martes', task: 'Construir lista de 60 prospects (3 segmentos)', hours: '4h' },
      { day: 'Miércoles', task: 'Escribir secuencias de email/LI', hours: '2h' },
      { day: 'Jueves', task: 'Lanzar 1er batch de outreach (20 contactos)', hours: '2h' },
      { day: 'Viernes', task: 'Lanzar 2do batch (20 contactos) y revisar respuestas', hours: '2h' },
    ]
  },
  {
    week: 2,
    title: 'Outreach y Primeras Calls (H1, H2)',
    tasks: [
      { day: 'Lunes', task: 'Lanzar 3er batch (20 contactos)', hours: '2h' },
      { day: 'Martes', task: 'Follow-ups y agendar primeras calls', hours: '3h' },
      { day: 'Miércoles', task: '2-3 Discovery Calls. Test A/B de mensaje.', hours: '4h' },
      { day: 'Jueves', task: '2-3 Discovery Calls. Test A/B de mensaje.', hours: '4h' },
      { day: 'Viernes', task: 'Sintetizar aprendizajes. Empezar preguntas de pricing.', hours: '3h' },
    ]
  },
  {
    week: 3,
    title: 'Más Calls y Recopilación de Datos (H2, H3)',
    tasks: [
      { day: 'Lunes', task: 'Follow-ups. Analizar response rates H1', hours: '2h' },
      { day: 'Martes', task: '3-4 Discovery Calls. Foco en pricing y "proof".', hours: '4h' },
      { day: 'Miércoles', task: 'Buffer para reagendar o más calls.', hours: '3h' },
      { day: 'Jueves', task: '3-4 Discovery Calls. Foco en pricing y "proof".', hours: '4h' },
      { day: 'Viernes', task: 'Análisis de datos: H1 (ICP), H2 (Pricing)', hours: '3h' },
    ]
  },
  {
    week: 4,
    title: 'Decisión H1 y Refinamiento',
    tasks: [
      { day: 'Lunes', task: 'DECISIÓN H1: Analizar qué segmento funciona. Pivotar outreach si es necesario.', hours: '4h' },
      { day: 'Martes', task: 'Ajustar listas y mensajes según decisión H1.', hours: '3h' },
      { day: 'Miércoles', task: '2-3 Calls con el ICP refinado.', hours: '3h' },
      { day: 'Jueves', task: 'Construir borrador de "Activo de Prueba Mínimo" (H3).', hours: '4h' },
      { day: 'Viernes', task: 'Sintetizar datos para decisión H2.', hours: '2h' },
    ]
  },
  {
    week: 5,
    title: 'Decisión H2 y Primeras Propuestas',
    tasks: [
      { day: 'Lunes', task: 'DECISIÓN H2: Fijar mensaje y precio. Crear plantilla de propuesta.', hours: '4h' },
      { day: 'Martes', task: 'Enviar 1-2 propuestas a los leads más calientes.', hours: '3h' },
      { day: 'Miércoles', task: 'Follow-up de propuestas. Calls con nuevos leads.', hours: '4h' },
      { day: 'Jueves', task: 'Refinar el "Activo de Prueba Mínimo" (H3).', hours: '3h' },
      { day: 'Viernes', task: 'Sintetizar datos para decisión H3.', hours: '2h' },
    ]
  },
  {
    week: 6,
    title: 'Decisión H3 y Cierre',
    tasks: [
      { day: 'Lunes', task: 'DECISIÓN H3: Estandarizar el "Proof" necesario para vender.', hours: '3h' },
      { day: 'Martes', task: 'Negociación y empuje para el cierre de 1-2 deals.', hours: '4h' },
      { day: 'Miércoles', task: 'Calls con nuevos leads usando el framework validado.', hours: '4h' },
      { day: 'Jueves', task: 'Negociación y empuje para el cierre.', hours: '3h' },
      { day: 'Viernes', task: 'Retrospectiva de 6 semanas: ¿Qué se ha aprendido? ¿Cuál es el plan para los próximos 30 días?', hours: '2h' },
    ]
  },
];

const WeeklyPlan: React.FC = () => {
  const [openWeek, setOpenWeek] = useState<number | null>(1);

  const toggleWeek = (week: number) => {
    setOpenWeek(openWeek === week ? null : week);
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-slate-700 mb-4 tracking-tight">
        Plan Semanal Día a Día
      </h2>
      <div className="space-y-2">
        {planData.map((weekData) => (
          <div key={weekData.week} className="border border-slate-200 rounded-lg bg-white overflow-hidden">
            <button
              onClick={() => toggleWeek(weekData.week)}
              className="w-full p-4 text-left flex justify-between items-center hover:bg-slate-50 focus:outline-none focus:bg-slate-100"
            >
              <div className="flex items-center gap-3">
                <span className="font-bold text-indigo-600">Semana {weekData.week}:</span>
                <span className="font-semibold text-slate-800">{weekData.title}</span>
              </div>
              <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${openWeek === weekData.week ? 'rotate-180' : ''}`} />
            </button>
            {openWeek === weekData.week && (
              <div className="p-4 border-t border-slate-200 bg-slate-50">
                <ul className="space-y-3">
                  {weekData.tasks.map((task, index) => (
                    <li key={index} className="flex items-center justify-between text-sm">
                      <div>
                        <span className="font-semibold text-slate-600 w-20 inline-block">{task.day}:</span>
                        <span className="text-slate-700">{task.task}</span>
                      </div>
                      <span className="text-xs font-mono bg-slate-200 text-slate-600 px-2 py-1 rounded-full">{task.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyPlan;
