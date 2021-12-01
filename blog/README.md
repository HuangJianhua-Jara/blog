---
home: true
heroText: Jara's blog
tagline: 谢谢你，在这个世界的角落，找到了我
# heroImage: /stars.jpg
isShowTitleInHome: false

bgImageStyle: { height: "700px" }
# heroImageStyle: {
#   width: '100%',
#   # maxHeight: '500px',
#   display: block,
#   margin: '2rem auto 1.5rem',
#   boxShadow: '0 5px 18px rgba(0,0,0,0.5)'
# }
---

<style>
.typing-words{
    display: block;
    margin: 12rem auto 0;
    bottom: 45px;
    width: 400px;
    height: 300px;
    font-size: 34px;
    text-align: center;
    position: absolute;
    left: 50%;
    bottom: 50%;
    margin-left: -10px;
}
.anchor-down {
  display: block;
  margin: 12rem auto 0;
  bottom: 45px;
  width: 20px;
  height: 20px;
  font-size: 34px;
  text-align: center;
  animation: bounce-in 5s 3s infinite;
  position: absolute;
  left: 50%;
  bottom: 30%;
  margin-left: -10px;
  cursor: pointer;
}
@-webkit-keyframes bounce-in{
  0%{transform:translateY(0)}
  20%{transform:translateY(0)}
  50%{transform:translateY(-20px)}
  80%{transform:translateY(0)}
  to{transform:translateY(0)}
}
.anchor-down::before {
  content: "";
  width: 20px;
  height: 20px;
  display: block;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: rotate(135deg);
  position: absolute;
  bottom: 10px;
}
.anchor-down::after {
  content: "";
  width: 20px;
  height: 20px;
  display: block;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: rotate(135deg);
}
</style>

<script>


export default {

  mounted () {
    const ifJanchor = document.getElementById("JanchorDown"); 
    ifJanchor && ifJanchor.parentNode.removeChild(ifJanchor);
    let a = document.createElement('a');
    a.id = 'JanchorDown';
    a.className = 'anchor-down';
    document.getElementsByClassName('hero')[0].append(a);
    let targetA = document.getElementById("JanchorDown");
    targetA.addEventListener('click', e => { // 添加点击事件
      this.scrollFn();
    });
    
    class TextScramble {
        constructor(el) {
            this.el = el;
            this.chars = "!<>-_/[]{}—=+*^?#________";
            this.update = this.update.bind(this);
        }
        setText(newText) {
            const oldText = this.el.innerText;
            const length = Math.max(oldText.length, newText.length);
            const promise = new Promise((resolve) => (this.resolve = resolve));
            this.queue = [];
            for (let i = 0; i < length; i++) {
                const from = oldText[i] || "";
                const to = newText[i] || "";
                const start = Math.floor(Math.random() * 40);
                const end = start + Math.floor(Math.random() * 40);
                this.queue.push({ from, to, start, end });
            }
            cancelAnimationFrame(this.frameRequest);
            this.frame = 0;
            this.update();
            return promise;
        }
        update() {
            let output = "";
            let complete = 0;
            for (let i = 0, n = this.queue.length; i < n; i++) {
                let { from, to, start, end, char } = this.queue[i];
                if (this.frame >= end) {
                    complete++;
                    output += to;
                } else if (this.frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        char = this.randomChar();
                        this.queue[i].char = char;
                    }
                    output += `<span class="dud">${char}</span>`;
                } else {
                    output += from;
                }
            }
            this.el.innerHTML = output;
            if (complete === this.queue.length) {
                this.resolve();
            } else {
                this.frameRequest = requestAnimationFrame(this.update);
                this.frame++;
            }
        }
        randomChar() {
            return this.chars[Math.floor(Math.random() * this.chars.length)];
        }
    }

    // 使用方法
    let el = document.querySelector("#descText");
    console.log("el: ", el);
    if (!el) {
        const timer = setInterval(() => {
            if (el) {
                init();
                timer && clearInterval(timer);
            }
            el = document.querySelector("#descText");
        }, 100);
    } else {
        init();
    }

    function init() {
        const fx = new TextScramble(el);
        const phrases = [
            "我是一名前端",
            "爱吃小熊饼干",
            "上班只为下班",
            "工资刚够早餐",
            "每晚都要加班",
            "只求线上平安",
            "头发快要掉完",
            "前端真的好难",
            "只是无名前端",
            "写代码的憨憨"
        ];
        // fx.setText('写代码的憨憨')
        let counter = 0;
        const next = () => {
            fx.setText(phrases[counter]).then(() => {
                setTimeout(next, 2000);
            });
            counter = (counter + 1) % phrases.length;
        };
        next();
    }
  },

  methods: {
    scrollFn() {
      const windowH = document.getElementsByClassName('hero')[0].clientHeight; // 获取窗口高度
      document.documentElement.scrollTop = windowH; // 滚动条滚动到指定位置
    }
  }

}

</script>
