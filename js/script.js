document.addEventListener("DOMContentLoaded", function () {

    const eventSelect = document.getElementById("event");
    const participant2 = document.getElementById("participant2");

    const name2 = document.getElementById("name2");
    const email2 = document.getElementById("email2");
    const phone2 = document.getElementById("phone2");

    function updateParticipants() {

        const selectedEvent = eventSelect.value;

        if (
            selectedEvent === "Technical Quiz" ||
            selectedEvent === "Paper Presentation"
        ) {
            participant2.style.display = "block";

            name2.required = true;
            email2.required = true;
            phone2.required = true;

        } else {
            participant2.style.display = "none";

            name2.required = false;
            email2.required = false;
            phone2.required = false;

            name2.value = "";
            email2.value = "";
            phone2.value = "";
        }
    }

    eventSelect.addEventListener("change", updateParticipants);

    updateParticipants();

});
