const createNav = () => {
  let nav = document.querySelector(".navbar");

  nav.innerHTML = `
    <div class="nav">
            <h2 style="letter-spacing: 3px; font-family: 'Roboto', sans-serif; ">MUSIC <span>STORE</span></h2>
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, Instrument">
                    <button class="search-btn">Search</button>
                </div>
                <a href="#"><img src="image/profile.png" alt="" style="height: 30px; width: 30px;"></a>
                <a href="#"><img src="image/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="links-item"><a href="index.html" class="link">home</a></li>
            <li class="links-item"><a href="search.html" class="link">shop</a></li>
            <li class="links-item"><a href="#" class="link">guitar</a></li>
            <li class="links-item"><a href="#" class="link">piano</a></li>
            <li class="links-item"><a href="product1.html" class="link">drums</a></li>
            <li class="links-item"><a href="#" class="link">accessories</a></li>
            <li class="links-item"><a href="contact.html" class="link">Contact Us</a></li>
        </ul>
    
    `;
};

createNav();
