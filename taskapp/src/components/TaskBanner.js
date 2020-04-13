import React from 'react';


export const TaskBanner = (props) => (
    <h4 className="bg-primary text-white text-center p-4">
        {props.userName} Task App ({props.taskItems.filter(t => !t.done).length} Task To Do)
    </h4>
)