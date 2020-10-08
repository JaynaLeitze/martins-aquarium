/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module
export const FishList = () => {
const contentElement =document.querySelector(".contentContainer__left")

contentElement.innerHTML +=`
<section class="FishList">
<h3>Aquarium Fish</h3>
<div class="fishContainer">
    Placeholder
    </div> 
    </section>
    `
}