console.log("hola");

 const trabajos = [
      {
        title: "MediGO",
        category:"UX/UI",
        photo: "Medigo.jpg",
      },
      {
        title: "Páginas amarillas",
        category: "UX/UI",
        photo: "P.amarillas.jpg",
      },
      {
        title: "Yo mujer",
        category: "UX/UI",
        photo: "Yomujer.jpg",
      },
      {
        title: "Rojo Carmín",
        category: "Editorial",
        photo: "Rojocarmin.jpg",
      },
      {
        title: "Cumbres borrascosas",
        category: "Editorial",
        photo: "Clásicos.jpg",
      },
      {
        title: "Guau",
        category: "Identidad visual",
        photo: "Guau.jpg",
      },
      {
        title: "Cowzy",
        category: "Identidad visual",
        photo: "Cowzy.jpg",
      },
      {
        title: "Vinilo Los Tres",
        category: "Destacado",
        photo: "Vinilolostres.jpg",
      },

      ];


      const galleryGrid = document.querySelector(".gallery-grid");

        trabajos.forEach(trabajo => {
         const item = document.createElement("div");
         item.classList.add("gallery-item");

         item.innerHTML = `
          <img src="${trabajo.photo}" alt="${trabajo.title}">
          <div class="gallery-overlay">
            <h3>${trabajo.title}</h3>
            <p>${trabajo.category}</p>
          </div>
         `;

    galleryGrid.appendChild(item);
});
