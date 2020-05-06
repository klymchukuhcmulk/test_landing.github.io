<template>
  <div id="app">
    <div class="backChange" id="main"></div>
    <div class="main-container">
      <div class="content">
        <div class="bonus-text">
          <h1>300%</h1>
          <h3>WELCOME BONUS</h3>
        </div>
        <div class="bonus-div">
          <div class="bonus-code-div">
            <p id="code">{{ code }}</p>
          </div>
          <div class="bonus-copy-div" @click="copyCode">
            <p>{{ action }}</p>
          </div>
        </div>
        <button class="play-btn">PLAY NOW</button>
      </div>
      <div class="witcher-div">
        <div></div>
      </div>
      <div class="sparks-front"></div>
      <div class="sparks-back"></div>
      <div class="logo">
        <img src="./assets/logo.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      code: 'WITCHER',
      action: 'COPY CODE'
    }
  },
  mounted () {
    this.changeBack()
  },
  methods: {
    copyCode () {
      this.$copyText(this.code)
        .then(() => {
          const mainAction = this.action
          const dely = 500
          const codeEl = document.getElementById('code')
          const codeColor = codeEl.style.color
          codeEl.style.color = 'gold'
          this.action = 'COPYED'
          setTimeout(() => {
            this.action = mainAction
            codeEl.style.color = codeColor
          }, dely)
        })
        .catch((err) => {
          const mainAction = this.action
          const dely = 3000
          this.action = 'NOT COPYED'
          console.log(err.message)
          setTimeout(() => {
            this.action = mainAction
          }, dely)
        })
    },
    changeBack () {
      const main = document.getElementById('main')
      setInterval(() => {
        if (main.classList.contains('backDarker')) {
          main.classList.remove('backDarker')
        } else {
          main.classList.add('backDarker')
        }
      }, 2000)
    }
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: cambria;
  src: url('./assets/Cambira/cambriab.ttf');
  font-style: normal;
  font-weight: bold;
}
$mainColor: rgb(227, 71, 54);
@mixin itemBack ($position, $width, $marginLeft, $backImg, $zi) {
  z-index: $zi;
  position: $position;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  max-width: $width;
  margin-left: $marginLeft;
  margin-top: 1px;
  background-image: $backImg;
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
}
.backChange {
  transition: background 2s;
  position: absolute;
  z-index: 9;
  background: rgba(255,0,0,0.07);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
}
.backDarker {
  background: rgba(0,0,0,0.2);
}
.main-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /*width: 100%;*/
  background-image: url("./assets/bg.png");
  background-position: top;
  background-size: cover;
  overflow: hidden;
  .content {
    color: white;
    position: absolute;
    top: 172px;
    right: 181px;
    z-index: 50;
    text-align: center;
    .bonus-text {
      h1 {
        margin: 0;
        font-family: cambria;
        font-size: 157px;
      }
      h3 {
        margin: 0;
        font-family: cambria;
        font-size: 50px;
        margin-top: -16px;
      }
    }
    .bonus-div {
      border: 1px dashed rgb(70, 70, 70);
      width: 350px;
      height: 62px;
      margin: 34px auto;
      border-radius: 39px;
      display: flex;
      text-align: center;
      box-sizing: border-box;
      background: rgba(0, 0, 0, 0.5);
      div {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        p {
          font-family: sans-serif;
          margin: 0;
        }
      }
      .bonus-code-div {
        width: 57.45%;
        p {
          font-size: 30px;
          letter-spacing: 3px;
          color: $mainColor;
        }
      }
      .bonus-copy-div {
        width: 42.55%;
        border-left: 1px solid rgb(70, 70, 70);
        p {
          font-size: 14px;
          letter-spacing: 1px;
        }
      }
    }
    .bonus-div:hover {
      text-shadow: 0px 0px 20px #CE5937;
      .bonus-code-div {
        color: red;
      }
      .bonus-copy-div {
        color: #cf8283;
      }
    }
    .play-btn {
      background: $mainColor;
      border: none;
      outline: none;
      border-radius: 40px;
      color: white;
      font-family: sans-serif;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 2px;
      margin-top: 10px;
      margin-left: 4px;
      padding: 22px 91px;
    }
    .play-btn:hover {
      background: rgb(181, 7, 12);
    }
  }
  .witcher-div {
    @include itemBack(absolute, 1300px, -17%, url("./assets/witcher.png"), 20);
    margin-top: 1%;
    background-size: 775px;
    div {
      position: absolute;
      top: 50px;
      bottom: 0;
      width: 40%;
      margin: 0 auto;
      /*background-color: #CE5937;*/
      &:hover {
        background-color: rgb(158, 4, 8);
      }
    }
  }
  .sparks-front {
    @include itemBack(absolute, 1375px, -12.32%, url("./assets/sparks_front.png"), 30);
    margin-top: 1%;
    background-size: 1031px;
  }
  .sparks-back {
    @include itemBack(absolute, 1300px, -7%, url("./assets/sparks_back.png"), 10);
    background-size: 1080px;
    background-position: bottom;
  }
  .logo {
    img {
      z-index: 40;
      position: absolute;
      width: 11.11%;
      min-width: 130px;
      bottom: 0;
      left: 0;
      margin: 29px 53px;
    }
  }
}
// -------tablet
@media only screen and (max-width: 1300px) {
  .main-container {
    .content {
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      padding-top: 235px;
      background: rgba(0,0,0,0.3);
      transition: background-color 1.5s;
    }
  }
}
@media only screen and (min-height: 1000px) {
  .main-container {
    .witcher-div {
      margin-top: 0;
      background-size: 1075px;
    }
  }
}
// -------mobile
@media only screen and (max-width: 500px) {
  .main-container {
    .content {
      bottom: 0;
      left: 0;
      right: 0;
      .bonus-text {
        h1 {
          font-size: 120px;
        }
        h3 {
          font-size: 35px;
        }
      }
      .bonus-div {
        width: 60%;
        .bonus-code-div {
          p {
            font-size: 20px;
          }
        }
      }
    }
    .logo {
      img {
        width: 11.11%;
        min-width: 130px;
        margin: 10px;
      }
    }
  }
}
@media only screen and (max-width: 400px) {
  .main-container {
    .content {
      padding-top: 135px;
      .bonus-text {
        h1 {
          font-size: 100px;
        }
        h3 {
          font-size: 32px;
        }
      }
      .bonus-div {
        width: 90%;
      }
    }
    .witcher-div {
      margin-top: 0%;
      background-position: bottom;
      background-size: 625px;
      div {
        position: absolute;
        top: 50px;
        bottom: 0;
        width: 40%;
        margin: 0 auto;
        /*background-color: #CE5937;*/
        &:hover {
          background-color: rgb(158, 4, 8);
        }
      }
    }
  }
}
</style>
