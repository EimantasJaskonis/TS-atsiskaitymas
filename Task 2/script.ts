/* ------------------------------ TASK 2 -----------------------------------
Aprašykite type'us, kad kintamieji, kuriems jie priskirti būtų teisingai aprašyti ir visas kodas veiktų teisingai.
Kur komentare parašyta "error", ta eilutė po tipo priskyrimo kintamąjam turėtų mesti klaidą. Pasitikrinus užkomentuoti visą eilutę, kad leistų sukompiliuoti.-------------------------------------------------------------------------- */
type One = {
  vardas: string;
  pavarde: string;
  amzius: number;
  };
  
  let one2: One = {
  vardas: '',
  pavarde: '',
  amzius: 0
  };
  
  type Two = {
  vardas: string;
  pavarde: string;
  amzius: number;
  [key: string]: any; 
  };
  
  let two2: Two = {
  vardas: '',
  pavarde: '',
  amzius: 0
  };
  two2 = {
  vardas: '',
  pavarde: '',
  amzius: 0,
  ugis: 0,
  svoris: 0
  };
  
  type Three = {
  vardas: string;
  pavarde: string;
  lytis: 'vyras' | 'moteris';
  };
  
  let three2: Three = {
  vardas: '',
  pavarde: '',
  lytis: 'vyras'
  };
  three2 = {
  vardas: '',
  pavarde: '',
  lytis: 'moteris'
  };
  // three2 = {
  // vardas: '',
  // pavarde: '',
  // // lytis: 'sraigtasparnis' // error
  // };