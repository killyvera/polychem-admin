// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Product, ProductionFormula, FormulaMaterial, MemberProduction, ProductionTeam, Form, Production, Pallet, Package, UnitProduct, MaterialProduction, RawMaterial } = initSchema(schema);

export {
  Product,
  ProductionFormula,
  FormulaMaterial,
  MemberProduction,
  ProductionTeam,
  Form,
  Production,
  Pallet,
  Package,
  UnitProduct,
  MaterialProduction,
  RawMaterial
};