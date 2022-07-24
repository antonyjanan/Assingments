window.addEventListener('load', () => {
    const container = document.querySelector(".contacts-container");


    // Data - List of Items.
    const itemsList = [{
            name: "janique costa",
            email: "janique.costa@example.com",
            imageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.lensmen.ie%2Fwp-content%2Fuploads%2F2015%2F02%2FProfile-Portrait-Photographer-in-Dublin-Ireland..jpg&f=1&nofb=1",
            altText: "person image"
        },
        {
            name: "eva duncan",
            email: "eva.duncan@example.com",
            imageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvisafoto.com%2Fimg%2Ftilt_not_fixed.jpg&f=1&nofb=1",
            altText: "person image"
        },
        {
            name: "janique costa",
            email: "janique.costa@example.com",
            imageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.lensmen.ie%2Fwp-content%2Fuploads%2F2015%2F02%2FProfile-Portrait-Photographer-in-Dublin-Ireland..jpg&f=1&nofb=1",
            altText: "person image"
        },
        {
            name: "eva duncan",
            email: "eva.duncan@example.com",
            imageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvisafoto.com%2Fimg%2Ftilt_not_fixed.jpg&f=1&nofb=1",
            altText: "person image"
        }
    ];

    itemsList.forEach((item) => {
        const itemElement = document.createElement("div");
        const hrElement = document.createElement("hr");
        itemElement.classList.add("container-items");
        itemElement.innerHTML = `
    <div class="contact-section">
      <img src=${item.imageURL} alt=${item.altText} class="contact-img">
        <div class="contact-body">
          <h3 class="contact-name">${item.name}</h3>
          <h4 class="contact-email">${item.email}</h4>
        </div>
      </div>
  <div class="contact-detail-icon">
    <i class="fa-solid fa-chevron-right"></i>
  </div>
`;
        container.appendChild(itemElement);
        container.appendChild(hrElement);
    });
});