async function loadUser(){

    const response =
        await fetch("https://api.github.com/users/mojombo");

    const user = await response.json();

    const card =
        document.getElementById("card");

    card.innerHTML = `

        <div class="card">

            <div class="avatar">

                <img src="${user.avatar_url}">

            </div>

            <div class="info">

                <div class="row">
                    <span class="title">Name:</span>
                    <span>${user.name}</span>
                </div>

                <div class="row">
                    <span class="title">Login:</span>
                    <span>${user.login}</span>
                </div>

                <div class="row">
                    <span class="title">GitHub:</span>

                    <a href="${user.html_url}" target="_blank">
                        ${user.html_url}
                    </a>
                </div>

                <div class="row">
                    <span class="title">Blog:</span>

                    <span>${user.blog || "No blog"}</span>
                </div>

                <div class="row">
                    <span class="title">City:</span>

                    <span>${user.location}</span>
                </div>

                <div class="row">
                    <span class="title">Email:</span>

                    <span>${user.email || "No email"}</span>
                </div>

                <div class="row">
                    <span class="title">Followers:</span>

                    <span>${user.followers}</span>
                </div>

                <div class="row">
                    <span class="title">Following:</span>

                    <span>${user.following}</span>
                </div>

            </div>

        </div>

    `;
}

loadUser();