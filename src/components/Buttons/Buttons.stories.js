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
    .add('Success', () => <Button 
       label="Success"
       type='success' 
    />)
    .add('Light Success', () => <Button
       label="Light Success"
       type='success'
       light
       />)
    .add('Danger', () => <Button 
       label="Danger" 
       type='danger'
    />)
    .add('Light Danger', () => <Button 
    label="Danger" 
    type='danger'
 />)
    .add('Warning', () => <Button 
       label="Warning" 
       type='warning'
    />)
    .add('Default', () => <Button 
    label="Default" 
    type='default'
 />)
