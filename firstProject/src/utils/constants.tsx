import { MenuType } from "./type";

export const menuData: MenuType=
{
    main:[
        {id: "Explore", hasSubmenu: true},
        {id: "Saved", hasSubmenu: true},
        {id: "Shop", hasSubmenu: true}
    ],
    Explore: [
        {id:"Nearby Trails", hasSubmenu: false},
        {id:"Community", hasSubmenu: false},
        {id: "National Parks Guide", hasSubmenu: false}
    ],
    Saved: [
        {id : "Create a List", hasSubmenu: false},
        {id: "Create a Map", hasSubmenu: false}
    ],
    Shop: [
        {id: "All Trails+",hasSubmenu: false},
        {id: "Give All Trails+", hasSubmenu: false}
    ]
}