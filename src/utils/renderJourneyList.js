import JourneyList from "../components/JourneyList";

export default function renderJourneyList(data) {
  const journey_list = document.getElementsByClassName("journey-list");
  journey_list[0].innerHTML = JourneyList(data);
  const journey_option = document.getElementsByClassName("journey-option");
  const journey_board = document.getElementsByClassName("journey-board");

  journey_option[0].addEventListener("click", () => {
    journey_board[1].classList.remove("hidden");
    journey_board[0].classList.add("hidden");
  });
  journey_option[1].addEventListener("click", () => {
    journey_board[0].classList.remove("hidden");
    journey_board[1].classList.add("hidden");
  });
}
