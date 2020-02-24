import React from 'react';
import { storiesOf } from '@storybook/react';

import Select from './Select';

storiesOf('Select', module)

.add('Select Input', () => <Select
    label='Select'
    type='white'
    />)
    .add('Select Medium', () => <Select
    label='Select Medium'
    type='mediumWhite'
    />)
    .add('Select Small', () => <Select
    label='Select Small'
    type='smallWhite'
    />)





    .add('Select Grey', () => <Select
    label='Select Grey'
    type='gray'
    size= 'large'
    />)
    .add('Select Grey Med', () => <Select
    label='Select Grey Med'
    type='mediumGray'
    size= 'medium'
    />)
    .add('Select Grey Small', () => <Select
    label='Select Grey Small'
    type='smallGray'
    size= 'small'
    />)