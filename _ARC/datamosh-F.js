console.log('%c SOLVER COLLECTIVE ', 'background: #c2d500; color: #000; padding: 10px 20px; border-radius: 2px;');

import { run } from '/lib/ascii/run.js'
import * as program from '/lib/36786.js'
run(program, { element : document.querySelector('#ascii') }).then(function(e){
    //console.log(e)
}).catch(function(e) {
    console.warn(e.message)
    console.log(e.error)
})

        
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

var animation;
var state = (localStorage.getItem('0_commands') && JSON.parse(localStorage.getItem('0_commands')).filter(command => validateEmail(command)).length > 0) ? 'menu' : 'initial_never_logged_in';
var emailEntered = false;
var purposeEntered = false;
var dataEntryMode = false;
var email;
var purpose;
var date = new Date();
var testers = Math.floor(Math.random() * 30) + 1;


const klaviyoPostProfile = async () => {
    try{
        const options = {
            method: 'POST',
            headers: {Accept: 'text/html', 'Content-Type': 'application/x-www-form-urlencoded'},
            body: new URLSearchParams({
                data: JSON.stringify({
                    token: "R58uJx",
                    properties: {
                        "$email": email,
                        "Purpose": purpose
                    }
                })
            })
        };
        
        let response = await fetch('https://a.klaviyo.com/api/identify', options);
        return response.json();
    }catch(e){
        console.error(e);
    }
}


const terminalStateFunctions = {
    'initial_never_logged_in': (term) => termLogin(term),
    'menu': (term) => termMenu(term),
    'login_completed': (term) => termHackSequence(term)
}

const menuCommandFunctions = {
    '1': (term) => termMenuInfo(term) ,
    '2': (term) => termMenuReboot(term),
    '3': (term) => termMenuVideo(term),
    '4': (term) => termMenuOptions(term),
    '5': (term) => termMenuOptions(term),
    '6': (term) => termMenuOptions(term),
    '7': (term) => termMenuOptions(term)
}

async function termMenuInfo(term){
    term.echo('[_PROTOTYPE_EXPERIMENTAL_0001_]\nL1550, R800, WP294.92, NP251, N/TL195\n');
}

async function termMenuReboot(term){
    termHackSequence(term) // Reboot
}

async function termMenuVideo(term){
    // Simulate a mouse click:
    //window.location.href = "https://www.youtube.com/watch?v=0VdGLc7ZBXU&feature=emb_title";
    term.echo('Video coming soon.\n');
}

async function termMenuOptions(term){
    term.echo('[_PROTOTYPE_EXPERIMENTAL_0001_]\n');
    term.set_prompt('FRM-CONTROL> ').echo('Choose your own adventure:\n');
}


function delay(timeout) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

async function termStep(term, msg) {
    msg = `${msg}`;
    term.echo(msg);
    var id = term.last_index();
    await delay(1000);
    msg += '\n...successful.';
    term.update(-1, msg);
}

async function termLogin(term){
    animation = true;
    term.set_prompt('');
    await termStep(term, 'Connecting to adhoc NET 19.97.31.01:ssh ');
    term.echo('[_PROTOTYPE_EXPERIMENTAL_0001_]');
    term.echo('Enter email for team access permissions:');
    animation = false;
    term.set_prompt('# ');
    dataEntryMode = true;
}

async function termHackSequence(term) {
    animation = true;
    // App Loading
    await term.typing('enter', 50, 'loadingNext -v -sS -O 0.2.7 -rootpw="PMS396"');
    
    term.echo('Reset root password to "666F72756D".');
    await delay(400);

    // Reset Password
    await term.typing('enter', 50, 'ssh 19.97.31.01 -l root');
    term.set_prompt('root@19.97.31.01\'s password: ');
    await delay(1000);
    term.set_prompt('FRM-CONTROL> ').echo('root@19.97.31.01\'s password: \n');
    await delay(500);

    // Experimental Test Program Loader
    await term.typing('enter', 50, '[EXPERIMENTAL_TEST_PROGRAM_]');
    await delay(1500);
    await term.typing('enter', 30, '...........................');
    await term.typing('enter', 30, '////\t////\t////\t////');
    /*
    await term.typing('enter', 10, [
        '                          ',
        '                          ',
        '[;#e0df00;]         @#(((######%@    ',
        '[;#e0df00;]        @     ** **  @    ',
        '[;#e0df00;]        @    @@    *@     ',
        '[;#e0df00;]       @     @@     @     ',
        '[;#e0df00;]       @@@@@@@@@@@@@@     ',
        '[;#e0df00;]       @    @@&    @      ',
        '[;#e0df00;]      @     @@     @      ',
        '[;#e0df00;]      @ ** **     @       ',
        '[;#e0df00;]      @@@@@@@@@@@@@       ',
        '                          ',
        '                          '
        ].join('\n'));
    
    */
    // Warning - Team Activation Sequence
    await term.typing('enter', 50, 'LOADING.........');
    term.set_prompt('');
    await delay(800);
    term.echo('[LOADING_NEXT]');
    await delay(800);
    term.echo('[TESTERS_- - -]');
    await delay(800);
    term.echo('[TEAM_- - - ]\n\n');
    await delay(2000);
    term.echo('[[;#B9EDFF;]Warning: Activating TEST_LOCATION/S]');
    term.set_prompt('');
    term.echo('         [[;#B9EDFF;]ARE YOU SURE? (y/n)]');
    await delay(2000);
    term.update(-1, '         [[;#B9EDFF;]ARE YOU SURE? (y/n)] y');
    term.echo('');
    await delay(200);
    for (let i = 1; i <= testers; i++) {
        term.echo(`[[;#B9EDFF;]TEST_LOCATION ${i} online...]`);
        await delay(200);
    }
    // Crash Reported
    term.echo('CRASH REPORTED');
    await delay(400);
    async function crash(msg) {
        msg = `${msg} ...`;
        term.echo(msg);
        var id = term.last_index();
        await delay(1500);
        msg += 'REPORTING';
        term.update(-1, msg);
    }
    await crash('ERROR.._SYSTEM_CRASH');
    await delay(400);
    await crash('ERROR.._SYSTEM_CRASH');
    await delay(400);
    term.echo('CRASH REPORTED');
    await delay(400);
    state = 'menu';
    animation = false;
    terminalStateFunctions[state](term);
}

async function termMenu(term){
    emailEntered = true;
    purposeEntered = true;
    term.clear();
    animation = true;
    term.set_prompt('');
    term.echo('[AUTHENTICATED]\n\nMake a selection:\n[1] Info\t\t[2] Reboot\t\t\n[3] Remnant 01\t[4] Remnant 02\t[5] Remnant 03\t\t\n[6] Remnant 04\t[7] Remnant 05\n');
    animation = false;
    term.set_prompt('# ');
    dataEntryMode = true;
}


var term = $('.terminal-dialog .body').terminal(async function(command) {
    if(!command && !dataEntryMode){
        await terminalStateFunctions[state](term);
    }
    if(command && dataEntryMode){
        if(!emailEntered){
            if(validateEmail(command.trim())){
                email = command.trim();
                emailEntered = true;
                term.echo('\nWhat is your purpose here?');
                term.set_prompt('# ');
            }else{
                term.echo('\nInvalid email entered. Enter valid email address:');
                term.set_prompt('# ');
            }
        }else if(!purposeEntered){
            purpose = command;
            purposeEntered = true;
            // after last attribute is entered, submit data to Klaviyo API
            // ensure function is edited to include all fields to add to Klaviyo profile
            await klaviyoPostProfile();
            term.echo('\nData comm transmission processed.');
            dataEntryMode = false;
            state = 'login_completed';
            terminalStateFunctions[state](term);
        }else{
            if(menuCommandFunctions.hasOwnProperty(command)){
                await menuCommandFunctions[command](term);
            }else{
                dataEntryMode = false;
                term.echo('\nInvalid selection, please try again ');
                await delay(1000);
                state = 'menu';
                await terminalStateFunctions[state](term);
            }
        }
    }
}, {
    greetings: false,
    keydown: function(e) {
        if (!dataEntryMode || animation) {
            return false;
        }
    },
    prompt: '# ',
    // obBlur will prevent the keyboard on mobile from popup because it will keep the terminal in focus and on mobile the terminal has to be disabled on init so you can activate it with a finger tap 
    //onBlur: function() {
        //return false;
    //}
});

terminalStateFunctions[state](term);
