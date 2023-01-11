export default function Sound(){
  const florest = new Audio("./Audios/Floresta.wav")
  const rain = new Audio("./Audios/Chuva.wav")
  const coffee_shop = new Audio("./Audios/Cafeteria.wav")
  const fireplace = new Audio("./Audios/Lareira.wav")

  return {florest, rain, coffee_shop, fireplace}
}