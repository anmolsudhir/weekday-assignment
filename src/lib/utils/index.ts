export function capitalizeFirstLetter(str: string | null | undefined): string | null {
  if (!str) return null

  const strArray: string[] = str.split(' ')
  const resArray: string[] = []
  strArray.forEach((strElem: string) => {
    resArray.push(strElem[0].toUpperCase() + strElem.slice(1))
  })

  return resArray.join(' ')
}
