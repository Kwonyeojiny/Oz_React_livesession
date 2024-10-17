import { useState } from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function Contents () {
  const [contents, setContent] = useState([
    {
      id:1,
      content: '프론트 공부중'
    },
    {
      id:2,
      content: '권여진 화이팅'
    },
    {
      id:3,
      content: '리액트 마스터'
    }
  ])

    return (
      <>
        <ul>
          {contents.map((e, index)=>(
            <li key={index}>
              <NavLink to={`${e.id}?content=${e.content}`} >컨텐츠 {e.id}</NavLink>
            </li>
          ))}
        </ul>
        {/* 아래에서 NavLink부분 내용 출력한다 */}
        <Outlet/> 
      </>
    )
  }
  