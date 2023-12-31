let but = document.querySelector("#P")
but.addEventListener("click", (e) => {



  var token = "6907068275:AAHajtrtMi-hrziv3XBKd2LvfInnfNcN8AA"
  var chatid = -4071018603
  var mytext = `Shedis kaci moemzade !!!!`

  var url = ` https://api.telegram.org/bot6907068275:AAHajtrtMi-hrziv3XBKd2LvfInnfNcN8AA/sendMessage?chat_id=-4071018603&text=${mytext}`


  async function logdata() {
    const response = await fetch(url);
    const data = await response.json();
  }
  


  logdata()
  logdata()
  logdata()





})