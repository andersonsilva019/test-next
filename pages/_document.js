import Document, { Html ,Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

    render(){
        return(
            <Html lang="pt">
                <Head>
                    <meta name="description" content="SEO nextjs react"/>
                    <meta name="keywords" content="next react seo"/>
                    <meta name="author" content="Anderson silva"/>
                </Head>

                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument;