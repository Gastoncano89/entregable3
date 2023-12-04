export const getRandomNumber = (min,max) => {
  const amplitud = Math.abs(max - min); //abs devuelve siempre un positivo
  const randomAmplitud = Math.round(Math.random() * amplitud) ; //esto debuelve un numero de  0 a la amplitud
  
  return min + randomAmplitud;
}
