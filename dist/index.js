function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $4fa36e821943b400$export$2e2bcd8739ae039);
class $4fa36e821943b400$export$2e2bcd8739ae039 {
    static registerGSAP(gsap) {
        $4fa36e821943b400$export$2e2bcd8739ae039.gsap = gsap;
    }
    constructor(options = {}){
        const { ease: ease = 0.75  } = options;
        this.gsap = $4fa36e821943b400$export$2e2bcd8739ae039.gsap || window.gsap;
        this.element = `<div data-follower class="follower"></div>`;
        this.follower = document.querySelector("[data-follower]") || (()=>{
            document.body.insertAdjacentHTML("beforeend", this.element);
            return document.querySelector("[data-follower]");
        })();
        this.ease = ease;
        this.pos = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        };
        this.mouse = {
            x: this.pos.x,
            y: this.pos.y
        };
        this.xSet = this.gsap.quickSetter(this.follower, "x", "px");
        this.ySet = this.gsap.quickSetter(this.follower, "y", "px");
        this.animation();
        window.addEventListener("pointermove", this.move.bind(this));
        window.addEventListener("pointerover", this.style.bind(this));
    }
    move(e) {
        this.mouse.x = e.x;
        this.mouse.y = e.y;
    }
    style(e) {
        let target = e.target;
        while(target && (!target.dataset || !target.dataset.followerStyle) && target !== document.body)target = target.parentNode;
        if (target) {
            this.follower.className = this.follower.className.replace(/ ?follower--\S*/g, "").trim();
            const followerStyle = target.dataset && target.dataset.followerStyle || "default";
            this.follower.classList.add(`follower--${followerStyle}`);
        }
    }
    animation() {
        this.gsap.set(this.follower, {
            "will-change": "transform"
        });
        this.gsap.ticker.add(()=>{
            const dt = 1.0 - Math.pow(this.ease, this.gsap.ticker.deltaRatio());
            this.pos.x += (this.mouse.x - this.pos.x) * dt;
            this.pos.y += (this.mouse.y - this.pos.y) * dt;
            this.xSet(this.pos.x);
            this.ySet(this.pos.y);
        });
    }
    destroy() {
        window.removeEventListener("pointermove", this.move.bind(this));
        window.removeEventListener("pointerover", this.style.bind(this));
        this.gsap.ticker.remove();
        this.follower.remove();
    }
}


//# sourceMappingURL=index.js.map
