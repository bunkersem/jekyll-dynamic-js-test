---
---

function border() {

}
var members = {
{% for member in site.data.members %}
    '{{ member.name }}': '{{ member.github }}',
{% endfor %}
}

for (const key in members) {
    if (members.hasOwnProperty(key)) {
        const element = members[key];
        alert(key + ': ' + element);
    }
}

