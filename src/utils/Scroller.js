import { AppState } from "../AppState"

const pad = (window.screen.height / 2.5)

class Scroller{
    setScrollParams(element){
        const el = document?.getElementById(`${element}`)
        // @ts-ignore
        const pos = (el?.offsetTop - el?.scrollTop + el?.clientTop)
        const ht = el?.offsetHeight
        return {position:pos, height:ht}
    }

    scrollUpdate(name, param){
        if((param.position - window.scrollY) < (pad - 5) && (param.position + param.height - window.scrollY) > pad){
            AppState.activePage = {dest:name, orig:name, hover:false}
        }
    }
}

export const scroller = new Scroller()