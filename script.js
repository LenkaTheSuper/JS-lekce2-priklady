// PŘÍKLADY - LEKCE 2
document.body.innerHTML += "<h2> PŘÍKLADY - LEKCE 2 </h2>"

    // úkol 1 - HÁZENÍ KOSTKOU
    document.body.innerHTML += "<h3>úkol 1 - HÁZENÍ KOSTKOU</h3>"

    let cislo = Math.floor(Math.random()*6)+1
    document.body.innerHTML += `<p>Hod kostkou je: ${cislo}</p>`


    // úkol 2 - PŘÍJEM DIVADLA (ne délka filmu)
    document.body.innerHTML += "<h3>úkol 2 - PŘÍJEM DIVADLA (ne délka filmu)</h3>"

    let listek = 12
    let pocetLidi = 174
    let pocetPredstaveni = 15
    let prijem = listek*pocetLidi*pocetPredstaveni
    document.body.innerHTML += `<p>S plným vstupným je příjem divadla ${prijem} EUR za měsíc </p>`

    let student = 0.65*listek
    let prijemStudenti = Math.round(0.40*174*student)
    let prijemOstatni = Math.round(0.60*174*listek)

    let prijemFinal = prijemStudenti + prijemOstatni
    document.body.innerHTML += `<p>Pokud je 40% návštěvníků divadla student, příjem divadla je ${prijemFinal} EUR za měsíc </p>`