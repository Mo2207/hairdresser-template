import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";
const sanityClient = createClient({
  // TODO: mode to the env file
  projectId: "aw3v4mxg",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: false,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  return builder.image(source);
}
