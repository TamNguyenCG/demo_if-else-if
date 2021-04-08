let id = prompt('Your Username: ')
if (id == 'Admin' || id == 'admin') {
    let pwd = prompt('Password: ')
    if (pwd == 'TheMaster') {
        alert('Welcome')
    } else if (pwd == null) {
        alert("Cancel")
    }else{
        alert('Wrong Password')
    }
}
else
    if (id == null) {
        alert('Cancel')
    }else{
        alert("I don't know you")
}