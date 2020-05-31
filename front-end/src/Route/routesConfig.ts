import { IRoute } from "./IRoute";
import RoutesEnum from "./RoutesEnum";

type EnumDictionary<T extends string | symbol | number, U> = {
    [K in T]: U;
};

export const routesConfig: EnumDictionary<RoutesEnum, IRoute> = {
    [RoutesEnum.LEARN]: {url:'/', name:'Aprenda'},
    [RoutesEnum.MISSIONS]: {url:'/missoes', name:'Missões'},
    [RoutesEnum.PROFILE]: {url:'/user', name:'Perfil'},
    [RoutesEnum.CONTENT]: {url:'/content', name:'Content'},
 };