function add() {
  const ipt = document.getElementById("buzz").value;
  const res = document.getElementById("result");
  if (ipt == 0) {
    const p = document.createElement("p");
    p.innerHTML = "Invalid Number";
    res.append(p);
  } else if (ipt % 3 === 0 && ipt % 5 === 0) {
    const p = document.createElement("p");
    p.innerHTML = "FIZZBUZZ!!";
    res.append(p);
  } else if (ipt % 5 === 0) {
    const p = document.createElement("p");
    p.innerHTML = "Buzz!!";
    res.append(p);
  } else if (ipt % 3 === 0) {
    const p = document.createElement("p");
    p.innerHTML = "Fizz!!";
    res.append(p);
  } else {
    const p = document.createElement("p");
    p.innerHTML = ipt;
    res.append(p);
  }
}
