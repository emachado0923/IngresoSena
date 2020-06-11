const Aprendiz = require('../Models/tbl_aprendiz');
const Mail = require('../Controllers/mailController');

exports.aprenidz_create = function (req, res) {
    // ------------------ Validate Request ----------------- //
    if (!req.body.documentoIdentidad || !req.body.nombre || !req.body.apellido || !req.body.ficha || !req.body.programaDeFormacion || !req.body.email || !req.body.celular || !req.body.telefono || !req.body.torre ||  !req.body.direccionResidencia || !req.body.eps){
        return res.status(400).send({
            success: false,
            message: "Por favor rellene todos los campos solicitados"
        });
    }


// Create a public
let aprendiz = new Aprendiz(
    ({ documentoIdentidad, nombre, apellido, ficha, programaDeFormacion, email, celular, telefono, torre, direccionResidencia, eps} = req.body)
);

// ------------- save public in the database -----------
aprendiz
    .save()
    .then(data => {
        res.send({
            success: true,
            message: "Su registro se ha guardado exitosamente",
            data: data
        });
    })
    .catch(err => {
        res.status(500).send({
            success: false,
            message: 
                err.message || "Ocurrio un error al crear el registro",
        });
        console.log(err);
    })
}

// ------------- retrieve and return all public ------------------
exports.all_aprendices = (req, res) => {
    Aprendiz.find()
        .then(data => {
            var message = "";
            if (data === undefined || data.length == 0) message = "Aprendices no encontrados!";
            else message = "Aprendices recibidos";
            res.send({
                success: true,
                message: message,
                data: data
            });
            })
            .catch(err => {
            res.status(500).send({
                success: false,
                message: err.message || "Ocurrio un error al traer los registros"
            });
        
    });
};


// --------- find a public by id -------------
exports.aprendiz_details = (req, res) => {
    Aprendiz.findById(req.params.id)
      .then(data => {
        if (!data) {
          return res.status(404).send({
            success: false,
            message: "Aprendiz no encontrado con el id" + req.params.id
          });
        }
        res.send({
          success: true,
          message: "Aprendiz encontrado",
          data: data
        });
      })
      .catch(err => {
        if (err.kind === "ObjectId") {
          return res.status(404).send({
            success: false,
            message: "Aprendiz no encontrada con el id " + req.params.id
          });
        }
        return res.status(500).send({
          success: false,
          message: "Error al traer la aprendiz con el id " + req.params.id
        });
      });
  };

// --------- Find public and update ----------
exports.aprendiz_update = (req, res) => {
    // validate request
    if (!req.body.documentoIdentidad || !req.body.ficha) {
      return res.status(400).send({
        success: false,
        message: "Por favor ingrese el documento de identidad y la ficha del aprendiz"
      });
    }
Aprendiz.findOneAndUpdate(
    req.params.id,
    {
        $set: req.body
    },
    {new: true}
)
    .then(data => {
        if (!data){
            return res.status(400).send({
                success: false,
                message: "Aprendiz no encontrado con el id " + req.params.id
            });
        }
        res.send({
            success: true,
            data: data
        });
    })
    .catch( err => {
        if (err.kind === "ObjectId") {
            return res.status(404).send({
              success: false,
              message: "Aprendiz no encontrado con el id " + req.params.id
            });
          }
          return res.status(500).send({
            success: false,
            message: "Error actualizando el aprendiz con el id " + req.params.id
          });
    });
}

// delete a public with the specified id.
exports.aprendiz_delete = (req, res) => {
    Aprendiz.findOneAndDelete(req.params.id)
      .then(data => {
        if (!data) {
          return res.status(404).send({
            success: false,
            message: "Aprendiz no encontrado con el id " + req.params.id
          });
        }
        res.send({
          success: true,
          message: "Aprendiz eliminado exitosamente"
        });
      })
      .catch(err => {
        if (err.kind === "ObjectId" || err.name === "NotFound") {
          return res.status(404).send({
            success: false,
            message: "Aprendiz no encontrado con el id " + req.params.id
          });
        }
        return res.status(500).send({
          success: false,
          message: "No se puede eliminar el aprendiz con el id " + req.params.id
        });
      });
  };