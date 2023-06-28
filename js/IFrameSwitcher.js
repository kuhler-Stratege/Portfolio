class IFrameSwitcher {

    IFrame = document.getElementsByTagName("iframe")[0];

    constructor() {
        const linkList = Array.from(document.getElementsByTagName("a")).filter(e => e.target === "");
        for(const link of linkList) {
            link.onclick = (e) => {
                e.preventDefault();
                this.IFrame.src = e.target.dataset["href"];
            };
            link.dataset["href"] = link.href;
            link.removeAttribute("href");
        }
    }

}
new IFrameSwitcher();