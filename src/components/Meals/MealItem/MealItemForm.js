import React from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'

export default function MealItemForm(props) {
  return (
    <form className={classes.form}>
        <Input label="Amount" input={{id:'amount_'+props.id,type:'number',min:'1',max:'5',step:'1',defaultValue:'1'}}></Input>
      <button>+ Add</button>
    </form>
  )
}
