const diffOfTwoDates = (date1: Date, date2: Date) => {
    return Math.abs(date1.getTime() - date2.getTime()) / 3600 / 1000 
}
//test
const date1 = new Date("December 1, 2022 09:00:00" )
const date2 = new Date("December 1, 2022 07:35:00")
console.log(diffOfTwoDates(date1, date2))

const hexToRGB = (hex: string) => {

}

function pickTextColorBasedOnBgColorSimple(hex) {
    const red = parseInt(color.substring(0, 2), 16); 
    const green = parseInt(color.substring(2, 4), 16); 
    const blue = parseInt(color.substring(4, 6), 16); 
    if ((red*0.299 + green*0.587 + blue*0.114) > 186){
        use 
    }
  }
