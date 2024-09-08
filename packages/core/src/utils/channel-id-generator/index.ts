import { nanoid } from "nanoid";

// Function to generate the channel id

function channelIdGenerator(): string {
  return "chan_" + nanoid(6);
}

export default channelIdGenerator;
