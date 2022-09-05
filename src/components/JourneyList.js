const JourneyList = (data) => {
  let journeyList = `<li><div class="demo-head">${data.tasks[0].task_title}</div><ul>`;
  for (let i = 0; i < data.tasks[0].assets.length; i++) {
    journeyList += `<li>${data.tasks[0].assets[i].asset_title}</li>`;
  }
  journeyList += `</ul>
            </li>`;
  return journeyList;
};

export default JourneyList;
