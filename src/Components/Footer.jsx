import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <div>
        <footer>
            <div class="mdc-layout-grid">
                <div class="mdc-layout-grid__inner">
                    <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6-desktop">
                        <span class="tx-14">Copyright © 2019 <Link to="#"
                            target="_blank">Harry Law Legal</Link>. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    </div>
);

export default Footer;

