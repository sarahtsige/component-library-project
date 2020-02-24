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
        type="lightPrimary"
        light
    />)
    .add('Outline Primary', () => <Button
    label="Outline Primary Button"
    type="outlinePrimary"
    outline
/>)
    .add('Success', () => <Button 
       label="Success"
       type='success' 
    />)
    .add('Light Success', () => <Button
       label="Light Success"
       type='lightSuccess'
       light
       />)
    .add('Outline Success', () => <Button
       label="Outline Success"
       type='outlineSuccess'
       outline
       />)
    .add('Danger', () => <Button 
       label="Danger" 
       type='danger'
    />)
    .add('Light Danger', () => <Button 
        label="Danger" 
        type='lightDanger'
        light=''
    />)
    .add('Outline Danger', () => <Button 
        label="Outline Danger" 
        type='outlineDanger'
        outline=''
    />) 
    .add('Warning', () => <Button 
       label="Warning" 
       type='warning'
    />)
    .add('Light Warning', () => <Button 
        label="Light Warning" 
        type='lightWarning'
        light=''
    />)
    .add('Outline Warning', () => <Button 
        label="Outline Warning" 
        type='outlineWarning'
        outline=''
    />)
    .add('Default', () => <Button 
        label="Default" 
        type='default'
    />)
    .add('Light Default', () => <Button 
        label="Light Default" 
        type='defaultLight'
        light=''
    />)
    .add('Outline Default', () => <Button 
        label="Outline Default" 
        type='defaultOutline'
        outline=''
/>)
    .add('Large Primary', () => <Button
    label="Large Primary"
    type='primary'
    large
    />)
    .add('Large Light Primary', () => <Button
    label="Large Light Primary Button"
    type="lightPrimary"
    large
    />)
    .add('Large Outline Primary', () => <Button
    label="Large Outline Primary Button"
    type="outlinePrimary"
    large
    />)
    .add('Large Success', () => <Button 
    label="Large Success"
    type='success'
    lage 
    />)
    .add('Large Light Success', () => <Button
    label="Large Light Success"
    type='lightSuccess'
    large
    />)
    .add('Large Outline Success', () => <Button
    label="Large Outline Success"
    type='outlineSuccess'
    large
    />)
    .add('Large Danger', () => <Button 
    label="Large Danger" 
    type='danger'
    large
    />)
    .add('Large Light Danger', () => <Button 
    label="Large Light Danger" 
    type='lightDanger'
    large
    />)
    .add('Large Outline Danger', () => <Button 
    label="Large Outline Danger" 
    type='outlineDanger'
    large
    />)

    .add('Large Warning', () => <Button 
    label="Large Warning" 
    type='warning'
    large
    />)
    .add('Large Light Warning', () => <Button 
    label="Large Light Warning" 
    type='lightWarning'
    large
    />)
    .add('Large Outline Warning', () => <Button 
    label="Large Outline Warning" 
    type='outlineWarning'
    large
    />)
    .add('Large Default', () => <Button 
    label="Large Default" 
    large
    />)
    .add('Large Light Default', () => <Button 
    label="Large Light Default" 
    type='defaultLight'
    large
    />)
    .add('Large Outline Default', () => <Button 
    label="Large Outline Default" 
    type='defaultOutline'
    large
    />)
   .add('Add to Cart', () => <Button
   label="Add to Cart"
   type="lightPrimary"
   icon=''
/>)
    .add('Add to Favorites', () => <Button
    label="Add to Favorties"
    type="lightPrimary"
    icon=''
    />)



