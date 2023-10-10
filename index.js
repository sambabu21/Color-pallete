const getSchemeBtn = document.getElementById("get=scheme-button") 
const schemeContainer = document.getElementById("scheme-container")

getSchemeBtn.addEventListener("click",function(e){
    e.preventDefault()
    const seedColour=document.getElementById("color-picker").value.slice(1)
    const scheme=document.getElementById("scheme-picker").value.toLowerCase() 
    
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColour}&format=json&mode=${scheme}&count=5`)
         .then(res => res.json())
         .then(data => {   
                let colorHtml=""     
                data.colors.forEach(color =>{
                    colorHtml+=`<div class="image-block">
                                <img src=${color.image.bare} class="image"> 
                                <h3 data-hex=${color.hex.value}>${color.hex.value}</h3>
                        </div>`
                    
                })
                schemeContainer.innerHTML=colorHtml   
         })
    
})

// document.addEventListener("click",function(e){
//     if(e.target.dataset.hex){
//         const hex=e.target.dataset.hex
//         // hex.select()
//         navigator.clipboard.writeText(hex.value)
//     }
// })