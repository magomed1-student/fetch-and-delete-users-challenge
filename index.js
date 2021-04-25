window.addEventListener("DOMContentLoaded", () => {
    const list = document.querySelector(".list")
    fetch("https://reqres.in/api/users")
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < data.data.length; i++) {
                const line = document.createElement("tr")
                const columnName = document.createElement("td")
                const columnFamiliya = document.createElement("td")
                const columnMail = document.createElement("td")
                const columnAvatar = document.createElement("img")
                const dlt = document.createElement("button")

                columnName.textContent = data.data[i].first_name;
                columnFamiliya.textContent = data.data[i].last_name;
                columnMail.textContent = data.data[i].email;
                columnAvatar.src = data.data[i].avatar;
                dlt.textContent = "x"
                columnAvatar.classList.add("avatar")

                line.prepend(columnName)
                line.append(columnFamiliya)
                line.append(columnMail)
                line.append(columnAvatar)
                line.append(dlt)
                list.prepend(line)
                dlt.addEventListener("click", (ev) => {
                    deleteUser(i, ev)
                })
            }
        })
        .catch(() => {
            const errorDiv = document.createElement("div")
            errorDiv.classList.add("error")
            errorDiv.textContent = "ОШИБКА"
            list.replaceWith(errorDiv)
        })

})

const deleteUser = (id, node) => {
    fetch(`https://reqres.in/api/users/${id}`, {
        method: "DELETE"
    })
        .then(res => {
            console.log(res.status)
        })
    node.target.parentNode.remove()
}

