
export const addZero= (date:number) =>{
  return date < 10 ? '0' + date : date
}

export const parseDate = () =>{
  const date = new Date()
  return `${addZero(date.getDate())}.${addZero(date.getMonth()+1)}.${date.getFullYear()}`
}