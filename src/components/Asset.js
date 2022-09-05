import {
  Audio,
  Document,
  EventBuilder,
  Image,
  Reflection,
  ReflectionInput,
  ThreadBuilder,
  Video
} from "../components/AssetComponents/index";

const assetMap = (key) => {
  switch (key) {
    case "display_asset reflection":
      return Reflection;
    case "input_asset tb":
      return ThreadBuilder;
    case "input_asset reflection":
      return ReflectionInput;
    case "display_asset doc":
      return Document;
    case "display_asset img":
      return Image;
    case "input_asset article":
      return ReflectionInput;
    case "input_asset eb":
      return EventBuilder;
    case "display_asset audio":
      return Audio;
    case "display_asset vid":
      return Video;
    default:
      return "Error";
  }
};

const selectAsset = (data) => {
  let asset_key = data.asset_type;
  if (data.asset_type === "input_asset") {
    asset_key += " " + data.asset_content;
  }
  if (data.asset_type === "display_asset") {
    if (data.asset_content === "reflection") {
      asset_key += " reflection";
    } else if (data.display_asset_url !== "") {
      asset_key += " audio";
    } else if (data.display_asset_image !== "") {
      asset_key += " img";
    } else if (data.display_asset_video !== "") {
      asset_key += " vid";
    } else if (data.display_asset_docs !== "") {
      asset_key += " doc";
    }
  }
  return asset_key;
};

const Asset = (data) => {
  console.log(assetMap[selectAsset(data)]);
  return assetMap(selectAsset(data))(data);
};

export default Asset;
