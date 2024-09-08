// Types & Interfaces of the channel api

// channelCreator returned
type ChannelType<T> = {
  id: string;
  getter: () => T;
  setter: (obj: T) => void;
  _v: T;
};

// channel plug types
type ChannelPlugReturnedType = {
  //  provider
  provider: <T extends ChannelType<any>>(
    channel: T,
    initialValue?: T["_v"]
  ) => {
    value: (obj: T["_v"]) => void;
  };
  // accessor
  accessor: <T extends any>(channel: ChannelType<T>) => T;
};

export type { ChannelType, ChannelPlugReturnedType };
