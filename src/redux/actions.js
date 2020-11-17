export const LogOn = (newMode) => {
    return {
        type: 'LOGON_MODE',
        value: newMode
    }
}

export const LogOff = (oldMode) => {
    return {
        type: "LOGOFF_MODE",
        value: oldMode
    }
}