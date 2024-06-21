function fun1(){
    let itemBox1 = document.getElementById("item1")
    let itemBox2 = document.getElementById("item2")
    let itemBox3 = document.getElementById("item3")
    let imageBox = document.getElementById("image")

    itemBox1.style.background = "#1d90ef"
    itemBox2.style.background = "#F5F5F5"
    itemBox3.style.background = "#F5F5F5"
    itemBox1.style.transition = "0.5s"
    itemBox2.style.transition = "0.5s"
    itemBox3.style.transition = "0.5s"

    imageBox.src = "file:///C:/Users/bilan/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D0%84%D0%B4%D0%BD%D0%B0%D1%94%D0%BC%D0%BE%D1%81%D1%8F/img/15_ukrainian-flags2.jpg"
    imageBox.transition = "0.5s"
}
function fun2(){
    let itemBox1 = document.getElementById("item1")
    let itemBox2 = document.getElementById("item2")
    let itemBox3 = document.getElementById("item3")
    let imageBox = document.getElementById("image")

    itemBox1.style.background = "#F5F5F5"
    itemBox2.style.background = "#1d90ef"
    itemBox3.style.background = "#F5F5F5"
    itemBox1.style.transition = "0.5s"
    itemBox2.style.transition = "0.5s"
    itemBox3.style.transition = "0.5s"

    imageBox.src = "file:///C:/Users/bilan/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D0%84%D0%B4%D0%BD%D0%B0%D1%94%D0%BC%D0%BE%D1%81%D1%8F/img/1000_F_517755418_E2Z5wjv460FeDyaRBljF9odns6K5Hmbu.jpg"
    imageBox.transition = "0.5s"
}
function fun3(){
    let itemBox1 = document.getElementById("item1")
    let itemBox2 = document.getElementById("item2")
    let itemBox3 = document.getElementById("item3")
    let imageBox = document.getElementById("image")

    itemBox1.style.background = "#F5F5F5"
    itemBox2.style.background = "#F5F5F5"
    itemBox3.style.background = "#1d90ef"
    itemBox1.style.transition = "0.5s"
    itemBox2.style.transition = "0.5s"
    itemBox3.style.transition = "0.5s"

    imageBox.src = "file:///C:/Users/bilan/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D0%84%D0%B4%D0%BD%D0%B0%D1%94%D0%BC%D0%BE%D1%81%D1%8F/img/c96a28e5-5e2c2b739fce0269f40b7bf630ac32a5.png"
    imageBox.transition = "0.5s"
}


let coment = [
    "Я приєднався до цього сайту волонтерів і залишився дуже задоволений! Відмінна платформа для знаходження значних проектів та волонтерської роботи.", 
    "Сайт волонтерів виявився справжнім відкриттям для мене. Я знайшов тут безліч цікавих можливостей для волонтерської діяльності і повністю поринув у цю чудову справу.", 
    "Дуже зручний та інтуїтивно зрозумілий сайт для волонтерів. Я легко знайшов проекти, які відповідають моїм інтересам, і вже встиг зробити корисні речі для суспільства.", 
    "Сайт волонтерів допоміг мені розширити кругозір і зустріти чудових людей. Я радий, що став частиною цієї волонтерської комуніти.", 
    "Неймовірно надихаючий досвід! Сайт волонтерів дав мені можливість не лише допомагати іншим, але й саморозвиватися. Рекомендую всім, хто хоче зробити світ кращим!",
    "Сайт волонтерів став моїм надійним партнером у добрих справах. Завдяки цій платформі я знайшов проекти, які ідеально підходять для моїх навичок та захоплень.", 
    "Велике спасибі сайту волонтерів за те, що допомагає нам зробити реальну зміну у світі. Я відчуваю, що моя допомога потрібна і значуща.", 
    "Відмінна команда та чуйна підтримка! Сайт волонтерів завжди готовий відповісти на мої запитання та допомогти знайти відповідні волонтерські можливості.", 
    "Сайт волонтерів - це місце, де можна знайти проекти на будь-який смак. Я вже брав участь у кількох і щоразу отримував величезне задоволення від свого внеску.", 
    "Я вдячний цьому сайту волонтерів за те, що він створив простір, де ми можемо об'єднатися, щоб робити добрі справи разом. Безумовно, це потужний інструмент зміни світу."
]
let random = Math.floor(Math.random() * (10-1+1))
let p = document.getElementById("comentRandom")
p.innerText = coment[random]








let box = 1;
function next(){
    if(box == 1){
        box = 2;
        document.getElementById("first").style.marginLeft = "-100%"
    }
    else if(box == 2){
        box = 3;
        document.getElementById("first").style.marginLeft = "-200%"
    }
}
function back(){
    if(box == 3){
        box = 2;
        document.getElementById("first").style.marginLeft = "-100%"
    }
    else if(box == 2){
        box = 1;
        document.getElementById("first").style.marginLeft = "-0%"
    }
}







function saveToPC(){
    let errorM = 0
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let number = document.getElementById("number")
    let adress = document.getElementById("adress")
    let technick = document.getElementById("objektsTechnick")



    if(name.value.length < 1){
        name.style.border = "1px solid red"
        errorM = 1  
    }
    else{
        name.style.border = "1px solid black"
    }



    if(email.value.length < 1){
        email.style.border = "1px solid red"
        errorM = 1  
    }
    else{
        email.style.border = "1px solid black"
    }



    if(number.value.length < 1){
        number.style.border = "1px solid red"
        errorM = 1  
    }
    else{
        number.style.border = "1px solid black"
    }



    if(adress.value.length < 1){
        adress.style.border = "1px solid red"
        errorM = 1  
    }
    else{
        adress.style.border = "1px solid black"
    }



    if(technick.value.length < 1){
        technick.style.border = "1px solid red"
        errorM = 1  
    }
    else{
        technick.style.border = "1px solid black"
    }






    if(errorM == 1){
        return
    }


 
    Swal.fire({
        title: "Success!",
        icon: "success",
        customClass: {
          title: "titleAlert",
          confirmButton: "buttonAlert"
        }
      });


    let str = `Що помітили:${technick.value} , ім'я:${name.value} , Email адресса:${email.value}, Телефон:${number.value} , Адресса:${adress.value}`
    let blob = new Blob([str], {type: "text/plain"})
    let link = document.createElement("a")
    link.setAttribute("href", URL.createObjectURL(blob))
    link.setAttribute("download", Date.now()+"")
    link.click()

   
}


$("#theme").click(function(){  
    $(".boxDarkTheme, header, .comentBox").css({"background":"#00536D"})   
    $(".item1, .item2, .item3, .textItem, .helpItem").css({"background":"#3B8CA5"}) 
    $("p, h1").css({"color":"white"}) 
    $("#theme2").css({"display":"block"})
    $("#theme").css({"display":"none"})
    $(".sendText").css({"color":"black"})
    $(".togetherText").css({"color":"black"})
    $("#theme2").css({"transition":"transform 1s"})
})

$("#theme2").click(function(){
    $(".boxDarkTheme").css({"background":"white"})   
    $(".item1, .item2, .item3, .comentBox, .textItem, .helpItem").css({"background":"#F5F5F5"}) 
    $("p, h1").css({"color":"black"}) 
    $("#theme2").css({"display":"none"})
    $("#theme").css({"display":"block"})
    $(".footerText, .hotLine").css({"color":"white"}) 
    $("header").css({"background":"#1d90ef"}) 
    $(".helpText").css({"color":"#fff"})
    $(".helpText").css({"font-weight":"bold"})
    $(".blueText").css({"color":"#0f2ae1"})

})

let ua = ["Єднаємось", 
          "Допоможемо нашим захисникам — допожемо Україні",
          "Приєднуйтесь до волонтерства", 
          "Хто ми і в чому наша сила?",
          "Нинішній доленосний період України — не лише боротьба за цілісність і незалежність",
          "Це історичний шанс довести світові, що наша держава заслуговує на щасливе майбуття", 
          "І вкотре нагадують собі й іншим націям: ворога можна перемогти лише гуртом!", 
          "Відгуки про нас:", 
          "Наші герої", 
          "Привид", 
          "Українські льотчики-винищувачі, яких набагато менше ніж російських пілотів такого ж класу, стали легендарними. Почасти й завдяки історії про аса ЗСУ на прізвисько Привид Києва.", 
          "Олександр Мацієвський", 
          "6 березня в мережі з'явилося відео, на якому видно, як росіяни розстрілюють беззбройного українського полоненого. Військовий стоїть у лісі та курить в окопі, потім каже 'Слава Україні', після чого в нього стріляють.", 
          "Терещук Ігор", 
          "Народився і жив у Кривому Розі, поїхав в АТО старшиною. Загинув, боронячи Донецький аеропорт. 24 січня рідні та жителі Кривого Рогу попрощалися з Героєм України, 'кіборгом' Терещуком Ігорем.",
          "Чим можна допомогти нашим захисникам?", 
          "1. Політична підтримка",
          "Важливо підтримувати ЗСУ на політичному рівні, наприклад, шляхом укладання військових союзів",
          "2. Військова допомога", 
          "Це може включати надання військової техніки, зброї, обладнання та розвідувальної техніки", 
          "3. Технічна підтримка", 
          "Надання технічної допомоги в ремонті та обслуговуванні військової техніки", 
          "4. Гуманітарна допомога", 
          "Надання гуманітарної допомоги у вигляді медичного обладнання, одягу та харчування для ЗСУ", 
          "Допоможи захистити країну", 
          "Повідомте про ворога", 
          "Завдяки вашої інформації захисники країни зможуть бачити переміщення ворога в реальному часі", 
          "Ваше ім'я", 
          "E-Mail адреса",
          "Телефон",
          "Адреса",
          "Що саме помітили?"]

let eng = ["Unite",
            "Let's help our defenders — let's help Ukraine",
            "Join volunteering",
            "Who are we and what is our strength?",
            "The current fateful period of Ukraine is not only a struggle for integrity and independence",
            "This is a historic chance to prove to the world that our country deserves a happy future.",
            "And once again they remind themselves and other nations: the enemy can be defeated only as a group!",
            "Reviews about us:",
            "Our heroes",
            "Ghost",
            "Ukrainian fighter pilots, of whom there are far fewer than Russian pilots of the same class, have become legendary. Partly thanks to the story of the ace of the Armed Forces of Ukraine nicknamed the Ghost of Kyiv.",
            "Alexander Matsievskyi",
            "On March 6, a video appeared online showing how Russians shoot an unarmed Ukrainian prisoner. The soldier stands in the forest and smokes in a trench, then says 'Glory to Ukraine', after which he is shot.",
            "Ihor Tereshchuk",
            "He was born and lived in Kryvyi Rih, went to the anti-terrorist operation as a foreman. He died defending the Donetsk airport. On January 24, relatives and residents of Kryvyi Rih bid farewell to the Hero of Ukraine, the 'cyborg' Ihor Tereshchuk.",
            "How can we help our defenders?",
            "1. Political support",
            "It is important to support the Armed Forces at the political level, for example, by concluding military alliances",
            "2. Military aid",
            "This may include the provision of military equipment, weapons, equipment and intelligence equipment",
            "3. Technical support",
            "Providing technical assistance in the repair and maintenance of military equipment",
            "4. Humanitarian aid",
            "Provision of humanitarian aid in the form of medical equipment, clothing and food for the Armed Forces",
            "Help protect the country",
            "Report the enemy",
            "Thanks to your information, the defenders of the country will be able to see the movement of the enemy in real time",
            "Your name",
            "E-mail address",
            "Phone",
            "Address",
            "What exactly did you notice?"]

function english(){
    for(i=0; i<33; i++){
    let p = document.getElementById(`p${i+1}`)
    p.innerText = eng[i]
    }
}
function ukrainian(){
    for(i=0; i<33; i++){
    let p = document.getElementById(`p${i+1}`)
    p.innerText = ua[i]
    }
}




$(function() {
    $.fn.scrollToTop = function() {
     $(this).hide().removeAttr("href");
     if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
     var scrollDiv = $(this);
     $(window).scroll(function() {
      if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
      else $(scrollDiv).fadeIn("slow")
     });
     $(this).click(function() {
         $("html, body").animate({scrollTop: 0}, 1500)
     })
    }
   });
   $(function() {
    $("#go-top").scrollToTop();
   });