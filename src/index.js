import axios from "axios";
import dotenv from "dotenv";

import renderJourneyList from "./utils/renderJourneyList";
import renderAssetGrid from "./utils/renderAssetGrid";

dotenv.config();

async function getAssetData() {
  let response;
  try {
    response = await axios.get(process.env.API_URL, {
      headers: { "X-Master-Key": process.env.X_MASTER_KEY }
    });
  } catch (e) {
    console.log(e);
  } finally {
    renderJourneyList(response.data.record);
    renderAssetGrid(response.data.record);
  }
}

getAssetData();
