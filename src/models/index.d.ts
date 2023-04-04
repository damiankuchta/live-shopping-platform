import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerLiveStream = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LiveStream, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly ivs_url?: string | null;
  readonly start_date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLiveStream = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LiveStream, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly ivs_url?: string | null;
  readonly start_date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type LiveStream = LazyLoading extends LazyLoadingDisabled ? EagerLiveStream : LazyLiveStream

export declare const LiveStream: (new (init: ModelInit<LiveStream>) => LiveStream) & {
  copyOf(source: LiveStream, mutator: (draft: MutableModel<LiveStream>) => MutableModel<LiveStream> | void): LiveStream;
}