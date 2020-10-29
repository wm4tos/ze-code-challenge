export const clearAndUpper = (text) => text.replace(/-/, '').toUpperCase()

export const toPascalCase = (text) => text.replace(/(^\w|-\w)/g, clearAndUpper)

export const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
