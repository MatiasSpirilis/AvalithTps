let todos_url = "https://jsonplaceholder.typicode.com/todos";
fetch(todos_url)
    .then((Response) => Response.json())
    .then((data) => {
        let body = ``;
        data.forEach((elements) => {
                body += `
                <div class="${elements.completed == true ? 'card' : 'card2'}">
                <img
                    class="img"
                    src="https://www.prensalibre.com/wp-content/uploads/2018/12/eb1911fd-fc8b-42ef-a0e8-43119bd17ac7.jpg?quality=52&w=760&h=755&crop=1"
                    alt="carita"
                />
                <div class="line--one"></div>
                <div class="data">
                    <div class="id">
                        <h3>
                             ${elements.id}
                        </h3>
                    </div>
                    <div class="line--two"></div>
                    <div class="info">
                        <h3 class="title">
                            Name:
                            ${elements.title}
                        </h3>
                        <div class="line--one"></div>
                        <h3 class="userId">
                            UserID:
                            ${elements.userId}
                        </h3>
                        <div class="line--one"></div>
                        <h3 class="completed">
                            Status:
                            ${elements.completed}
                        </h3>
                    </div>
                </div>
            </div>`
        });

        document.getElementById("fetch-petition").innerHTML = body;
    });