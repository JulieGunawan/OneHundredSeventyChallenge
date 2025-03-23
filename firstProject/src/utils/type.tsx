export type MenuItemType = {
    id: string,
    hasSubmenu: boolean
}

export type MenuType = {
    [key: string]: MenuItemType[]
}