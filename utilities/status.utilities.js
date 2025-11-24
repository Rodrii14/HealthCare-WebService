// utilities/status.utilities.js

// Estados posibles
const STATUS = {
  NORMAL: "NORMAL",
  ALERTA: "ALERTA",
  CRITICO: "CRITICO",
};

/**
 * Peso (Weight)
 * Recibe el peso en kg.
 * OJO: son umbrales de demo, cámbialos si tu profe da otros.
 */
function getWeightStatus(weightKg) {
  if (!weightKg || weightKg <= 0) return STATUS.ALERTA;

  if (weightKg < 45) return STATUS.ALERTA;   // bajo peso
  if (weightKg <= 90) return STATUS.NORMAL;  // rango "normal" demo
  if (weightKg <= 110) return STATUS.ALERTA; // sobrepeso
  return STATUS.CRITICO;                     // obesidad alta
}

/**
 * Presión Arterial
 * sys = sistólica, dis = diastólica
 */
function getPressureStatus(sys, dis) {
  if (!sys || !dis) return STATUS.ALERTA;

  // Rangos de ejemplo (no diagnóstico real):
  if (sys < 90 || dis < 60) return STATUS.ALERTA;                // baja
  if (sys <= 120 && dis <= 80) return STATUS.NORMAL;             // normal
  if (sys <= 140 || dis <= 90) return STATUS.ALERTA;             // elevada
  return STATUS.CRITICO;                                         // muy alta
}

/**
 * Glucosa en sangre (ayunas)
 */
function getGlucoseStatus(glucose) {
  if (!glucose) return STATUS.ALERTA;

  if (glucose < 70) return STATUS.ALERTA;    // baja
  if (glucose <= 100) return STATUS.NORMAL;  // normal
  if (glucose <= 125) return STATUS.ALERTA;  // prediabetes
  return STATUS.CRITICO;                     // muy alta
}

/**
 * Colesterol total
 */
function getColesterolStatus(total) {
  if (!total) return STATUS.ALERTA;

  if (total < 200) return STATUS.NORMAL;
  if (total <= 239) return STATUS.ALERTA;
  return STATUS.CRITICO;
}

/**
 * Porcentaje de grasa corporal (Body Fat)
 * Puedes tunear estos rangos según sexo/edad si quisieras,
 * por ahora uso algo genérico de demo.
 */
function getBodyFatStatus(percent) {
  if (!percent) return STATUS.ALERTA;

  if (percent < 10) return STATUS.ALERTA;
  if (percent <= 25) return STATUS.NORMAL;
  if (percent <= 32) return STATUS.ALERTA;
  return STATUS.CRITICO;
}

/**
 * Masa muscular (Muscular Mass)
 * Aquí depende MUCHO del contexto; lo dejo suave:
 */
function getMuscularStatus(percent) {
  if (!percent) return STATUS.ALERTA;

  if (percent < 20) return STATUS.ALERTA;   // poca masa
  if (percent <= 40) return STATUS.NORMAL;  // rango bueno
  return STATUS.ALERTA;                     // por encima típico, no crítico
}

module.exports = {
  STATUS,
  getWeightStatus,
  getPressureStatus,
  getGlucoseStatus,
  getColesterolStatus,
  getBodyFatStatus,
  getMuscularStatus,
};
