


GitHubCalendar(".calendar", "sumitraghavwork");

    // or enable responsive functionality:
    GitHubCalendar(".calendar", "sumitraghavwork", { responsive: true });

    // Use a proxy
    GitHubCalendar(".calendar", "your-username", {
       proxy (username) {
         return fetch(`https://your-proxy.com/github?user=${sumitraghavwork}`)
       }
    }).then(r => r.text())