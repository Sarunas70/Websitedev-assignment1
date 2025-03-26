const BasketList = [];
const Pricelist = [
    { "ticket": "Regular Ticket", "Price": "50$" },
    { "ticket": "VIP Ticket", "Price": "150$" },
    { "ticket": "Camping Ticket", "Price": "80$" },
    { "ticket": "Influencer Ticket", "Price": "30$" },
];

const displayBasket = () => {
    const tableBody = document.querySelector("#ticketTable tbody");
    tableBody.innerHTML = ""; 

    if (BasketList.length > 0) {
        BasketList.forEach(ticket => {
            const ticketInfo = Pricelist.find(item => item.ticket === ticket.ticket);
            const ticketPrice = ticketInfo ? ticketInfo.Price : "N/A";

            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${ticket.days}</td>
                <td>${ticket.ticket}</td>
                <td>${ticketPrice}</td>
            `;
            tableBody.appendChild(row);
        });
    }
};


const addTicket = (evt) => {
    evt.preventDefault();

    const days = document.getElementById('days').value;
    const ticket = document.getElementById('ticket').value;

   
    BasketList.push({ days, ticket });

    
    displayBasket();

    
    evt.target.reset();
};


const removeLastTicket = () => {
    if (BasketList.length > 0) {
        BasketList.pop();  
        displayBasket();  
    }
};
const Total = () => {
    const total = BasketList.reduce((sum, ticket) => {
        const ticketInfo = Pricelist.find(item => item.ticket === ticket.ticket);
        const price = parseFloat(ticketInfo.Price.replace('$', ''));
        return sum + price;
    }, 0);

    let totalBox = document.getElementById('totalBox');
    if (!totalBox) {
        totalBox = document.createElement('T');
        totalBox.id = 'totalBox';
        document.body.appendChild(totalBox);
    }
    totalBox.textContent = `Total: $${total.toFixed(2)}`;

    const cardInfoContainer = document.getElementById('cardInfoContainer');
    cardInfoContainer.style.display = 'block';
  
};


const form = document.getElementById("ticketForm");
form.addEventListener("submit", addTicket);

const removeTicketBtn = document.getElementById("removeTicketBtn");
removeTicketBtn.addEventListener("click", removeLastTicket);

const TotalBtn = document.getElementById("TotalBtn");
TotalBtn.addEventListener("click", Total)


displayBasket();