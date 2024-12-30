import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "SS - Online Courses & Education Nextjs Template"}
                </title>
            </Head>
        </>
    )
}

export default PageHead