
// import { Col, Image, Row } from 'react-bootstrap';
import './TableDropdown.css';
import { Link } from 'react-router-dom';
import React from "react";
// import shortid from "https://cdn.skypack.dev/shortid@2.2.16";
import { Icon } from '@iconify/react';

const TableDropdown = () => {


    return (

        <>


            <ul className='tabledropdown'>
                <li><Link><Icon icon="material-symbols:download" /></Link></li>
                <li><Link><Icon icon="mdi-light:share" /></Link></li>
                <li><Link><Icon icon="fluent:folder-open-20-regular" /></Link></li>
                <li><Link><Icon icon="lucide:folder-input" /></Link></li>
                <li><Link><Icon icon="solar:trash-bin-trash-linear" /></Link></li>
                <li><Link><Icon icon="solar:trash-bin-trash-linear" /></Link></li>
            </ul>
        </>
    );
}

export default TableDropdown;
