import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

export const FeedbackOptions = (options, onLeaveFeeback) => 
{
    return (
<h2> Please leave feedback</h2>
    options.map(option=>(
   <button
   type='button'
   className={css.button}
   key={option}
   onClick={()=> onLeaveFeedback(option)}>{option}</button>) )

    )
}