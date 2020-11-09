const loadImages = (query = "tree") => {
  fetch(`http://www.splashbase.co/api/v1/images/search?query=${query}`)
    .then((result) => result.json())
    .then((parsed_json) => {
      let cards = document.querySelectorAll(".card");

      cards.forEach((card, i) => {
        card.innerHTML = `<img src="${parsed_json.images[i].url}" id="${i}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">
                            This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">
                                    View
                                </button>
                                <button type="button" id="hide" class="btn btn-sm btn-outline-secondary">
                                    Hide
                                </button>
                            </div>
                            <small class="text-muted">9 mins</small>
                        </div>
                    </div>
                `;
      });
    });
};

const buttonsHandler = () => {
  let load_primary = document.getElementById("primary");
  let load_secondary = document.getElementById("secondary");
  load_primary.addEventListener("click", () => {
    loadImages();
  });
  load_secondary.addEventListener("click", () => {
    loadImages("mountain");
  });
  let view_btns = document.querySelectorAll(".btn-group > button:first-child");
  view_btns.forEach((view, i) => addEventListener("click", () => {}));
  //   console.log(view_btns);
};

window.onload = () => {
  buttonsHandler();
  let search = document.getElementById("query");
  console.log(search);
  search.addEventListener("change", function (event) {
    console.log(event.target.value);
    query = event.target.value;
    //TODO complete
  });
};
