const Image = (data) => {
  let imageId = data.display_asset_image.split("/");
  let embedLink = "https://giphy.com/embed/" + imageId[4];
  console.log(embedLink);

  return `<div class="asset">
                <h3 class="asset-head">${data.asset_title}</h3>
                <div class="drive-embed youtube">
                    <iframe width="auto" src="${embedLink}" frameBorder="0"
                        class="giphy-embed" allowFullScreen></iframe>
                </div>
                <div class="asset-description hidden">
                    ${data.asset_description}
                </div>
                <div class="asset-expand">
                    <img src="./src/assets/angle-down-solid.svg">
                </div>
            </div>`;
};

export default Image;
