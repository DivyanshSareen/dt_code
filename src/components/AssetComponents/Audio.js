const Audio = (data) => {
  return `<div class="asset">
                <h3 class="asset-head">${data.asset_title}</h3>
                <div class="drive-embed">
                    <iframe src="${data.display_asset_url}"
                        frameborder="0"></iframe>
                </div>
                <div class="asset-description hidden">
                    ${data.asset_description}
                </div>
                <div class="asset-expand">
                    <img src="./src/assets/angle-down-solid.svg">
                </div>
            </div>`;
};

export default Audio;
