import PromptSync from "prompt-sync"


const prompt = PromptSync()
const Dragon = {
   hp: 2000, // joni
   defence: 120,  // himoya
   power: 150,  // kuch
   weapon: 0     // qurol
}

const Hero = {
   hp: 700,  // joni
   defence: 100,  // himoya
   power: 120,  // kuch
   weapon: 100,  // qurol
   shield: 100,  // qalqon
}
let count: number = 1;

let config = `
 Помощь
 -------- Игра -----------
 ?      ->  список комманд
 h      ->  данные героя
 d      ->  данные Дракона

 -------- Герой -----------
 1      ->  Атаковать
 2      ->  Защита
 3      ->  Пропустить ход
 q   ->  Убежать
 ----------- ${count} ------------
 Герой: ${Hero.hp}
 Дракон: ${Dragon.hp}
  `;
let started: string = prompt('Ты готов? (y/n) (д/н):  ');

if (started === 'y' || started === 'д') {
   console.log(config);
   while (true) {
      let rand =  Math.floor(Math.random() * 2) + 1;
      // let rand2 =  Math.floor(Math.random() * 1) + 1;
      count++
      // console.log(   
      //    ` Герой: ${Hero.hp}
      //    Дракон: ${Dragon.hp}`
      //    );

      let pr = prompt(`>>>>> Твой ход: `)
      if(pr){
         // Oyin birinchi bo'lim
      if (pr === 'h') {
         console.log(`Детали Героя:
            hp:       ${Hero.hp}
            defence:  ${Hero.defence}
            power:    ${Hero.power}
            weapon:   ${Hero.weapon}
            shield:   ${Hero.shield}
            ----------- ${count} ------------
            ` )
         // break;
      } else if (pr === 'd') {
         console.log(` Детали Дракона:
            hp:      ${Dragon.hp}
            defence: ${Dragon.defence}
            power:   ${Dragon.power}
            weapon:  ${Dragon.weapon}
            ----------- ${count} ------------
          `);
      }
      else if (pr === '?') {
         console.log(config);
      }
      else if (pr === 'q') {
         break;
      }
// Birinchi bolim end

// Ikkinchi bolim

      if(pr === '1' && rand === 2){
         // zarar = ajdar_kuchi + ajdar_quroli - qahramon_himoyasi
         Dragon.hp = Dragon.hp - (Hero.power + Hero.weapon - Dragon.defence)
         console.log(`
         [✓] Упешная атака. 100 урона!
         >>>>>> Дракон:
         Уснул..
         ----------- ${count} ------------
         Герой: ${Hero.hp }
         Дракон: ${Dragon.hp}
         `
         );
         
        if(Dragon.hp === 0){
            console.log(`Ты победил дракона! :)`);
            break;
         }
      } 
       if(pr === '1' && rand === 1){
         Hero.hp = Hero.hp - (Dragon.power + Dragon.weapon - Hero.defence)
         console.log(
            `
         [✓] Упешная атака. 100 урона!
         >>>>>> Дракон:
         Атакует!
         Ты получил 50 урона!
         ----------- ${count} ------------
         Герой: ${Hero.hp }
         Дракон: ${Dragon.hp}
            `
         );
         if(Hero.hp === 0){
            console.log(`Ты мертв! :(`);
            break;
         }
      } else if(pr === '1' && rand === 3){
         console.log(
            `
         >>>>> Твой ход: 1
         [✕] Промахнулся
         >>>>>> Дракон:
         Уснул..
         ----------- ${count} ------------
         Герой: ${Hero.hp}
         Дракон: ${Dragon.hp}
            `
         );
      }

// Ikkinchi bolim end

// Uchinchi bolim start
      if(pr === '2' && rand === 1){
         console.log(
         `
         [Защита]
         >>>>>> Дракон:
         Атакует!
         Ты получил 0 урона!
         ----------- ${count} ------------
         Герой: ${Hero.hp}
         Дракон: ${Dragon.hp}
         `);
      } 

      if(pr === '2' && rand === 2 ){
         console.log(
         `
      [Защита]
      >>>>>> Дракон:
      Уснул..
      ----------- ${count} ------------
      Герой: ${Hero.hp}
      Дракон: ${Dragon.hp}
         `);
      }

// Uchinchi bolim end

// Tortinchi bolim start
      if(pr === '3' && rand === 1){
         console.log(
         `
            >>>>>> Дракон:
            Уснул..
            ----------- ${count} ------------
            Герой: ${Hero.hp}
            Дракон: ${Dragon.hp}
         `);
      }

      if(pr == '3' &&  rand === 2 || rand === 3){
         Hero.hp = Hero.hp - (Dragon.power + Dragon.weapon - Hero.defence)
      console.log(`
         >>>>>> Дракон:
         Атакует!
         Ты получил 50 урона!
         ----------- ${count} ------------
         Герой: ${Hero.hp}
         Дракон: ${Dragon.hp}
      `)
      if(Hero.hp === 0){
         console.log(`Ты мертв! :(`);
         break;
      }
      }
      } else{
         console.log(
         `
         Команда не найдена. Пожалуйста напиши '?' для просмотра комманд.
         ----------- ${count} ------------
         Герой: ${Hero.hp}
         Дракон: ${Dragon.hp}
         `
         );
      }

   }

} else if (started === 'n' || started === 'н') {
   console.log(`Yaxshi qo'rqoq :)`);
} else {
   console.log('Xayr..');
}

