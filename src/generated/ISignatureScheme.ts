/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface ISignatureSchemeInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "SCHEME_ID"
      | "hashToBytes"
      | "hashToPoint"
      | "verifySignature"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "SCHEME_ID", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "hashToBytes",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hashToPoint",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "verifySignature",
    values: [BytesLike, BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "SCHEME_ID", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hashToBytes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hashToPoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifySignature",
    data: BytesLike
  ): Result;
}

export interface ISignatureScheme extends BaseContract {
  connect(runner?: ContractRunner | null): ISignatureScheme;
  waitForDeployment(): Promise<this>;

  interface: ISignatureSchemeInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  SCHEME_ID: TypedContractMethod<[], [string], "nonpayable">;

  hashToBytes: TypedContractMethod<[message: BytesLike], [string], "view">;

  hashToPoint: TypedContractMethod<
    [message: BytesLike],
    [[bigint, bigint]],
    "view"
  >;

  verifySignature: TypedContractMethod<
    [message: BytesLike, signature: BytesLike, publicKey: BytesLike],
    [boolean],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "SCHEME_ID"
  ): TypedContractMethod<[], [string], "nonpayable">;
  getFunction(
    nameOrSignature: "hashToBytes"
  ): TypedContractMethod<[message: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "hashToPoint"
  ): TypedContractMethod<[message: BytesLike], [[bigint, bigint]], "view">;
  getFunction(
    nameOrSignature: "verifySignature"
  ): TypedContractMethod<
    [message: BytesLike, signature: BytesLike, publicKey: BytesLike],
    [boolean],
    "view"
  >;

  filters: {};
}
