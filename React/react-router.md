# React Router

react 路由学习。

## 安装

yarn add react-router-dom@6

## 路由模式

- BrowserRouter（recommend）
- HashRouter
- HistoryRouter
- MemoryRouter
- NativeRouter
- Router
- StaticRouter

### BrowserRouter

BrowserRouter 使用干净的 URL 将当前位置存储在浏览器地址栏中，并使用浏览器内置的历史堆栈导航。

```jsx
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

ReactDom.render(
  <BrowserRouter>
    <App></App>  
  </BrowserRouter>,
  root
);
```

### HashRouter

HashRouter 用于 web 浏览器中，当 URl 由于某些原因不应该（或不能）发送到服务器时使用。这可能发生在一些共享托管场景中，其中你不能完全控制服务器。在这些情况下，HashRouter 使得将当前位置存储在当前 URL 的散列部分成为可能，因此它永远不会发送到服务器。

```jsx
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { HashRouter } from 'react-router-dom';

ReactDom.render(  
  <HashRouter>    
    <App></App>    
  </HashRouter>,  
  root
);
```

## 组件

- Link
- Route
- Routes
- Navigate
- NavLink
- Outlet

### Link

Link 是一个元素，它允许用户通过单击或者点击页面导航到另一个界面。在 react-router-dom 中，Link 呈现了一个可以访问的元素，该元素带有一个真实的 href，指向它所链接的资源。这意味着右键单击 Link 就能实现跳转。你也可以使用 < Link reloadDocument> 来跳过客户端路由，并让浏览器正常处理转换（如同 < a href>）。

```jsx
import * as React from 'react';
import { Link } from 'react-router-dom';

function UserPage() {
  return (
    <>
      <h1>demo</h1>
      <Link to="/login">to login</Link>
    </>
  )
}
```

一个 Link 的 to 值如果不以 / 开头，那么它是相对于父路由解析的，类似文件管理。

- user：同级下的 user
- ./user：同 user
- ../user：上级目录下的 user
- ../../user：...
- ...

### Routes，Route

Routes 和 Route 是基于当前位置在 React Router 中渲染的主要方法。你可以把 Route 想象成 if 语句。如果它的路径匹配现在的 URL，它呈现它的元素。< Route caseSensitive> 中使用了 caseSensitive 可以区分大小写，默认是 false，不区分大小写。每次当位置发生变化时，Routes 会遍历它的所有子元素 Route 以找到最佳匹配，并呈现该 UI 分支。Route 元素可以嵌套，表示嵌套的 UI，也对应嵌套的 URL 路径。

```jsx
<Routes>
  <Route path="/" element={<Dashboard />}>
    <Route path="messages" element={<DashboardMessages/>}/>
    <Route path="tasks" element={<DashboardTasks/>}
  </Route>
  <Route path="about" element={<AboutPage />} />
</Routes>
```

### Outlet

应该在父路由元素中使用 Outlet 来渲染子路由元素。这允许在渲染子路由时显示嵌套 UI。如果父路由完全匹配，它会渲染一个子索引路由，如果没有索引路由不渲染。

```jsx
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  )
}

function App() {
  return (
    <Routes path="/" element={<Dashboard/>}>
    <Route
       path="messages"
       element={<DashboardMessages/>}
    />
    <Route path="tasks" element={<DashboardTasks/>} />
    </Routes>
  )
}
```

### NavLink

NavLink 是一个特殊的 Link，它知道自己是否“激活”，常用在导航菜单或者是面包屑上。

```jsx
<NavLink 
  to="tasks"
  className={({isActive})=>
              isActive ? activeClassName: undefined
            }
/>
```

NavLink 的 end 属性加上时，只有当完全匹配，才会触发激活，子路由不会激活。

### Navigate

Navigate 展示的时候会进行路由跳转。

```jsx
<button onClick={() => setFlag(true)}>setFlag:true</button>
{flag && <Navigate to="/login">login</Navigate>}
```



## Hook

### useHref

> declare function useHref(to: To): string;

useHref钩子返回一个URL，该URL可以用来链接到指定的位置，即使是在React Router之外。

### useInRouterContext

> declare function useInRouterContext(): boolean;

判断是否在 React Router 上下文中。

### useLinkClickHandler

### useLinkPressHandler

### useLocation

> ```typescript
> declare function useLocation(): Location;
> 
> interface Location extends Path {
>   state: unknown;
>   key: Key;
> }
> ```

这个钩子返回当前的 location 对象，如果你想在当前 location 变化时执行一些副作用（useEffect），那么这会非常有用。

```jsx
import * as React from 'react';
import { useLocation } from 'react-router-dom';

function App(){
  let location = useLocation();
  React.useEffect(()=>{
    // ...
  }, [location]);
  return <></>
}
```

### useMatch

> ```typescript
> declare function useMatch<ParamKey extends string = string>(
>   pattern: PathPattern | string
> ): PathMatch<ParamKey> | null;
> ```

返回给定路径上路由相对于当前位置的匹配数据。

### useNavigate

> ```typescript
> declare function useNavigate(): NavigateFunction;
> 
> interface NavigateFunction {
>   (
>     to: To,
>     options?: { replace?: boolean; state?: any }
>   ): void;
>   (delta: number): void;
> }
> ```

useNavigate hook 返回一个函数，可以让你实现编程式导航。如果使用 replace: true，导航将替换历史堆栈中的当前条目，而不是添加一个新条目。

```jsx
import { useNavigate } from 'react-router-dom';

function SignupForm(){
  let navigate = useNavigate();
  
  async function handleSubmit(event){
    event.preventDefault();
    await submitForm(event.target);
    navigate('../success', { replace: true });
  }
    
  return <form onSubmit={handleSubmit}></form>
}
```

navigate 函数可以传入

- string，类似 Link 的 to
- number，-1 表示返回上一级等

### useNavigationType

> ```typescript
> declare function useNavigationType(): NavigationType;
> 
> type NavigationType = "POP" | "PUSH" | "REPLACE";
> ```

这个钩子返回当前导航的类型，或者用户是如何到达当前界面的（通过弹出，推入，或者替换操作历史栈堆）。

### useOutlet

> declare function useOutlet(): React.ReactElement | null;

返回该路由层次结构的子路由的元素。Outlet 内部使用这个钩子来呈现子路由。

### useOutletContext

> ```typescript
> declare function useOutletContext<
>   Context = unknown
> >(): Context;
> ```

通常父路由管理状态或其他你想要与子路由共享的值。如果你愿意，你可以创建自己的上下文提供程序，但这种情况太常见了，它内置在 Outlet 中。

```jsx
function Parent(){
  const [count, setCount] = React.useState(0);
  return <Outlet context={[count, setCount]} />;
}

function Child(){
  const [count, setCount] = useOutletContext();
  const increment = () => setCount(c => c + 1);
  return <button onClick={increment}>{count}</button>
}
```

### useParams

> ```typescript
> declare function useParams<
>   K extends string = string
> >(): Readonly<Params<K>>;
> ```

useParams 钩子从与 Route 路径匹配的当前 URL 返回一个动态参数的键值对对象。子路由从父路由继承所有参数。

```jsx
import * as React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

function ProfilePage(){
  let { userId } = useParams();
  // ...
}

function App(){
  return (
    <Routes>
      <Route path="users">
        <Route path=":userId" element={<ProfilePage />} />
        <Route path="me" element={...} />
      </Route>  
    </Routes>
  )
}
```

### useResolvePath

> declare function useResolvedPath(to: To): Path;

这个钩子将给定 to 值中位置的路径名和当前位置的路径名进行解析。

这在从相对值构建连接时很有用。例如，查看 NavLink 的源代码，它在内部调用 useResolvedPath 来解析被链接的页面的完整路径名。

### useRoutes

> ```typescript
> declare function useRoutes(
>   routes: RouteObject[],
>   location?: Partial<Location> | string;
> ): React.ReactElement | null;
> ```

useRoutes 钩子在功能上相当于 Routes，但它使用 JavaScript 对象而不是 Route 原始来定义路由。这些对象具有与普通 Route 元素相同的属性，但它们不需要 JSX。

useRoutes 的返回值要么是一个有效的 React 元素，你可以用它来呈现路由树，要么是 null，如果没有匹配的话。

```jsx
import * as React from 'react';
import { useRoutes } from 'react-router-dom';

function App(){
  let element = useRoutes([
    {
      path: '/',
      element: <Dashboard />,
      children: [
        {
          path: 'message',
          element: <DashboarMessages />,
        },
        {
          path: 'tasks',
          element: <DashboardTasks />,
        }
      ]
    },
    { path: 'team', element: <AboutPage />}
  ])
  
  return element;
}
```

### useSearchParams



## Utilities

- createRoutesFormChildren
- createSearchParams
- generatePath
- Location
- matchPath
- matchRoutes
- renderMatches
- resolvePath