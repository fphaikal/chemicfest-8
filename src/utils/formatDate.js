export default function formatDate(dateInput) {
    const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
  
    var dt = new Date(dateInput);
  
    var longDate = dt.getDate() + " " + months[dt.getMonth()] + " " + dt.getFullYear();
  
    return longDate;
}
