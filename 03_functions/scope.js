// function one(){
//     const username="hitesh";
//     function two(){
//         const website="youtube";
//         console.log(username);
//     }
//     console.log(website);
//     two();
// }
// one();
function one() {
    const username = "hitesh";

    function two() {
        const website = "youtube";
        console.log(username); // ✅
    }

    two();
}

one();