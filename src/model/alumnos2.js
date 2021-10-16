const db = require("../database/models");

const AlumnoModel = {
  getAlumno: async () => {
    try {
      const response = await db.alumno.findAll();
      return response;
    } catch (error) {
      console.log(`fallo consulta a la base de datos ${error.message}`);
      return [];
    }
  },
  deleteAlumno: async (idalumno) => {
    try {
      const response = await db.alumno.destroy({
        where: {
          id: idalumno,
        },
      });
      return response;
    } catch (error) {
      console.log(`fallo eliminar usuario en la base de datos ${error.message}`);
      return [];
    }
  },
  createAlumno: async (alumno) => {
    try {
      const response = await db.alumno.create({
        ...alumno,
      });
      return response;
    } catch (error) {
      console.log(`fallo crear usuario en la base de datos ${error.message}`);
      return [];
    }
  },
};

module.exports = AlumnoModel;
