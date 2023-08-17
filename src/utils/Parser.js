import { logger } from "./Logger"


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
}

export const parser = new Parser()