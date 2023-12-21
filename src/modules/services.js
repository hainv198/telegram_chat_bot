const { Markup } = require ("telegraf");

const services = [
    {
        id: 1,
        name: "Tìm xe",
        command: "search"
    },
    {
        id: 2,
        name: "Tìm khách hàng",
        command: "another_command"
    }
];

function getServicesById(id) {
    return services.find(service => service.id === id)
}

function getServicesKeyboard() {
    return Markup.inlineKeyboard(
        services.map(service => Markup.button.callback(
            service.name, "select_${service.id}"
        ))
    );
}

module.exports = {
    getServicesById,
    getServicesKeyboard,
  };