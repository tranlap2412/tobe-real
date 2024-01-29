export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
})

export const upperCaseFirstChar = (str:string) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
