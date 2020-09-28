// Puerto del servidor
process.env.PORT = process.env.PORT || 3008;

//Entorno, desarrollo, produccion
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

process.env.CADUCIDAD_TOKEN = '8h';

// SEED
process.env.SEED = process.env.SEED || 'eventoSena';

process.env.URLDB='mongodb+srv://senamecuida:0SV2WcnGWcs5Tgua@cluster0.jguyu.mongodb.net/senamecuida?retryWrites=true&w=majority'
//process.env.URLDB='mongodb://localhost/BaseDatos'

process.env.SECRET="fabrica2020"


