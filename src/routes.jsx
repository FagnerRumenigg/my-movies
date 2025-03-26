import { Home } from "./views/Home"
import { Movies } from "./views/Movies"
import { RootLayout } from "./views/RootLayout"

export const routes = [
  {
    path: "/",
    Element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/movies",
        element: <Movies/>
      }
    ]
  }
]