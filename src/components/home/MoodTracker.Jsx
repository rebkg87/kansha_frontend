import React, { useState } from 'react'

import veryHappyIcon from '/assets/images/icons/moods/grinning-face-with-squinting-eyes.svg'
import happyIcon from '/assets/images/icons/moods/grinning-face.svg'
import neutralIcon from '/assets/images/icons/moods/confused-face.svg'
import sadIcon from '/assets/images/icons/moods/disappointed-face.svg'
import angryIcon from '/assets/images/icons/moods/angry-face.svg'

const moods = [
    { id: 1, icon: veryHappyIcon },
    { id: 2, icon: happyIcon },
    { id: 3, icon: neutralIcon },
    { id: 4, icon: sadIcon },
    { id: 5, icon: angryIcon }
]

const MoodTracker = () => {

    const [] = useState(null)
    return (
        <div>MoodTracker</div>
    )
}

export default MoodTracker