const creatFooter = () => {
  let footer = document.querySelector("footer");

  footer.innerHTML = `
    <div class="footer-content">
    <h1 class="logo" style="color: #fff;">MUSIC STORE</h1>
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">Drums</li>
            <li><a href="#" class="footer-link">Acoustic Drums</a></li>
            <li><a href="#" class="footer-link">Electronic Drums</a></li>
            <li><a href="#" class="footer-link">Percussion</a></li>
            <li><a href="#" class="footer-link">Cymbals</a></li>
            <li><a href="#" class="footer-link">sticks & Accessories</a></li>
        </ul>

        <ul class="category">
            <li class="category-title">Guitars</li>
            <li><a href="#" class="footer-link">Acoustic Guitars</a></li>
            <li><a href="#" class="footer-link">Electric Guitars</a></li>
            <li><a href="#" class="footer-link">Bass Guitars</a></li>
            <li><a href="#" class="footer-link">Amplifier</a></li>
            <li><a href="#" class="footer-link">Ukulele</a></li>
            <li><a href="#" class="footer-link">Guitar Accessories</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">Piano</li>
            <li><a href="#" class="footer-link">Portable Keyboards</a></li>
            <li><a href="#" class="footer-link">Digital Keyboards</a></li>
            <li><a href="#" class="footer-link">Multipurpose Amplifiers</a></li>
            <li><a href="#" class="footer-link">Stands & Accessories</a></li>
        </ul>
        
    </div>

</div>
<p class="footer-title">about company</p>
<p class="info">Welcome to Music Store, your ultimate destination for all things musical. Our store was founded with a simple mission: to make high-quality instruments accessible to musicians of all levels.

    At Music Store, we believe that music has the power to transform lives. That's why we're committed to offering a wide range of instruments, from guitars and pianos to drums and saxophones, at affordable prices. Whether you're a beginner or a seasoned musician, you'll find everything you need to take your skills to the next level.
    
    Our team is made up of passionate music enthusiasts who are dedicated to helping you find the perfect instrument for your needs. We pride ourselves on providing exceptional customer service, and we're always happy to offer advice and guidance to anyone who needs it.
    
    In addition to selling instruments, we also offer repair and maintenance services to keep your instruments in top condition. Our experienced technicians use the latest tools and techniques to ensure that your instruments are always ready to perform.
    
    Thank you for choosing Music Store. We look forward to helping you achieve your musical dreams.</p>

    <p class="info">support emails - musicstore@gmail.com, 
        customersuppert@musicstore.com</p>

    <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>

    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>

    <p class="footer-credit">Music Store, Experience the joy of music with us.</p>
    `;
};

creatFooter();
