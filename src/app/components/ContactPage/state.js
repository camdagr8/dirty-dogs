/**
 ContactPage Initial State
*/
import React, { Fragment } from 'react';

const ContactInfo = () => {
    return (
        <Fragment>
            274 Marconi Blvd.<br />Columbus, Ohio 43215<br />
            614.538.0095
        </Fragment>
    );
};

export default {
    hero: null,
    features: {
        layout: [
            'col-xs-12 col-md-6 col-lg-5',
            'col-xs-12 col-md-6 col-lg-7'
        ],
        items: [
            {
                title: 'Contact Us',
                backgroundImage: 'url(/assets/images/feature-02.png)',
                caption: <ContactInfo />
            },
        ]
    },
};
