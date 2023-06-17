import '@/styles/globals.css'

export default function App({Component, props}){
    return(
        <>
        <Component {...props}/>
        </>
    )
}