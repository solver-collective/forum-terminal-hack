/**
[header]
@author ertdfgcvb
@title  Time: milliseconds
@desc   Use of context.time
*/

// Globals have module scope
//const pattern = '▇|▆|▅|▄▇▇  \tF O▂▇__\tR▂U\t▂M▇▇  ▂▇▇▇▇....| |▁|▂|▃|▄|▅|▆|▇|▆|▅|▄|▃|▂|▁'
//const pattern =  '▇  ▇\n ▇|▆|▅|▄▇▇   ▇\n F O▂▇__\tR▂U\t▂M \n\t\t\t\t\t\t\t▁|▂|▃|▄|▅|▆|▇|▆|▅|▄|▃|▂|▁\n[ - - - -   - - - — - -  -  - — - -   - -  - — ]'
const pattern = '▄▄▇PMS 382C__▄ ░▇▇▇▇36786▇▇▇▇▇__▅▇▇▇▇--------|▆|▅▄▇▇  31:01:00.000▄▇░▇▄▇░▇░░'
//const pattern = '[;#e0df00;]         @#(((######%@_░░░░░░░▂FORUM'
//const pattern = '0101010100010101001010101010101▚┖┫┘┩┙┪ ▚┖┫┘┩┙┪ ▚┖┫┘┩┙┪ \tF O▂▇__R▂U\t▂M▇▇ ▚┖┫┘┩┙┪ ▚┖┫┘┩┙┪ ▚┖┫┘┩┙┪ '
//const pattern = '0110011001101111011100100111010101101101'
//const pattern = '╱'

// The default backround color and font attributes can be altered
// by exporting a ‘settings’ object (see the manual for details).
export const settings = {
	backgroundColor : '#252525',
	//color           : '#333',
	color           : '#292929',
	fontSize        : '5em',
	fontWeight      : 'lighter' // or 100
}

// This is the main loop.
// Character coordinates are passed in coord {x, y, index}.
// The function must return a single character or, alternatively, an object:
// {char, color, background, weight}.
export function main(coord, context, cursor, buffer) {
	const num = 1
	const t = context.time * 0.0001
	const x = coord.x
	const y = coord.y
	const cx = Math.floor(cursor.x) // column of the cell hovered
	const cy = Math.floor(cursor.y) // column of the cell hovered
	const o = Math.sin(y * Math.sin(t) * 0.2 + x * 0.04 + t) * (cy + 1)
	//const o = Math.sin(y * Math.cos(t) * 1.1 + x * 0.00004 + t) * 20
	//const o = (Math.sin(y * Math.sin(t) * 0.05 + x * 0.0004 + t) * 8) * 2
	//const o = sin(y * x * sin(t) * 0.003 + y * 0.01 + t) * 20
	//const i = (Math.round(Math.abs(x + y + o)) % pattern.length) * (cy + 1)
	const i = (Math.round(Math.abs(x + cy - o)) % pattern.length)
	//console.log(i)


	return {
		char   : pattern[i],
		fontWeight : 'light', // or 'light', 'bold', '400'
	}
}

/*
import { drawInfo } from '/src/modules/drawbox.js'

// This function is called after the main loop and is useful
// to manipulate the buffer; in this case with a window overlay.
export function post(context, cursor, buffer) {
	// An extra object can be passed to drawInfo to alter the default style
	drawInfo(context, cursor, buffer, {
		color : 'white', backgroundColor : 'royalblue', shadowStyle : 'gray'
	})
}
*/
