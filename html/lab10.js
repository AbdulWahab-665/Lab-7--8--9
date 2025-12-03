let allProducts = [];
const listBox = document.getElementById("list");

const show = (arr) => {
  listBox.innerHTML = "";
  arr.forEach(({ name, price, category }) => {
    const box = document.createElement("div");
    box.className = "item";
    box.innerHTML = `
      <div class="item-title">${name}</div>
      <div>Price: $${price}</div>
      <div>Category: ${category}</div>
    `;
    listBox.appendChild(box);
  });
};

const loadData = async () => {
  try {
    const res = await fetch("lab10.json");
    allProducts = await res.json();
    show(allProducts);
  } catch (err) {
    console.log("Failed to load JSON:", err);
  }
};

document.getElementById("btnSort").addEventListener("click", () => {
  const sorted = [...allProducts].sort((a, b) => a.price - b.price);
  show(sorted);
});

document.getElementById("btnFilter").addEventListener("click", () => {
  const onlyElec = allProducts.filter(p => p.category === "Electronics");
  show(onlyElec);
});

document.getElementById("btnShowAll").addEventListener("click", () => {
  show(allProducts);
});

loadData();
