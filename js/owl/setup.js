$('.owl-carousel').owlCarousel({
    loop:true, //se colocar false ele não cria o loop
    margin:10,
    nav:false, //se colocar true ele exibe setas de navegação
    autoplay:true,
    autoplayTimeout:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})