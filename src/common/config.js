
const theDate = new Date();
const year = theDate.getFullYear();
const first = 'Mitchell';
const last = 'Gohman';

export const config = {
    author: {
        name: {
            first: first,
            last: last,
            preferred: 'Mitch',
        },
        email: 'Me@MitchellGohman.com',
        phone: '‪(626) 509-9620‬',
        tel: '16265099620',
    },
    header: {
        fullname: `${first} ${last}`,
        title: `Senior Software Development Engineer`,
    },
    footer: {
        tagline: `Designed and Developed by Christina &amp; Mitchell ${last}`,
        copyright: `${ year }. All rights reserved.`,
    },
}