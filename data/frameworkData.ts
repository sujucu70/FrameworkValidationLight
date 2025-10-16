import type { Hypothesis } from '../types';

export const hypotheses: Hypothesis[] = [
  {
    id: 'H1',
    title: 'ICP (Tamaño+Volumen+Sectores)',
    color: 'bg-blue-600',
    hexColor: '#2563EB',
    icon: 'Users',
    hypothesis: "El ICP mas asequible inicialmente son empresas de 50-500 empleados, con mas de 10000 contactos al mes, de los sectores principalmente Telecom/Utilities/Seguros/Sanidad Privada, que actualmente externalizan su CX (BPO tradicional).",
    initialConfidence: 50,
    criticality: "Define a quién le vendes. Si es falso, todo el outreach y messaging está mal enfocado.",
    decisionPoint: 4,
    failureCheckpoints: "Menos de 5% de response rate en todos los sub-segmentos. O si en las primeras 5 calls ninguna cumple los criterios clave (sector, tamaño, >10k contactos).",
    experiments: [
      {
        title: "Outreach Micro-Segmentado",
        cost: "€300 (LinkedIn Sales Nav + Email tool)",
        duration: "Semana 1-3",
        details: [
          "Construir lista de 80 empresas: 20x Telecom/Utilities, 20x Seguros, 20x Sanidad Privada (todos 50-500 emp, BPO), y 20x de control (ej. in-house).",
          "Investigar y cualificar volumen de contactos (>10k/mes) usando herramientas o proxies.",
          "Medir: Tasa de respuesta, meetings agendados y % de cualificados con >10k contactos por sub-segmento."
        ],
        successCriteria: "Un sub-segmento (ej. Seguros) tiene >10% de tasa de respuesta y genera >3 reuniones con prospects que confirman >10k contactos/mes.",
      },
      {
        title: "Calificación de Volumen y 'Pain'",
        cost: "€0",
        duration: "Semana 1-6",
        details: [
            "Añadir pregunta explícita sobre 'volumen de contactos mensual' al inicio de la calificación.",
            "Validar si el 'pain' de la externalización (coste, calidad) es más agudo en empresas con alto volumen.",
            "Mapear stakeholders y proceso de compra."
        ],
        successCriteria: "Las llamadas con el ICP ideal (>10k contactos/mes) revelan un 'pain' claro, budget asignado y un proceso de compra < 6 meses.",
      },
    ],
    decisionOutcomes: {
      week: 4,
      validated: "Focus 80% en el/los sub-segmento(s) ganador(es) (ej. solo Seguros >10k contactos). Construir playbook de ventas específico.",
      partial: "Si varios sub-segmentos responden pero el 'volumen de contactos' no es un buen predictor de 'pain', simplificar el ICP y re-testear.",
      invalidated: "Pausar outreach. El volumen de contactos puede ser el filtro equivocado, o los sectores no son los correctos. Analizar datos cualitativos y pivotar.",
    },
  },
  {
    id: 'H2',
    title: 'PROPUESTA VALOR + PRICING',
    color: 'bg-purple-600',
    hexColor: '#9333EA',
    icon: 'Zap',
    hypothesis: "Un mensaje centrado en 'Hybrid AI+Human para escalar tu atención al cliente de forma inteligente y mejorar CSAT, en modelo suscripción, sin riesgos ni fricciones' con un precio de €2.5K/mes es el sweet spot para cerrar.",
    initialConfidence: 40,
    criticality: "Define qué vendes y a qué precio. El core de tu oferta.",
    decisionPoint: 5,
    failureCheckpoints: "Si en 10 llamadas, >80% reaccionan negativamente al precio o no ven valor en el 'escalado inteligente' y el modelo de 'suscripción sin riesgo'.",
    experiments: [
      {
        title: "A/B Test de Mensajes en Calls",
        cost: "€0",
        duration: "Semana 1-5",
        details: [
          "Preparar 2 mini-presentaciones (5 min): A) Enfocada en 'Escalado Inteligente' y mejora de CSAT. B) Enfocada en el 'Modelo de Suscripción' sin riesgo ni fricciones.",
          "Alternar la presentación en 12-15 discovery calls.",
          "Medir engagement: qué mensaje genera más preguntas y menos objeciones."
        ],
        successCriteria: "Un mensaje genera un 30%+ más de engagement y 'siguientes pasos' claros.",
      },
      {
        title: "Van Westendorp Pricing en Vivo",
        cost: "€0",
        duration: "Semana 2-5",
        details: [
            "Al final de las llamadas calificadas, hacer las 4 preguntas de Van Westendorp.",
            "('Muy barato', 'Barato', 'Caro', 'Muy caro').",
            "Analizar los datos para encontrar el rango de precio óptimo."
        ],
        successCriteria: "El rango de precio óptimo se sitúa entre €2K y €4K, validando el punto de €2.5K.",
      },
    ],
    decisionOutcomes: {
      week: 5,
      validated: "Estandarizar el mensaje ganador y el precio de €2.5K en todas las propuestas.",
      partial: "Si el mensaje es claro pero el precio es alto, probar un tier 'Lite' a €1.5K. Si el precio está bien pero el mensaje no, refinar el pitch.",
      invalidated: "Re-evaluar el core de la oferta. El mercado puede querer 'solo AI' o 'solo BPO mejorado'. Requiere un PIVOT estratégico.",
    },
  },
  {
    id: 'H3',
    title: 'REQUISITOS DE PRUEBA',
    color: 'bg-teal-600',
    hexColor: '#14B8A6',
    icon: 'CheckCircle',
    hypothesis: "Los clientes no necesitan un pilot largo; una demo potente y 1-2 referencias/case studies son suficientes para firmar un contrato inicial.",
    initialConfidence: 60,
    criticality: "Define la velocidad del ciclo de ventas y el coste de adquisición. Un pilot largo mata el cash flow.",
    decisionPoint: 6,
    failureCheckpoints: "Si >50% de los prospectos calificados insisten en un pilot gratuito o de más de 30 días como condición indispensable para comprar.",
    experiments: [
      {
        title: "Descubrimiento de 'Umbral de Prueba'",
        cost: "€0",
        duration: "Semana 1-6",
        details: [
          "Preguntar directamente en cada llamada: '¿Qué necesitarías ver para sentirte cómodo firmando un acuerdo con nosotros?'",
          "Ofrecer proactivamente: 1) Demo personalizada, 2) Llamada con cliente existente, 3) Case study detallado.",
          "Medir qué opción es la más solicitada y aceptada."
        ],
        successCriteria: "Más del 70% de los prospectos aceptan la combinación de Demo + Referencia como suficiente.",
      },
      {
        title: "Creación de 'Activo de Prueba Mínimo'",
        cost: "€700 (Diseño de 1 Case Study + preparación de 1 Pilot Kit)",
        duration: "Semana 4-6",
        details: [
            "Basado en las primeras llamadas, si el 'Case Study' es lo más pedido, crear uno muy pulido.",
            "Si un 'Pilot' es inevitable, crear un 'Pilot Kit' estandarizado, de pago y de 2 semanas.",
            "No crear nada hasta que los datos lo pidan."
        ],
        successCriteria: "El activo creado (Case Study o Pilot Kit) desbloquea al menos 2 negociaciones de contrato.",
      },
    ],
    decisionOutcomes: {
      week: 6,
      validated: "Estandarizar el proceso de ventas como 'Demo -> Referencia/Case Study -> Cierre'. Eliminar la opción de pilot gratuito.",
      partial: "Ofrecer un 'Pilot de pago' de 2 semanas como opción premium para clientes enterprise o indecisos.",
      invalidated: "Aceptar que un pilot es necesario. Crear un proceso de pilot eficiente y de bajo coste, e incluirlo en el sales cycle y proyecciones de cash flow.",
    },
  },
];