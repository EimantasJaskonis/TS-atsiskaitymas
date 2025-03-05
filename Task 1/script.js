"use strict";
/* ------------------------------ TASK 1 -----------------------------------
Priskirkite tipus VISIEMS pateiktiems kintamiesiems, kad kodas veiktų teisingai.
Kur komentare parašyta "error", ta eilutė po tipo priskyrimo kintamąjam turėtų mesti klaidą. Pasitikrinus užkomentuoti visą eilutę, kad leistų sukompiliuoti.
-------------------------------------------------------------------------- */
let one1 = 654;
let two1 = true;
let three1 = true;
let four1 = true;
four1 = '123'; // This is allowed (no error)
let five1 = [1, 2, 3];
five1 = [21, 22, 23, 24];
// five1 = ['a', 'b']; // error
// five1 = [true, true, false]; // error
let six1 = [1, 2, 3, 4];
six1 = ['a', 'b', 'c', 'd'];
// six1 = ['a', 2, 3, 'd']; // error
// six1 = [true, false]; // error
let seven1 = [1, 2, 3, 4];
seven1 = ['a', 'b', 'c', 'd'];
seven1 = ['a', 2, 3, 'd'];
// seven1 = [true, false]; // error
let eight1 = ['hi', 1];
eight1 = ['bye', 2];
// eight1 = [1, 2]; // error
// eight1 = ['a', 'b', 'c']; // error
