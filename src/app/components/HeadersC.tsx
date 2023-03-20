import Link from 'next/link';
import style from './Header.module.css';
const link =[{
    label:"Home",
    route:"/"
  },{
    label:"About",
    route:"/about"
  },{
    label:"Posts",
    route:"/posts"
  }];
  
export default function HeadersC (){
    return(
      <header className={style.header}>
        <nav>
          <ul className={style.navigation}>
            {link.map(({label, route})=>(
              <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
            ))}
          </ul>
        </nav>
      </header>
    )
}