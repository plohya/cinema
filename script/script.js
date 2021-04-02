const $select = document.getElementById('select-film');
const $message = document.querySelector('.message');
let counter = 0;
const $rows = document.getElementById('rows');

$select.addEventListener('change', onMovieChange);
document.addEventListener('click', onSeatClick);

fromLocalData();

function onMovieChange(e) {
    let str = '';
    if (e.target.value == 'unselected') {
        $message.textContent = '';
    } else {
        const ind = e.target.selectedIndex;
        movieSetLocal(ind);
    }
    
function movieSetLocal(ind){
    str = `Your film: ${$select[ind].textContent}, cost of ticket: ${$select[ind].value} $`;
    $message.textContent = str; }
    localStorage.setItem('selectedFilmInfo', str);
    localStorage.setItem('selectedFilmIndex', $select.selectedIndex);
}

function onSeatClick(e) {
    if(e.target.classList.contains('seat-row__seat')) {
        e.target.classList.toggle('seat-row__seat-taken');
        if(e.target.classList.contains('seat-row__seat-taken')) {
            counter ++;
        } else {
            counter --;
        }
        // console.log(counter);
    }
    seatsSetLocal();
}

function fromLocalData() {
    $select.selectedIndex = localStorage.getItem('selectedFilmIndex');
    $message.textContent = localStorage.getItem('selectedFilmInfo');
    localStorage.getItem('seats');
}

function seatsSetLocal() {
    const $selectedSeats = document.querySelectorAll('.seat-row .seat-row__seat-taken');
    let arr = [...$selectedSeats];
    let mass = [];
    // console.log(arr);
    arr.forEach(seat => {
        // console.log(arr.indexOf(seat));
        mass += arr.indexOf(seat);
        localStorage.setItem('seats', mass);
    });
}