import { useRoutes } from 'react-router-dom'
import routes from './routes/route'


const App = () => {
  // 获得路由表
  const routeView = useRoutes(routes)
  

  return (
            routeView
  )
}

export default App

