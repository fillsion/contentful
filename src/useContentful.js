import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "mi2376gvz0ix",
    accessToken: "kUdiMunhH1wGLabvkHdUdwVhd8znNfwdV2Xeaol-ly0", // preview access token
    host: "preview.contentful.com" //contentful host
  });

  const getJsons = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "champions",
        select: "fields"
        //order: "fields.edad"
      });
      return entries;
    } catch (error) {
      console.log(error);
    }
  };
  return { getJsons };
};
export default useContentful;
