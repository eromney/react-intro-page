/* This will be the parent that we are going to use for all of our components */

import './index.scss';
import Sidebar from '../Sidebar';
import {Outlet} from 'react-router-dom';

/* All components will be functional components, so they will all follow
 * this pattern:
 * const name = () => { }
 */

const Layout = () => {
    return (
        // This will be the main wrapper of our application
        <div className="App"> 
            <Sidebar />
            <div className="page">
                {/* This is an outlet where we will render all the pages in our application */}
                <span className="tags top-tags">&lt;body&gt;</span>

                <Outlet />

                <span className="tags bottom-tags">
                    &lt;/body&gt;
                    <br/>
                    <span className='bottom-tag-html'>&lt;/html&gt;</span>
                </span>
            </div>
        </div>
    )
}

export default Layout;