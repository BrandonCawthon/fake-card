window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("refresh").addEventListener('click', () => {
        const result = document.getElementById("result");

        fetch(`https://api.denode.in/dummy/credit-card`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': 'M2Y2YjFiNmNhOGFhZjE3YzcwMjhmNDAxNjI2NGRjNjk5MDUwZWZmZjAyOTBkMTE0NTA5ODk4Y2I1NTU0NWRkMg'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                const number = document.getElementById('number')
                const expire = document.getElementById('expire')
                const cvv = document.getElementById('cvv')
                const title = document.getElementById('title')
                const titleString = `Your ${data['card_type']} Card`

                const formattedNumber = data['card_number'].replace(/(\d{4})/g, '$1 ').trim()

                number.textContent = formattedNumber
                expire.textContent = data.expire
                cvv.textContent = data.cvv
                title.textContent = titleString
            });
    });
});