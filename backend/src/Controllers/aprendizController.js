const Aprendiz = require('../Models/tbl_aprendiz');
const {emailSend} = require('../Controllers/mailController');



exports.aprenidz_create = function (req, res) {
    // ------------------ Validate Request ----------------- //
    if (!req.body.nombre || !req.body.email || !req.body.documentoIdentidad || !req.body.celular || !req.body.telefono || !req.body.direccionResidencia || !req.body.eps || !req.body.ficha || !req.body.programaDeFormacion ){
        return res.status(400).send("¡Por favor rellene todos los campos solicitados!");
    }

// Create a public
let aprendiz = new Aprendiz(
    ({ nombre, email, documentoIdentidad, celular ,telefono, direccionResidencia, eps, ficha, programaDeFormacion} = req.body)
);

// ------------- save public in the database -----------
aprendiz
    .save()
    .then(data => {
        res.send("Su registro se ha guardado exitosamente");
    })
    .then(dat => {
        emailSend(req.body);
      
        Aprendiz.findOneAndUpdate({ email: req.body.email},(err, usuario) => {
            if (err) return res.status(500).send({ message: 'err' })
        })
        return res.send("Ok")
    })
    .catch(err => {
        res.status(500).send({
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
                message: message,
                data: data
            });
            })
            .catch(err => {
            res.status(500).send({
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
            message: "Aprendiz no encontrado con el id" + req.params.id
          });
        }
        res.send({
          message: "Aprendiz encontrado",
          data: data
        });
      })
      .catch(err => {
        if (err.kind === "ObjectId") {
          return res.status(404).send({
            message: "Aprendiz no encontrada con el id " + req.params.id
          });
        }
        return res.status(500).send({
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
                message: "Aprendiz no encontrado con el id " + req.params.id
            });
        }
        res.send({
            data: data
        });
    })
    .catch( err => {
        if (err.kind === "ObjectId") {
            return res.status(404).send({
              message: "Aprendiz no encontrado con el id " + req.params.id
            });
          }
          return res.status(500).send({
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
            message: "Aprendiz no encontrado con el id " + req.params.id
          });
        }
        res.send({
          message: "Aprendiz eliminado exitosamente"
        });
      })
      .catch(err => {
        if (err.kind === "ObjectId" || err.name === "NotFound") {
          return res.status(404).send({
            message: "Aprendiz no encontrado con el id " + req.params.id
          });
        }
        return res.status(500).send({
          message: "No se puede eliminar el aprendiz con el id " + req.params.id
        });
      });
  };

  
// --------- find a funcionario by documento Identidad -------------
exports.aprendiz_ing = async (req, res) => {
  const {documentoIdentidad} = req.body;
  await Aprendiz.findOne({documentoIdentidad}).select({_id:0,horaEntrada:0})
    .then(data => {
      if (!data) {
        return res.status(404).send(`Persona no encontrada con el documento de identidad ${documentoIdentidad}`);
      }
      // res.send(`Bienvenido ${data.nombre} con EPS ${data.eps}`);      
      res.send(data)
    })
    .catch(err => {
      return res.status(500).send(`Error al traer la persona con el documento ${documentoIdentidad}`);
    });
};
    

// ------ Count registros ---------
exports.countDocuments = (req, res) => {
  Aprendiz.count({}, function(err, result) {
    if(err){
      console.log(err)
    } else {
      res.send({result})
    }
  })
}