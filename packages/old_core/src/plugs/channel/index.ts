import { ChannelPlugReturnedType } from "../../interfaces/channel";
import { ComponentObjType } from "../../interfaces/component";
import NoorError from "../../utils/error";

// channel plug

function channelPlug(this_obj: ComponentObjType<any>): ChannelPlugReturnedType {
  // check if this_obj
  if (!this_obj) {
    throw new NoorError("Please pass the element constructor 'this'");
  }
  // check if this_obj isn't initialized
  if (!this_obj.ele.element) {
    throw new NoorError(
      "You shouldn't call the 'channel' plug before the 'element' plug (before the component gets initialized)",
      "NotInitialized"
    );
  }

  // provider function
  const provider: ChannelPlugReturnedType["provider"] = (
    channel,
    initialValue
  ) => {
    // throw an error if the channel isn't passed
    if (!channel || !channel.id) {
      throw new NoorError("Please pass the channel param to the provider");
    }

    // setting the channel id and make the current component as channel provider
    this_obj.ele.channel.provider.id = channel.id;
    this_obj.ele.channel.provider.is = true;
    // var to see if the state has been set
    let set_initialed = false;
    if (initialValue) {
      // setting the initial value
      channel.setter(initialValue);
      // reset the value after the first render to help backward accessing
      this_obj.onMount(() => {
        channel.setter(initialValue);
      });
      // set the var to true
      set_initialed = true;
    }

    // returning the value method
    return {
      value: (initialValue) => {
        if (initialValue) {
          // check if the initial value has been already set
          if (set_initialed) {
            throw new NoorError(
              "You can set the channel initial value just one time"
            );
          }
          // setting the initial value
          channel.setter(initialValue);
          // reset the value after the first render to help backward accessing
          this_obj.onMount(() => {
            channel.setter(initialValue);
          });
          // set the var to true
          set_initialed = true;
        }
      },
    };
  };

  // accessor function
  const accessor: ChannelPlugReturnedType["accessor"] = (channel) => {
    // throw an error if the channel isn't passed
    if (!channel || !channel.id) {
      throw new NoorError("Please pass the channel param to the accessor");
    }

    // saving the channel id to the accessors array in the current component
    this_obj.ele.channel.accessors.push(channel.id);

    // checking if this channel was provided by this component
    if (
      this_obj.ele.channel.provider.is &&
      this_obj.ele.channel.provider.id == channel.id
    ) {
      throw new NoorError(
        "You can't access a channel which was provided by the same component"
      );
    }

    // proxy handlers
    const prxHandlers: ProxyHandler<any> = {
      // set the 'get' handler
      /*
       This get handler will ran when every the accessor tries to get a property
       This will help to give the accessor the latest value of the property
       This will happen whenever the parent tries to access a children's channel before the children even render      
       */
      get(target, p) {
        target = channel.getter();
        return target[p];
      },
    };
    // create proxy from the channel data obj
    const prx = new Proxy(channel.getter(), prxHandlers);

    // returning proxy object
    return prx;
  };

  return {
    provider,
    accessor,
  };
}

export default channelPlug;
