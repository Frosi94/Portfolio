/* ----- HEADER ----- */
// social icons
$('#home .social-icons').html(dataHeader.social.map(item =>
    `<li>
        <a target="_blank" href="${item.link}">${item.icon}</a>
    </li>`
).join(''));

// typing simulation
var typed = new Typed(".typing", {
    strings: ["Frosina Stojanovski.", "financial analyst.", "creative.", "collaborative.", 'detail oriented.'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});