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
        
        <div class="dropdown">
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="search.html">Shop</a></li>
              <li>
                <a href="#">Guitar</a>

                <ul>
                  <li>
                    <a href="guitar.html">Acoustic Guitars</a>
                  </li>
                  <li>
                    <a href="guitar1.html">Electric Guitars</a>
                  </li>
                  <li>
                    <a href="guitar2.html">Bass Guitars</a>
                  </li>
                  <li>
                    <a href="guitar3.html">Amplifire</a>
                  </li>
                  <li>
                    <a href="guitar4.html">Ukulele</a>
                  </li>
                  <li>
                    <a href="guitar5.html">Guitar Accessories</a>
                  </li>
                </ul>

              </li>
              <li>
                <a href="#">Keyboars</a>
                <ul>
                  <li>
                    <a href="keyboard.html">Portable keyboars</a>
                  </li>
                  <li>
                    <a href="keyboard1.html">Digital keyboars</a>
                  </li>
                  <li>
                    <a href="keyboard2.html">Multipurpose keyboars</a>
                  </li>
                  <li>
                    <a href="keyboard3.html">Stand & Accessories</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Drums</a>
                <ul>
                  <li>
                    <a href="drum.html">Acoustic Drums</a>
                  </li>
                  <li>
                    <a href="drum1.html">Snare Drums</a>
                  </li>
                  <li>
                    <a href="drum2.html">Electonic Drums kits</a>
                  </li>
                  <li>
                    <a href="drum3.html">Percussion</a>
                  </li>
                  <li>
                    <a href="drum4.html">Cymbals</a>
                  </li>
                  <li>
                    <a href="drum5.html">Sticks  & Accessories</a>
                  </li>
                </ul>
              </li>
              <li><a href="product4.html">Accessories</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
        </div>
    `;
};

createNav();
