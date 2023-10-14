export enum Attributescard {
    "fact"= "fact",
    "img" = "img"
}

export class Cards extends HTMLElement{
    fact?:string 
    img?:string

    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }

    static get observedAttributes(){
        const attrs: Record<Attributescard, null> ={
            fact: null,
            img:null
        } 
        

        return Object.keys(attrs)
    }
    connectedCallback(){
        this.render()
    }

    attributeChangedCallback(propName: Attributescard, oldValue: undefined| string, newValue: undefined | string){
        switch(propName){
            default:
            this[propName] = newValue
            break 
        }
        this.render()
    }
    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <secction>
            <h1>Cat Fact</h1>
            <img src="${this.img}">
            <p>${this.fact}</p>
            </secction>
            `
        }
        
    }



}

customElements.define("my-cards",Cards)