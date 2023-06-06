import { Home } from "../components/Home"
export const houses = [
    {
        id: 1,
        pathname:"/",
        name: "Webbrain Villa",
        price: 123456,
        details: { bed: 1, bath: 2, sq: 234 },
        element:<Home/>,
      },
    {
      id: 2,
      name: "Webbrain Villa",
      price: 123456,
      details: { bed: 1, bath: 2, sq: 234 },
      element: <h1>Webbrain Villa</h1>,
      pathname:"Webbrain_Villa"
    },
    {
      id: 3,
      name: "Webbrain Cottage",
      price: 123456,
      details: { bed: 1, bath: 2, sq: 234 },
      element: <h1>Webbrain Cottage</h1>,
      pathname:"Webbrain_Cottage"
    },
]