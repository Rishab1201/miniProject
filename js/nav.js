const createNav = () => {
    let nav = document.querySelector(".navbar");

    nav.innerHTML = `
    
        <div class="nav">
            <h2 class="brand-logo">MUSIC STORE</h2>
                <div class="nav-items">
                    <div class="search">
                    <input type="text" class="search-box" placeholder="search brand,instrument">
                    <button class="search-btn">search</button>
                </div>
                <a href="cart.html"><image src="image/icons8-shopping-cart-30 (1).png"></i></a>
                <a href="#"><img src="image/icons8-male-user-48.png"> </a>
                </div>
            </div>       
            <ul class="links-container">
                <li class="links-item"><a href="index.html" class="link">home </i></a></li>
                <li class="links-item"><a href="search.html" class="link">shop </i></a></li>
                <li class="links-item"><a href="product2.html" class="link">guitar </a></li>

                <li class="links-item"><a href="product3.html" class="link">piano </a></li>




                <li class="links-item"><a href="product1.html" class="link">drums </a></li>





                <li class="links-item"><a href="product4.html" class="link">accessories </a></li>
                <li class="links-item"><a href="contact.html" class="link">Contact Us</a></li>
            </ul>
    `;
};

createNav();
