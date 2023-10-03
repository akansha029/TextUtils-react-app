import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.alert &&
        <>
        {/* ye us case me jab alert null hai toh && if else jese work krega or bad vala code run krne lgega */}
         <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
               <strong>{capitalize(props.alert.type)}</strong>:
               {props.alert.msg}
               {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
               {/* hide the close button beacuse of run settime out fuction */}
            </div>
        </>
    )
}

export default Alert
