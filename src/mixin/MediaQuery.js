const mediaQuery = {
    data(){
        return {
            window: {
              width: 0,
              height: 0
            }
        }
    },

    mounted() {
        window.addEventListener("resize", this.handleResize)
        this.handleResize()
      },
      destroyed() {
        window.removeEventListener("resize", this.handleResize)
      },
      computed: {
        smallMobile() {
          return this.window.width <= 412
        },
        largeMobile() {
          return this.window.width > 412 && this.window.width <= 600
        },
        mediumScreenOnly() {
          return this.window.width >= 601 && this.window.width <= 992
        },
        smallScreenAndDown() {
          return this.window.width <= 600
        },
        largeScreenAndUp() {
          return this.window.width >= 993
        },
        mediumScreenAndUp() {
          return this.window.width >= 601
        }
      },
      methods: {
        handleResize() {
          this.window.width = window.innerWidth
          this.window.height = window.innerHeight
        }
    }
}

export default mediaQuery