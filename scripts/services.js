/* ----- SERVICES ----- */
$('#srv').html(dataServices.map(item =>
    `<div class="service text-center my-3">
        <img class="my-3" src="${item.image}" />
        <h5>${item.title}</h5>
        <p style="font-size: 12px;">${item.description}</p>
    </div>`
).join(''));