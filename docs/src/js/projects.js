function ShowCardInfo(name) {
    const InfoCard = document.getElementById(name + "InfoCard");
    const TitleCard = document.getElementById(name + "TitleCard");
    InfoCard.style.display = "flex";
    TitleCard.style.display = "none";
}

function HideCardInfo(name) {
    const InfoCard = document.getElementById(name + "InfoCard");
    const TitleCard = document.getElementById(name + "TitleCard");
    InfoCard.style.display = "none";
    TitleCard.style.display = "flex";
}