import { AppState } from "../AppState"

const pad = (window.screen.height / 2.5)
// const scrnTop = AppState.scrollPosition
// const scrnBtm = AppState.scrollPosition + window.screen.height

class ScrollService{
    getSectionsScrollParams(idName){
        const el = document?.getElementById(`${idName}`)
        // @ts-ignore
        const pos = (el?.offsetTop - el?.scrollTop + el?.clientTop)
        const ht = el?.offsetHeight
        return {position:pos, height:ht}
    }

    sectionScrollUpdate(idName){
        const param = this.getSectionsScrollParams(idName)
        // @ts-ignore
        if((param.position - window.scrollY) < (pad - 5) && (param?.position + param?.height - window?.scrollY) > pad){
            AppState.activePage = {dest:idName, orig:idName, hover:false}
        }
    }

    inboundsCheck(idName){
        const el = this.getSectionsScrollParams(idName)
        const elTop = el.position
        // @ts-ignore
        const elBtm = el.position + el?.height
        const scrnTop = AppState.scrollPosition
        const scrnBtm = AppState.scrollPosition + window.screen.height
        if(scrnBtm > elTop && scrnTop < elBtm){
            return true
        }
    }

    percentBasedOnTop(idName){
        const el = this.getSectionsScrollParams(idName)
        const height = el.height
        const elTop = el.position
        const scrnTop = AppState.scrollPosition
        // @ts-ignore
        let pctTop = (scrnTop-elTop) / height

        return ((pctTop))

    }

}

export const scrollService = new ScrollService()