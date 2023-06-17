import Layout from "./layout";

export default function withLayout(Component){
    return props=> (
        <Layout>
            <Component {...props}/>
        </Layout>
    )
}