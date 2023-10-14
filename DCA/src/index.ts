
import { getcatsimages, getcatsphrase } from "./data/datafetch";
import { Attributescard, Cards } from "./components/card/card"
import { apptypes } from "./types/types";

class AppContainer extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }

    async connectedCallback(){
        const textcat = await getcatsphrase()
        const imgcat = await getcatsimages()
        this.render(textcat,imgcat)   
    }
    render(textcat: any, imgcat:any){
        const cardcontainer = this.ownerDocument.createElement("my-cards") as Cards
        cardcontainer.setAttribute(Attributescard.fact,textcat.fact)
        cardcontainer.setAttribute(Attributescard.img,imgcat)
        this.shadowRoot?.appendChild(cardcontainer)
        const btn = this.ownerDocument.createElement("button")

    }  
}   


customElements.define('app-container', AppContainer)