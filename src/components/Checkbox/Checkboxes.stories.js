import React from 'react';
import { storiesOf } from '@storybook/react';

import Checkbox from './Checkbox';

storiesOf('Checkbox', module)
.add('Black Checkbox', () => <Checkbox
    label='Black Checkbox'
    type='black'
    />)
    .add('Blue Checkbox', () => <Checkbox
    label='Blue Checkbox'
    type='blue'
    />)
  
