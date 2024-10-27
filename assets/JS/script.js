const data = [
    {
        title: "sample",
        image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        desc: "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure."
    },
    {
        title: "sample",
        image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        desc: "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure."
    },
    {
        title: "sample",
        image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        desc: "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure."
    },
    {
        title: "sample",
        image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        desc: "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure."
    },
]

const row = document.getElementById('product-container');

data.map( item => {
    const col = document.createElement('div');
    col.classList.add('col-lg-3');
    col.innerHTML = `
    <div class="card">
        <img src=${item.image} class="card-img-top" alt="....">
        <div class="card-body">
            <h5 class="card-title>${item.title}</h5>
            <p class="card-text>${item.desc}</p>
            <a href="#" class= "btn btn-primary">click click!</a>
        </div>
    </div>
    `;
    row.appendChild(col)
})