import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from './Form';

storiesOf('Form', module)
    .add('Email', () => <Form
        label="Email"
        type='email'
    />)
    .add('Email Medium', () => <Form
        label="Email Medium"
        type='email'
        size='emailMedium'
    />)
    .add('Email Large', () => <Form
    label="Email Large"
    type='email'
    size='emailLarge'
/>)






.add('Select Input', () => <Form
    label='Select'
    type='select'
    size= 'large'
    />)
    .add('Select Medium', () => <Form
    label='Select Medium'
    type='select'
    size= 'large'
    />)
    .add('Select Small', () => <Form
    label='Select Small'
    type='select'
    size= 'small'
    />)


    .add('Select Grey', () => <Form
    label='Select Grey'
    type='select'
    size= 'large'
    />)
    .add('Select Grey Med', () => <Form
    label='Select Grey Med'
    type='select'
    size= 'medium'
    />)
    .add('Select Grey Small', () => <Form
    label='Select Grey Small'
    type='select'
    size= 'small'
    />)






    .add('InputButton', () => <Form
    label='Input with Button'
    type='inputButton'
    size= 'small'
    />)
    .add('Large InputButton', () => <Form
    label='Large Input with Button'
    type='inputButton'
    size= 'large'
    />)




    .add('Checkbox', () => <Form
    label='Black Checkbox'
    type='checkbox'
    size= ''
    />)
    .add('Checkbox', () => <Form
    label='Black Checkbox'
    type='checkbox'
    size= ''
    />)
    .add('Checkbox', () => <Form
    label='Blue Checkbox'
    type='checkbox'
    size= ''
    />)
    .add('Checkbox', () => <Form
    label='Blue Checked Checkbox'
    type='checkbox'
    size= ''
    />)
  
