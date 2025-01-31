// Channel creator function

import { ChannelType } from "../../../interfaces/channel";
import channelIdGenerator from "../../../utils/channel-id-generator";

function channelCreator<T extends Record<any, any> = any>(): ChannelType<T> {
  let store = Object.create({});
  const id = channelIdGenerator();

  //   getter function to get the store
  function getter(): T {
    // returning the store
    return store;
  }
  //   getter function to set the store
  function setter(obj: T) {
    // setting the store
    store = obj;
  }

  //  returning the getter , setter and id
  return {
    id: id,
    getter,
    setter,
    _v: store,
  };
}

export default channelCreator;
