const bosses = [
    ["Hortion", "Shaidal"], // 6/28
    ["Nakrov", "Ulanor"],

    ["Akhmâr Redstorm", "Bhastah & Shakfut"],
    ["Hortion", "Ulanor"],

    ["Nakrov", "Bhastah & Shakfut"],
    ["Akhmâr Redstorm", "Shaidal"],

    ["Hortion", "Bhastah & Shakfut"],
    ["Nakrov", "Shaidal"],

    ["Akhmâr Redstorm", "Ulanor"] // 6/27
];

const initialDate = new Date('2024-06-19');
const currentDate = new Date(new Date().setHours(0, 0, 0, 0));
const diffTime = Math.abs(currentDate - initialDate);
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

const prevIndex = (diffDays - 1) % 9;
const index = diffDays % 9;
const nextIndex = (diffDays + 1) % 9;

const yesterday = new Date(currentDate.getTime() - 86400000)
document.getElementById("prevDate").innerHTML = yesterday.toDateString();
document.getElementById("prevBoss1").innerHTML = bosses[prevIndex][0];
document.getElementById("prevBoss2").innerHTML = bosses[prevIndex][1];

document.getElementById("currDate").innerHTML = currentDate.toDateString();
document.getElementById("currBoss1").innerHTML = bosses[index][0];
document.getElementById("currBoss2").innerHTML = bosses[index][1];

const tomorrow = new Date(currentDate.getTime() + 86400000)
document.getElementById("nextDate").innerHTML = tomorrow.toDateString();
document.getElementById("nextBoss1").innerHTML = bosses[nextIndex][0];
document.getElementById("nextBoss2").innerHTML = bosses[nextIndex][1];


/*
Copyright (C) 2024-2025 nullforce

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
