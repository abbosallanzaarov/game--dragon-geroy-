"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const Dragon = {
    hp: 2000,
    defence: 120,
    power: 150,
    weapon: 0 // qurol
};
const Hero = {
    hp: 700,
    defence: 100,
    power: 120,
    weapon: 100,
    shield: 100, // qalqon
};
let count = 1;
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
///boshlash
function start() {
    let start = prompt('tayyormisiz {x/y} {d/n}:  ');
    if (start === 'x' || start === 'd') {
        console.log(config);
        count++;
    }
}
function prom() {
    while (true) {
        let pley = prompt('Твой ход:  ');
        if (pley === 'h') {
            console.log(` geroy
            hp:        ${Hero.hp}
            defense:   ${Hero.defence}
            power:     ${Hero.power}
            weapon:    ${Hero.weapon}
            shield:    ${Hero.shield}
            `);
        }
        else if (pley === 'd') {
            console.log(` Ajdarа:
            hp:      ${Dragon.hp}
            defence: ${Dragon.defence}
            power:   ${Dragon.power}
            weapon:  ${Dragon.weapon}
            ----------- ${count} ------------
            `);
        }
        else if (pley === '?') {
            console.log(config);
        }
        else if (pley === 'q') {
            break;
        }
        let q = rand();
        function e() {
            if (pley === '1' && q === 2) {
                Dragon.hp - 100;
                console.log(`
                ----------- ${count} ------------
                Герой: ${Hero.hp}
                Дракон: ${Dragon.hp}
                `);
            }
            else if (pley === '1' && q === 1) {
                Hero.hp = Hero.hp - (Dragon.power + Dragon.weapon - Hero.defence);
                console.log(`
                [✓] Упешная атака. 100 урона!
                >>>>>> Дракон:
                Атакует!
                Ты получил 50 урона!
                ----------- ${count} ------------
                Герой: ${Hero.hp}
                Дракон: ${Dragon.hp}
                    `);
            }
            else if (pley === '1' && q === 3) {
                console.log(`
                ----------- ${count} ------------
                Герой: ${Hero.hp}
                Дракон: ${Dragon.hp}
                `);
            }
        }
        if (Hero.hp === 0) {
            break;
        }
        if (pley === '1' && q === 2) {
            Dragon.hp = Dragon.hp - (Hero.power + Hero.weapon - Dragon.defence);
            console.log(`
        ----------- ${count} ------------
        Герой: ${Hero.hp}
        Дракон: ${Dragon.hp}
        `);
        }
        else if (Dragon.hp === 0) {
            console.log('ajdar tamon');
            break;
        }
        else if (pley === '1' && q === 1) {
            Hero.hp = Hero.hp - (Dragon.power + Dragon.weapon - Hero.defence);
            console.log(`
            ----------- ${count} ------------
            Герой: ${Hero.hp}
            Дракон: ${Dragon.hp}`);
        }
        else if (Hero.hp === 0) {
            console.log('siz yoq siz');
            break;
        }
        else if (pley === '1' && q === 3) {
            console.log(`
            ----------- ${count} ------------
            Герой: ${Hero.hp}
            Дракон: ${Dragon.hp} `);
        }
        if (pley === '2' && q === 1) {
            console.log(`
                ----------- ${count} ------------
                Герой: ${Hero.hp}
                Дракон: ${Dragon.hp}
                `);
        }
        else if (pley === '2' && q === 2) {
            console.log(`
            ----------- ${count} ------------
            Герой: ${Hero.hp}
            Дракон: ${Dragon.hp}
            `);
        }
        if (pley === '3' && q === 1) {
            console.log(`
                >>>>>> Дракон:
                Уснул..
                ----------- ${count} ------------
                Герой: ${Hero.hp}
                Дракон: ${Dragon.hp}
                `);
        }
        else if (pley == '3' && q === 2 || q === 3) {
            Hero.hp = Hero.hp - (Dragon.power + Dragon.weapon - Hero.defence);
            console.log(`
        ----------- ${count} ------------
        Герой: ${Hero.hp}
        Дракон: ${Dragon.hp}
        `);
        }
        if (Hero.hp === 0) {
            console.log(`yoq siz `);
            break;
        }
        else {
            console.log(`
            ----------- ${count} ------------
            Герой: ${Hero.hp}
            Дракон: ${Dragon.hp}
            `);
        }
    }
}
function rand() {
    let random = Math.floor(Math.random() * 2) + 1;
    return random;
}
prom();
