
import Inicio from '../Views/Inicio';
import Admin from '../Views/Administracion/administracion';


const routes = [
    {
        path:'/',
        component: Inicio
    },
    {
        path:'/Admin',
        component: Admin
    },



]

export { routes };