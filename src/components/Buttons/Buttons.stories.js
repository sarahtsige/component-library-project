import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';


storiesOf('Button', module)
    .add('Primary', () => <Button
        label="Primary"
        type='primary'
    />)
    .add('Light Primary', () => <Button
        label="Light Primary Button"
        type="light-primary"
        light
    />)
    .add('Outline Primary', () => <Button
    label="Outline Primary Button"
    type="outline-primary"
    outline
/>)
    .add('Success', () => <Button 
       label="Success"
       type='success' 
    />)
    .add('Light Success', () => <Button
       label="Light Success"
       type='success'
       light
       />)
    .add('Outline Success', () => <Button
       label="Outline Success"
       type='success'
       outline
       />)
    .add('Danger', () => <Button 
       label="Danger" 
       type='danger'
    />)
    .add('Light Danger', () => <Button 
        label="Danger" 
        type='danger'
        light
    />)
    .add('Outline Danger', () => <Button 
        label="Outline Danger" 
        type='outline-danger'
        outline
    />)
    .add('Warning', () => <Button 
       label="Warning" 
       type='warning'
    />)
    .add('Light Warning', () => <Button 
        label="Light Warning" 
        type='warning'
        light
    />)
    .add('Outline Warning', () => <Button 
        label="Outline Warning" 
        type='warning'
        outline
    />)
    .add('Default', () => <Button 
        label="Default" 
        type='default'
    />)
    .add('Light Default', () => <Button 
        label="Light Default" 
        type='default'
        light
    />)
    .add('Outline Default', () => <Button 
        label="Outline Default" 
        type='default'
        outline
/>)


