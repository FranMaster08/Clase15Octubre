const {AlumnoModel2:AlumnoModel} = require('../model')

const alumnosController={

    getAlumnos: async (req, res, next) => {
        const respuesta = await AlumnoModel.getAlumno()
        res.render('index',{alumnos:respuesta})
    },
    createAlumnos: async (req, res, next) => {
        const respuesta = await AlumnoModel.createAlumno(req.body)
        res.redirect('/')
    },
    deleteAlumnos: async (req, res, next) => {
        const respuesta = await AlumnoModel.deleteAlumno(req.params.id)
        res.redirect('/')
    },




}

module.exports=alumnosController