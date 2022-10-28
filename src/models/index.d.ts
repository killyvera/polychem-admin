import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductionFormulaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FormulaMaterialMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MemberProductionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductionTeamMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FormMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PalletMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PackageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UnitProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MaterialProductionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RawMaterialMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerProduct = {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProduct = {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Product = LazyLoading extends LazyLoadingDisabled ? EagerProduct : LazyProduct

export declare const Product: (new (init: ModelInit<Product, ProductMetaData>) => Product) & {
  copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

type EagerProductionFormula = {
  readonly id: string;
  readonly name?: string | null;
  readonly FormulaMaterials?: (FormulaMaterial | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProductionFormula = {
  readonly id: string;
  readonly name?: string | null;
  readonly FormulaMaterials: AsyncCollection<FormulaMaterial>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProductionFormula = LazyLoading extends LazyLoadingDisabled ? EagerProductionFormula : LazyProductionFormula

export declare const ProductionFormula: (new (init: ModelInit<ProductionFormula, ProductionFormulaMetaData>) => ProductionFormula) & {
  copyOf(source: ProductionFormula, mutator: (draft: MutableModel<ProductionFormula, ProductionFormulaMetaData>) => MutableModel<ProductionFormula, ProductionFormulaMetaData> | void): ProductionFormula;
}

type EagerFormulaMaterial = {
  readonly id: string;
  readonly name?: string | null;
  readonly quantity?: number | null;
  readonly productionformulaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFormulaMaterial = {
  readonly id: string;
  readonly name?: string | null;
  readonly quantity?: number | null;
  readonly productionformulaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FormulaMaterial = LazyLoading extends LazyLoadingDisabled ? EagerFormulaMaterial : LazyFormulaMaterial

export declare const FormulaMaterial: (new (init: ModelInit<FormulaMaterial, FormulaMaterialMetaData>) => FormulaMaterial) & {
  copyOf(source: FormulaMaterial, mutator: (draft: MutableModel<FormulaMaterial, FormulaMaterialMetaData>) => MutableModel<FormulaMaterial, FormulaMaterialMetaData> | void): FormulaMaterial;
}

type EagerMemberProduction = {
  readonly id: string;
  readonly name?: string | null;
  readonly role?: string | null;
  readonly shift?: string | null;
  readonly productionteamID: string;
  readonly CognitoId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMemberProduction = {
  readonly id: string;
  readonly name?: string | null;
  readonly role?: string | null;
  readonly shift?: string | null;
  readonly productionteamID: string;
  readonly CognitoId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MemberProduction = LazyLoading extends LazyLoadingDisabled ? EagerMemberProduction : LazyMemberProduction

export declare const MemberProduction: (new (init: ModelInit<MemberProduction, MemberProductionMetaData>) => MemberProduction) & {
  copyOf(source: MemberProduction, mutator: (draft: MutableModel<MemberProduction, MemberProductionMetaData>) => MutableModel<MemberProduction, MemberProductionMetaData> | void): MemberProduction;
}

type EagerProductionTeam = {
  readonly id: string;
  readonly MemberProductions?: (MemberProduction | null)[] | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProductionTeam = {
  readonly id: string;
  readonly MemberProductions: AsyncCollection<MemberProduction>;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProductionTeam = LazyLoading extends LazyLoadingDisabled ? EagerProductionTeam : LazyProductionTeam

export declare const ProductionTeam: (new (init: ModelInit<ProductionTeam, ProductionTeamMetaData>) => ProductionTeam) & {
  copyOf(source: ProductionTeam, mutator: (draft: MutableModel<ProductionTeam, ProductionTeamMetaData>) => MutableModel<ProductionTeam, ProductionTeamMetaData> | void): ProductionTeam;
}

type EagerForm = {
  readonly id: string;
  readonly name?: string | null;
  readonly planned?: boolean | null;
  readonly sent?: boolean | null;
  readonly expiration?: boolean | null;
  readonly expiration_date?: string | null;
  readonly Production?: Production | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly formProductionId?: string | null;
}

type LazyForm = {
  readonly id: string;
  readonly name?: string | null;
  readonly planned?: boolean | null;
  readonly sent?: boolean | null;
  readonly expiration?: boolean | null;
  readonly expiration_date?: string | null;
  readonly Production: AsyncItem<Production | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly formProductionId?: string | null;
}

export declare type Form = LazyLoading extends LazyLoadingDisabled ? EagerForm : LazyForm

export declare const Form: (new (init: ModelInit<Form, FormMetaData>) => Form) & {
  copyOf(source: Form, mutator: (draft: MutableModel<Form, FormMetaData>) => MutableModel<Form, FormMetaData> | void): Form;
}

type EagerProduction = {
  readonly id: string;
  readonly name?: string | null;
  readonly expectedPallets?: number | null;
  readonly expectedProducts?: number | null;
  readonly expectedPackages?: number | null;
  readonly ProductionTeam?: ProductionTeam | null;
  readonly Pallets?: (Pallet | null)[] | null;
  readonly ProductionFormula?: ProductionFormula | null;
  readonly MaterialProductions?: (MaterialProduction | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly productionProductionTeamId?: string | null;
  readonly productionProductionFormulaId?: string | null;
}

type LazyProduction = {
  readonly id: string;
  readonly name?: string | null;
  readonly expectedPallets?: number | null;
  readonly expectedProducts?: number | null;
  readonly expectedPackages?: number | null;
  readonly ProductionTeam: AsyncItem<ProductionTeam | undefined>;
  readonly Pallets: AsyncCollection<Pallet>;
  readonly ProductionFormula: AsyncItem<ProductionFormula | undefined>;
  readonly MaterialProductions: AsyncCollection<MaterialProduction>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly productionProductionTeamId?: string | null;
  readonly productionProductionFormulaId?: string | null;
}

export declare type Production = LazyLoading extends LazyLoadingDisabled ? EagerProduction : LazyProduction

export declare const Production: (new (init: ModelInit<Production, ProductionMetaData>) => Production) & {
  copyOf(source: Production, mutator: (draft: MutableModel<Production, ProductionMetaData>) => MutableModel<Production, ProductionMetaData> | void): Production;
}

type EagerPallet = {
  readonly id: string;
  readonly Packages?: (Package | null)[] | null;
  readonly name?: string | null;
  readonly productionID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPallet = {
  readonly id: string;
  readonly Packages: AsyncCollection<Package>;
  readonly name?: string | null;
  readonly productionID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Pallet = LazyLoading extends LazyLoadingDisabled ? EagerPallet : LazyPallet

export declare const Pallet: (new (init: ModelInit<Pallet, PalletMetaData>) => Pallet) & {
  copyOf(source: Pallet, mutator: (draft: MutableModel<Pallet, PalletMetaData>) => MutableModel<Pallet, PalletMetaData> | void): Pallet;
}

type EagerPackage = {
  readonly id: string;
  readonly UnitProducts?: (UnitProduct | null)[] | null;
  readonly palletID: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPackage = {
  readonly id: string;
  readonly UnitProducts: AsyncCollection<UnitProduct>;
  readonly palletID: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Package = LazyLoading extends LazyLoadingDisabled ? EagerPackage : LazyPackage

export declare const Package: (new (init: ModelInit<Package, PackageMetaData>) => Package) & {
  copyOf(source: Package, mutator: (draft: MutableModel<Package, PackageMetaData>) => MutableModel<Package, PackageMetaData> | void): Package;
}

type EagerUnitProduct = {
  readonly id: string;
  readonly name?: string | null;
  readonly packageID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUnitProduct = {
  readonly id: string;
  readonly name?: string | null;
  readonly packageID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UnitProduct = LazyLoading extends LazyLoadingDisabled ? EagerUnitProduct : LazyUnitProduct

export declare const UnitProduct: (new (init: ModelInit<UnitProduct, UnitProductMetaData>) => UnitProduct) & {
  copyOf(source: UnitProduct, mutator: (draft: MutableModel<UnitProduct, UnitProductMetaData>) => MutableModel<UnitProduct, UnitProductMetaData> | void): UnitProduct;
}

type EagerMaterialProduction = {
  readonly id: string;
  readonly name?: string | null;
  readonly lot?: string | null;
  readonly used?: number | null;
  readonly notUsed?: number | null;
  readonly waste?: number | null;
  readonly quantity?: number | null;
  readonly productionID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMaterialProduction = {
  readonly id: string;
  readonly name?: string | null;
  readonly lot?: string | null;
  readonly used?: number | null;
  readonly notUsed?: number | null;
  readonly waste?: number | null;
  readonly quantity?: number | null;
  readonly productionID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MaterialProduction = LazyLoading extends LazyLoadingDisabled ? EagerMaterialProduction : LazyMaterialProduction

export declare const MaterialProduction: (new (init: ModelInit<MaterialProduction, MaterialProductionMetaData>) => MaterialProduction) & {
  copyOf(source: MaterialProduction, mutator: (draft: MutableModel<MaterialProduction, MaterialProductionMetaData>) => MutableModel<MaterialProduction, MaterialProductionMetaData> | void): MaterialProduction;
}

type EagerRawMaterial = {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRawMaterial = {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RawMaterial = LazyLoading extends LazyLoadingDisabled ? EagerRawMaterial : LazyRawMaterial

export declare const RawMaterial: (new (init: ModelInit<RawMaterial, RawMaterialMetaData>) => RawMaterial) & {
  copyOf(source: RawMaterial, mutator: (draft: MutableModel<RawMaterial, RawMaterialMetaData>) => MutableModel<RawMaterial, RawMaterialMetaData> | void): RawMaterial;
}