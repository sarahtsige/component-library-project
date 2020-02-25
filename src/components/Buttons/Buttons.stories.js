import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';


storiesOf('Button', module)
    .add('Primary', () => <Button
        label="Do Something"
        type='primary'
    />)
    .add('Light Primary', () => <Button
        label="Do Something"
        type="lightPrimary"
        light
    />)
    .add('Outline Primary', () => <Button
    label="Do Something"
    type="outlinePrimary"
    outline
/>)
    .add('Success', () => <Button 
       label="Do Something"
       type='success' 
    />)
    .add('Light Success', () => <Button
       label="Do Something"
       type='lightSuccess'
       light
       />)
    .add('Outline Success', () => <Button
       label="Do Something"
       type='outlineSuccess'
       outline
       />)
    .add('Danger', () => <Button 
       label="Do Something" 
       type='danger'
    />)
    .add('Light Danger', () => <Button 
        label="Do Something"
        type='lightDanger'
        light=''
    />)
    .add('Outline Danger', () => <Button 
        label="Do Something"
        type='outlineDanger'
        outline=''
    />) 
    .add('Warning', () => <Button 
       label="Do Something"
       type='warning'
    />)
    .add('Light Warning', () => <Button 
        label="Do Something"
        type='lightWarning'
        light=''
    />)
    .add('Outline Warning', () => <Button 
        label="Do Something" 
        type='outlineWarning'
        outline=''
    />)
    .add('Default', () => <Button 
        label="Do Something" 
        type='default'
    />)
    .add('Light Default', () => <Button 
        label="Do Something"
        type='defaultLight'
        light=''
    />)
    .add('Outline Default', () => <Button 
        label="Do Something" 
        type='defaultOutline'
        outline=''
/>)
    .add('Large Primary', () => <Button
    label="Do Something"
    type='primary'
    large
    />)
    .add('Large Light Primary', () => <Button
    label="Do Something"
    type="lightPrimary"
    large
    />)
    .add('Large Outline Primary', () => <Button
    label="Do Something"
    type="outlinePrimary"
    large
    />)
    .add('Large Success', () => <Button 
    label="Do Something"
    type='success'
    lage 
    />)
    .add('Large Light Success', () => <Button
    label="Do Something"
    type='lightSuccess'
    large
    />)
    .add('Large Outline Success', () => <Button
    label="Do Something"
    type='outlineSuccess'
    large
    />)
    .add('Large Danger', () => <Button 
    label="Do Something"
    type='danger'
    large
    />)
    .add('Large Light Danger', () => <Button 
    label="Do Something"
    type='lightDanger'
    large
    />)
    .add('Large Outline Danger', () => <Button 
    label="Do Something"
    type='outlineDanger'
    large
    />)

    .add('Large Warning', () => <Button 
    label="Do Something"
    type='warning'
    large
    />)
    .add('Large Light Warning', () => <Button 
    label="Do Something"
    type='lightWarning'
    large
    />)
    .add('Large Outline Warning', () => <Button 
    label="Do Something"
    type='outlineWarning'
    large
    />)
    .add('Large Default', () => <Button 
    label="Do Something"
    large
    />)
    .add('Large Light Default', () => <Button 
    label="Do Something"
    type='defaultLight'
    large
    />)
    .add('Large Outline Default', () => <Button 
    label="Do Something" 
    type='defaultOutline'
    large
    />)
   .add('Add to Cart', () => <Button
   label="Add to Cart"
   type="lightPrimary"
   image='cart'
/>)
    .add('Add to Favorites', () => <Button
    label="Add to Favorties"
    type="lightPrimary"
    image='heart'
    />)


    .add('Cart', () => <Button
    label=""
    type="lightPrimary"
    icon='cart'

 />)
     .add('Favorites', () => <Button
     label=""
     type="lightPrimary"
     icon='heart'
     />)


