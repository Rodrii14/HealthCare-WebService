// controllers/content/pressure.controllers.js
const Pressure = require('../../models/content/pressure.models');
const Codes = require('../../utilities/Codes.utilities');

const pressureControllers = {};

// Guarda / actualiza la presión del día para el usuario logueado
pressureControllers.updatePressure = async (req, res, next) => {
  try {
    const { sys, dis } = req.body;      // sistólica y diastólica
    const user = req.user;
    const _date = new Date();
    const date = _date.toLocaleDateString();

    // Elimina el registro de ese día (si existe)
    await Pressure.findOneAndDelete({ user: user, date: date });

    const pressure = new Pressure({
      user: user,
      sys: sys,
      dis: dis,
      date: date,
    });

    await pressure.save();
    return res.status(200).json({ message: 'Saved successfully' });
  } catch (error) {
    console.error(error);
    return Codes.code500(res);
  }
};

// Devuelve todos los registros de presión del usuario
pressureControllers.getPressure = async (req, res, next) => {
  try {
    const user = req.user;

    const pressure = await Pressure.find({ user: user });

    if (!pressure) {
      return Codes.code404(res);
    }

    return res.status(200).json(pressure);
  } catch (error) {
    console.error(error);
    return Codes.code500(res);
  }
};

module.exports = pressureControllers;
