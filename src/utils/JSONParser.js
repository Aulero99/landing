class Parser{
    px(string){
        const splt = string.split('')
        let output = ''
        for(let i = 0; i < splt.length; i++){
            if (splt[i] == 'p' && splt[i + 1] == 'x'){
                return output
            }
            output += splt[i]
        }
        return output
    }
    rem(string){
        const splt = string.split('')
        let output = ''
        for(let i = 0; i < splt.length; i++){
            if (splt[i] == 'r' && splt[i + 1] == 'e' && splt[i + 2] == 'm'){
                return output
            }
            output += splt[i]
        }
        return output
    }
    vh(string){
        const splt = string.split('')
        let output = ''
        for(let i = 0; i < splt.length; i++){
            if (splt[i] == 'v' && splt[i + 1] == 'h'){
                return output
            }
            output += splt[i]
        }
        return output
    }
    vw(string){
        const splt = string.split('')
        let output = ''
        for(let i = 0; i < splt.length; i++){
            if (splt[i] == 'v' && splt[i + 1] == 'w'){
                return output
            }
            output += splt[i]
        }
        return output
    }
    pct(string){
        const splt = string.split('')
        let output = ''
        for(let i = 0; i < splt.length; i++){
            if (splt[i] == '%'){
                return output
            }
            output += splt[i]
        }
        return output
    }
    ms(string){
        const splt = string.split('')
        let output = ''
        for(let i = 0; i < splt.length; i++){
            if (splt[i] == 'm' && splt[i + 1] == 's'){
                return output
            }
            output += splt[i]
        }
        return output
    }
    parseAll(vars){
        let output = {}
        Object.entries(vars).forEach(entry => {
            const [key, value] = entry;
            output[`${key}`] = this.extensionRemover(value)
          });
          return output
    }
    extensionRemover(value){
        const noPX = this.px(value)
        const noREM = this.rem(noPX)
        const noVH = this.rem(noREM)
        const noVW = this.rem(noVH)
        const noPCT = this.pct(noVW)
        return noPCT
    }
}

export const parser = new Parser()