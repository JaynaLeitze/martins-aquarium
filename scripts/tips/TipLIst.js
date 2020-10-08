import {Tip} from "./Tip.js"

import {useTips} from "./TipDataProvider.js"

export const TipList = () => {
    const contentElement = document.querySelector(".contentContainer__right")
console.log (contentElement)
    const tips = useTips()

    let tipHTMLRepresentations = ""
    for (const tip of tips){
        tipHTMLRepresentations += Tip(tip)
    }

    contentElement.innerHTML += `
    <aside class="tipsList">
    <h3>Care Tips</h3>
    <div class="tip">
    ${tipHTMLRepresentations}
    </div>
    </aside>

    `
}