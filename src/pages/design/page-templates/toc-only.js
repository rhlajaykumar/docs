import React from 'react'
import { Spirit } from '../../../components/spirit-styles'
import DummyContent from './dummy-post'

import Layout from '../../../components/layouts/default'
import TOC from '../../../components/layouts/partials/toc'
import { Link } from 'gatsby'

const Page = () => (
    <Layout title="Home" headerDividerStyle="shadow">
        <div className={ Spirit.page.xl + `flex flex-start mt12` }>
            <div>
                <section className="flex-auto flex bg-white br4 shadow-1 pa15 pt12">
                    <div className="order-2">
                        <TOC />
                    </div>
                    <div className="order-1">
                        <span className="f7 fw5 measure-wide ttu dib mb1 midlightgrey">Breadcrumbs</span>
                        <h1 className={ Spirit.h1 }>A post with table of contents</h1>
                        <DummyContent />
                    </div>
                </section>
            </div>
        </div>

        <div className={ Spirit.page.xl }>
            <div className="bt b--whitegrey pt6 pb1 mt20">
                <h2 className="ma0 pa0 mb6 fw5">Usage</h2>
                <p>
                    Documentation posts that need only inner page jump / navigation. Example:
                </p>
                <ul className="ma0 ml4 pa0 lh-2-0">
                    <li><Link to="/api/handlebars-themes/" className="blue link">API Docs</Link></li>
                </ul>
            </div>
        </div>
    </Layout>
)

export default Page
