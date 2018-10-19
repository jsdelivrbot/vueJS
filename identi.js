const vue = new Vue({
    el: "#app",
    data() {
      return {
      textInput: ""
      };
    },
    computed : {
      identicon () {
        return jdenticon.toSvg(this.textInput, 200);
      }
    },
    methods: {
      onInput(e) {
        this.textInput = e.target.value;}
    }
  });
