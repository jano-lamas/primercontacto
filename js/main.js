$(document).ready(function(){
    
    // Slider

    if(window.location.href.indexOf('index') > -1){ // Comprobamos si estamos situado en index.html
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth:1200
    });
    }
    // Post
    if(window.location.href.indexOf('index') > -1){ // Comprobamos si estamos situado en index.html
    var posts = [
        {
            title: "prueba de fecha 1",
            date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,            when an unknown printer took a galley of type and scrambled it to make a type            specimen book. It has survived not only five centuries, but also the leap into            electronic typesetting, remaining essentially unchanged. It was popularised in            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,            and more recently with desktop publishing software like Aldus PageMaker             including versions of Lorem Ipsum."
        },
        {
            title: "prueba de fecha 2",
            date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,            when an unknown printer took a galley of type and scrambled it to make a type            specimen book. It has survived not only five centuries, but also the leap into            electronic typesetting, remaining essentially unchanged. It was popularised in            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,            and more recently with desktop publishing software like Aldus PageMaker             including versions of Lorem Ipsum."
        },
        {
            title: "prueba de fecha 3",
            date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,            when an unknown printer took a galley of type and scrambled it to make a type            specimen book. It has survived not only five centuries, but also the leap into            electronic typesetting, remaining essentially unchanged. It was popularised in            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,            and more recently with desktop publishing software like Aldus PageMaker             including versions of Lorem Ipsum."
        },
        {
            title: "prueba de fecha 4",
            date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,            when an unknown printer took a galley of type and scrambled it to make a type            specimen book. It has survived not only five centuries, but also the leap into            electronic typesetting, remaining essentially unchanged. It was popularised in            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,            and more recently with desktop publishing software like Aldus PageMaker             including versions of Lorem Ipsum."
        }
    ];
    posts.forEach((item, index) =>{
        var post = `
        <article class="post"> 
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
                <p>
                    ${item.content}
                </p>
            <a href="#" class="button-more">leer mas</a>
         </article>
        `;

        $("#posts").append(post);
    });
    }
    

    var theme = $("#theme");
    $("#toGreen").click(function(){
        theme.attr("href", "css/green.css");
    });
    $("#toBlue").click(function(){
        theme.attr("href", "css/blue.css");
    });
    $("#toRed").click(function(){
        theme.attr("href", "css/red.css");
    });

    $(".subir").click(function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0
        },700);

        return false;
    });

    $(".instagram").click(function(){
        console.log("Presionaste instagram");
        window.open('https://www.instagram.com/?hl=es-la');
    });
    $(".github").click(function(){
        console.log("Presionaste github");
        window.open('https://github.com/jano-lamas');
    });
    $(".telegram").click(function(){
        console.log("Presionaste telegram");
        window.open('https://web.telegram.org/#/login');
    });
    $(".youtube").click(function(){
        console.log("Presionaste youtube");
        window.open('https://www.youtube.com/');
    });
    $(".linkedin").click(function(){
        console.log("Presionaste linkedin");
        window.open('https://www.linkedin.com/in/alejandro-lamas-96808b185/');
    });

    $(".curriculum").click(function(){
        console.log("Presionaste linkedin");
        window.open('https://drive.google.com/drive/folders/1d8f2aBKHwSt2ujtLDad82zk4E7dYGwN1?usp=sharing');
    });

    

    // Login Falso

    $("#login").submit(function(){
       var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);
    });


    var form_name = localStorage.getItem("form_name");
    if(form_name != null && form_name != "undenfined"){
        var about_parrafo = $("#about p");

        about_parrafo.html("Bienvenido, " + form_name);
        about_parrafo.append("</br><a href='#' id='logout' >Cerrar sesión</a>");

        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }

    if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();
    }

    if(window.location.href.indexOf('reloj') > -1){
       setInterval(function(){
        var reloj = moment().format("hh:mm:ss");
        $("#reloj").html(reloj);
       },1000);


    }

    // validacion
    if(window.location.href.indexOf('contacto.html') > -1){

        $("form input[name='date']").datepicker({
            dateFormat:'dd-mm-yy'
        });

        $.validate({
            lang: 'es',
            
        });
    }
  
});