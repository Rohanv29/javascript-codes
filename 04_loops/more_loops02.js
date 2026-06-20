const myobj={
    js:'javascript',
    cpp:'C++',
    rb:'ruby'
}
for (const key in myobj) {
    console.log(`${key} shortcut is for ${myobj[key]}`);
} 