class $cf838c15c8b009ba$export$2e2bcd8739ae039 {
    static registerGSAP(gsap) {
        $cf838c15c8b009ba$export$2e2bcd8739ae039.gsap = gsap;
    }
    constructor(options = {}){
        const { ease: ease = 0.75  } = options;
        this.gsap = $cf838c15c8b009ba$export$2e2bcd8739ae039.gsap || window.gsap;
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
        if (target && target.dataset && target.dataset.followerStyle) {
            this.follower.className = this.follower.className.replace(/ ?follower--\S*/g, "").trim();
            const followerStyle = target.dataset.followerStyle || "default";
            this.follower.classList.add(`follower--${followerStyle}`);
        }
    }
    animation() {
        this.gsap.set(this.follower, {
            xPercent: -50,
            yPercent: -50,
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


export {$cf838c15c8b009ba$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=index.module.js.map
