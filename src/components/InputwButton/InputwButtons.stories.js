import React from 'react';
import { storiesOf } from '@storybook/react';

import InputwButtons from './InputwButton';


storiesOf('InputwButtons', module)
.add('InputButton', () => <InputwButtons
label='Input with Button'
type='small'
/>)
.add('Large InputButton', () => <InputwButtons
label='Large Input with Button'
type='large2'
/>)