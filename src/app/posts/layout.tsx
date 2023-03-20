export default function LayoutPost ({children} : {
    children: React.ReactNode
  }){
    return(
        <div>
            <h1>Esto es el Layout de los Post</h1>
            {children}
        </div>
    )
}