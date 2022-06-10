import {ChangeEvent, MouseEvent} from 'react'


/*const callback = () => {
    alert('Hey')
}

window.setTimeout(callback, 1000)*/     // Ctrl+Shift+F искать по всем файлам

export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
    }

    const saveUser = () => {
        alert('user have been saved')
    }

    const onNameChanged = () => {
        console.log("name changed")
    }

    const onAgeChanged = (event:ChangeEvent<HTMLInputElement>) => {
        console.log("age changed " + event.currentTarget.value)
    }

    const focusLostHandler = () => {
        console.log("focus lost")
    }


    //чтобы div попадали в фокус им задаётся tabIndex
    return (
        <div>
            <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Dimych</textarea>
            <input onChange={onAgeChanged} type={"number"}/>
            {/* <button onClick={deleteUser}>delete</button>
            <button onClick={saveUser}>save</button>*/}

            <button name={"delete"} onClick={deleteUser}>x</button>
            <button name={"save"} onClick={deleteUser}>x</button>
        </div>
    )
}