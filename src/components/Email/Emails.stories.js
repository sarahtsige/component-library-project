import React from 'react';
import { storiesOf } from '@storybook/react';

import Email from './Email';

storiesOf('Email', module)
    .add('Email', () => <Email
        label="email"
    />)
    .add('Email Medium', () => <Email
        label="Email Medium"
        type='mediumEmail'
    />)
    .add('Email Large', () => <Email
    label="Email Large"
    type='largeEmail'
/>)