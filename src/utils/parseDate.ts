
const addZeroDate = (date:number) =>{
  return date < 10 ? '0' + date : date
}

export const parseDate = () =>{
  const date = new Date()
  return `${addZeroDate(date.getDate())}.${addZeroDate(date.getMonth()+1)}.${date.getFullYear()}`
}