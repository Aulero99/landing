import { AppState } from "../AppState"

let modal = null

function closeModalOnOutClick(e){
    // NOTE if modal is closed it will not be visible on the dom
    // so return
    if(!modal.checkVisibility()){ return }
    const rect = modal.getBoundingClientRect();
    if(e.x < rect.left || e.x > (rect.width + rect.left)){
        modals.close('resumeModal')
    }else if(e.y < rect.top || e.y > (rect.height + rect.top)){
        modals.close('resumeModal')
    }
    window.removeEventListener('click', closeModalOnOutClick)
    return
}

class Modals {
    close(id){
        modal = document.getElementById(`${id}`)
        AppState.modalOpen = false
        setTimeout(()=>{
            modal.close()
        }, "275")
    }
    open(id){
        modal = document.getElementById(`${id}`)
        setTimeout(()=>{
          modal.showModal()
          AppState.modalOpen = true
          }, "1")
        window.addEventListener('click', closeModalOnOutClick)
    }
}
export const modals = new Modals()